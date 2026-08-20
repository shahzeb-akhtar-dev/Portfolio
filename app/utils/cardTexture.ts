import * as THREE from 'three'
import type { Palette } from '../composables/useGalleryTheme'

export interface Project {
  id: number | string
  name: string
  description: string
  skills?: string[]
  image: string
}

const CANVAS_W = 640
const CANVAS_H = 584
const IMG_AREA_H = CANVAS_H * 0.55

const imageCache = new Map<string, HTMLImageElement>()

function loadImage(src: string): Promise<HTMLImageElement> {
  const cached = imageCache.get(src)
  if (cached?.complete) return Promise.resolve(cached)

  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      imageCache.set(src, img)
      resolve(img)
    }
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
    img.src = src
  })
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

function truncate(text: string, max: number) {
  return text.length > max ? `${text.slice(0, max).trimEnd()}...` : text
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(' ')
  const lines: string[] = []
  let line = ''

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word
    if (line && ctx.measureText(candidate).width > maxWidth) {
      lines.push(line)
      line = word
    } else {
      line = candidate
    }
  }
  if (line) lines.push(line)
  return lines.slice(0, 2)
}

function drawCoverImage(ctx: CanvasRenderingContext2D, img: HTMLImageElement) {
  const ratio = img.naturalWidth / img.naturalHeight
  const areaRatio = CANVAS_W / IMG_AREA_H
  let w: number, h: number, x: number, y: number

  if (ratio > areaRatio) {
    h = IMG_AREA_H
    w = h * ratio
    x = (CANVAS_W - w) / 2
    y = 0
  } else {
    w = CANVAS_W
    h = w / ratio
    x = 0
    y = (IMG_AREA_H - h) / 2
  }
  ctx.drawImage(img, x, y, w, h)
}

function drawTags(ctx: CanvasRenderingContext2D, skills: string[], p: Palette) {
  let x = 26
  const y = IMG_AREA_H + 56
  ctx.font = '11px "Inter", sans-serif'

  for (const skill of skills.slice(0, 3)) {
    const tagWidth = ctx.measureText(skill).width + 16
    if (x + tagWidth > CANVAS_W - 14) break

    ctx.fillStyle = p.glow.from + p.tag.bgAlpha
    roundRect(ctx, x, y - 13, tagWidth, 21, 10)
    ctx.fill()

    ctx.fillStyle = p.tag.text
    ctx.fillText(skill, x + 8, y)
    x += tagWidth + 8
  }
}

function drawCard(ctx: CanvasRenderingContext2D, project: Project, img: HTMLImageElement, p: Palette) {
  roundRect(ctx, 0, 0, CANVAS_W, CANVAS_H, 0)
  ctx.clip()
  drawCoverImage(ctx, img)

  const imgFade = ctx.createLinearGradient(0, 0, 0, IMG_AREA_H)
  imgFade.addColorStop(0, p.canvas.imgTop)
  imgFade.addColorStop(0.45, p.canvas.imgMid)
  imgFade.addColorStop(1, p.canvas.imgBottom)
  ctx.fillStyle = imgFade
  ctx.fillRect(0, 0, CANVAS_W, IMG_AREA_H)

  const infoFade = ctx.createLinearGradient(0, IMG_AREA_H - 20, 0, CANVAS_H)
  infoFade.addColorStop(0, p.canvas.infoTop)
  infoFade.addColorStop(1, p.canvas.infoBottom)
  ctx.fillStyle = infoFade
  ctx.fillRect(0, IMG_AREA_H - 20, CANVAS_W, CANVAS_H - IMG_AREA_H + 20)

  ctx.fillStyle = p.text.primary
  ctx.font = 'bold 26px "Inter", "Space Grotesk", sans-serif'
  ctx.fillText(project.name, 26, IMG_AREA_H + 36)

  drawTags(ctx, project.skills ?? [], p)

  ctx.fillStyle = p.text.secondary
  ctx.font = '15px "Inter", "Space Grotesk", sans-serif'
  wrapText(ctx, truncate(project.description, 100), CANVAS_W - 52).forEach((line, i) => {
    ctx.fillText(line, 26, IMG_AREA_H + 98 + i * 22)
  })

  ctx.strokeStyle = p.card.border
  ctx.lineWidth = 1
  roundRect(ctx, 0.5, 0.5, CANVAS_W - 1, CANVAS_H - 1, 16)
  ctx.stroke()
}

function drawFallback(ctx: CanvasRenderingContext2D, project: Project, p: Palette) {
  roundRect(ctx, 0, 0, CANVAS_W, CANVAS_H, 16)
  ctx.clip()

  const grad = ctx.createLinearGradient(0, 0, CANVAS_W, CANVAS_H)
  grad.addColorStop(0, p.isDark ? '#161622' : '#eef2ff')
  grad.addColorStop(1, p.isDark ? '#0e0e18' : '#e2e8f0')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, CANVAS_W, CANVAS_H)

  ctx.textAlign = 'center'
  ctx.fillStyle = p.text.primary
  ctx.font = 'bold 28px "Inter", sans-serif'
  ctx.fillText(project.name, CANVAS_W / 2, CANVAS_H / 2 - 16)

  ctx.fillStyle = p.text.secondary
  ctx.font = '16px "Inter", sans-serif'
  ctx.fillText(truncate(project.description, 60), CANVAS_W / 2, CANVAS_H / 2 + 28)
  ctx.textAlign = 'start'
}

function toTexture(canvas: HTMLCanvasElement): THREE.Texture {
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.minFilter = THREE.LinearMipmapLinearFilter
  tex.magFilter = THREE.LinearFilter
  tex.generateMipmaps = true
  return tex
}

/** Renders a project into a themed canvas texture. Images are cached, so
 *  re-rendering on a theme change never re-fetches them over the network. */
export async function createCardTexture(project: Project, palette: Palette): Promise<THREE.Texture> {
  const canvas = document.createElement('canvas')
  canvas.width = CANVAS_W
  canvas.height = CANVAS_H
  const ctx = canvas.getContext('2d')!

  try {
    drawCard(ctx, project, await loadImage(project.image), palette)
  } catch {
    drawFallback(ctx, project, palette)
  }
  return toTexture(canvas)
}

export function clearImageCache() {
  imageCache.clear()
}
