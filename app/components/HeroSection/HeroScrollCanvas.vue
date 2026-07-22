<template>
  <div class="hero-canvas-wrapper">
    <canvas ref="canvasRef" class="hero-canvas"></canvas>
    <div class="canvas-vignette"></div>
    <div class="canvas-bottom-fade"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const TOTAL_FRAMES = 118
const BASE_PATH = '/images/hero-frames/'
const LERP_FACTOR = 0.12

const canvasRef = ref<HTMLCanvasElement | null>(null)

let ctx: CanvasRenderingContext2D | null = null
let scrollContainer: HTMLElement | null = null
let heroEl: HTMLElement | null = null
let animationId = 0
let currentFrameIndex = 0
let targetFrameIndex = 0
let imageCache = new Map<string, HTMLImageElement>()
let preloadedFrames = new Set<number>()
let isPreloading = false
let resizeTimeout: ReturnType<typeof setTimeout> | null = null

function getFrameUrl(index: number): string {
  const padded = String(index).padStart(3, '0')
  return `${BASE_PATH}frame_${padded}_delay-0.041s.webp`
}

function resizeCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return

  const dpr = Math.min(window.devicePixelRatio, 2)
  const w = window.innerWidth
  const h = window.innerHeight

  canvas.width = w * dpr
  canvas.height = h * dpr
  canvas.style.width = `${w}px`
  canvas.style.height = `${h}px`

  if (ctx) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'
    
    ctx.fillStyle = '#0a0a0f'
    ctx.fillRect(0, 0, w, h)
  }
}

function drawFrame(img: HTMLImageElement) {
  if (!ctx) return

  const canvasW = window.innerWidth
  const canvasH = window.innerHeight
  const imgW = img.naturalWidth
  const imgH = img.naturalHeight
  const canvasRatio = canvasW / canvasH
  const imgRatio = imgW / imgH

  let renderW: number, renderH: number, offsetX: number, offsetY: number

  if (canvasRatio > imgRatio) {
    renderW = canvasW
    renderH = canvasW / imgRatio
    offsetX = 0
    offsetY = (canvasH - renderH) / 2
  } else {
    renderH = canvasH
    renderW = canvasH * imgRatio
    offsetX = (canvasW - renderW) / 2
    offsetY = 0
  }

  ctx.clearRect(0, 0, canvasW, canvasH)
  ctx.drawImage(img, offsetX, offsetY, renderW, renderH)
}

async function loadFrameImage(index: number): Promise<HTMLImageElement> {
  const url = getFrameUrl(index)

  const cached = imageCache.get(url)
  if (cached) return cached

  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      imageCache.set(url, img)
      resolve(img)
    }
    img.onerror = () => {
      const fallback = new Image()
      fallback.src = `https://placehold.co/1920x1080/0a0a0f/333344/webp?text=Frame+${index}`
      imageCache.set(url, fallback)
      resolve(fallback)
    }
    img.src = url
  })
}

async function renderCurrentFrame() {
  const idx = Math.round(currentFrameIndex)
  const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, idx))
  const img = await loadFrameImage(clamped)
  drawFrame(img)
}

function updateTargetFrame() {
  if (!heroEl) return

  const rect = heroEl.getBoundingClientRect()
  const viewportH = window.innerHeight
  const scrollableH = rect.height - viewportH

  if (scrollableH <= 0) {
    targetFrameIndex = 0
    return
  }

  const rawProgress = -rect.top / scrollableH
  const progress = Math.max(0, Math.min(1, rawProgress))
  targetFrameIndex = progress * (TOTAL_FRAMES - 1)
}

function tickAnimation() {
  animationId = requestAnimationFrame(tickAnimation)

  const diff = targetFrameIndex - currentFrameIndex
  if (Math.abs(diff) > 0.005) {
    currentFrameIndex += diff * LERP_FACTOR
    renderCurrentFrame()
  }
}

function handleScroll() {
  updateTargetFrame()
}

function handleResize() {
  if (resizeTimeout) clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => {
    resizeCanvas()
    updateTargetFrame()
    renderCurrentFrame()
  }, 100)
}

async function preloadFrames() {
  if (isPreloading) return
  isPreloading = true

  const steps = [16, 8, 4, 2, 1]
  for (const step of steps) {
    for (let i = 0; i < TOTAL_FRAMES; i += step) {
      if (preloadedFrames.has(i)) continue
      preloadedFrames.add(i)
      loadFrameImage(i)
    }
    await new Promise((r) => setTimeout(r, 50))
  }
}

onMounted(async () => {
  const canvas = canvasRef.value
  if (!canvas) return

  ctx = canvas.getContext('2d')
  if (!ctx) return

  scrollContainer = document.getElementById('BodyWrapper')
  if (!scrollContainer) {
    scrollContainer = document.querySelector('[class*="layout-content"]') as HTMLElement | null
  }

  heroEl = canvas.closest('[data-hero-container]') as HTMLElement | null
  if (!heroEl) {
    heroEl = document.getElementById('hero-section') as HTMLElement | null
  }

  resizeCanvas()
  updateTargetFrame()

  await loadFrameImage(0)

  const scrollTarget = scrollContainer || window
  scrollTarget.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize)

  renderCurrentFrame()
  tickAnimation()
  preloadFrames()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
  if (resizeTimeout) clearTimeout(resizeTimeout)

  const scrollTarget = scrollContainer || window
  scrollTarget.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)

  imageCache.clear()
  preloadedFrames.clear()
})
</script>

<style scoped>
.hero-canvas-wrapper {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  overflow: hidden;
  background: #0a0a0f;
}

.hero-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.canvas-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 55%, rgba(10, 10, 15, 0.45) 100%);
  pointer-events: none;
  z-index: 2;
}

.canvas-bottom-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 35%;
  background: linear-gradient(to bottom, transparent 0%, rgba(10, 10, 15, 0.8) 100%);
  pointer-events: none;
  z-index: 2;
}
</style>
