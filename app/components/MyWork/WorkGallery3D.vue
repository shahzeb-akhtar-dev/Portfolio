<template>
  <div ref="sectionRef" class="gallery3d-section" :style="{ minHeight: `${sectionHeight}px` }">
    <div ref="stickyRef" class="gallery3d-sticky">
      <canvas
        ref="canvasRef"
        class="gallery3d-canvas"
        :class="{ 'cursor-grab': !isDragging, 'cursor-grabbing': isDragging }"
        @mousedown.prevent="onPointerDown"
        @mousemove.prevent="onPointerMove"
        @mouseup.prevent="onPointerUp"
        @mouseleave="onPointerUp"
        @touchstart.prevent="onPointerDown"
        @touchmove.prevent="onPointerMove"
        @touchend.prevent="onPointerUp"
      />
      <div class="gallery-hint">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        <span>Scroll &amp; drag to explore</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

interface Project {
  id: number | string
  name: string
  description: string
  skills?: string[]
  image: string
}

const props = defineProps<{
  projects: Project[]
}>()

const sectionRef = ref<HTMLDivElement>()
const stickyRef = ref<HTMLDivElement>()
const canvasRef = ref<HTMLCanvasElement>()

const sectionHeight = ref(0)
const isDragging = ref(false)

function calcSectionHeight() {
  const count = props.projects.length
  const vh = typeof window !== 'undefined' ? window.innerHeight : 900
  sectionHeight.value = vh + count * vh * 0.8
}

let renderer: THREE.WebGLRenderer
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let cylinderGroup: THREE.Group
let cardGroups: THREE.Group[] = []
let animationId: number
let clock: THREE.Clock

let scrollContainer: HTMLElement | null = null
let scrollProgress = 0
let targetProgress = 0
let resizeTimeout: ReturnType<typeof setTimeout> | null = null

let dragOffset = 0
let dragVelocity = 0
let dragStartX = 0
let dragLastX = 0
let dragLastTime = 0

const CARD_W = 2.6
const CARD_H = 2.35
const CARD_D = 0.06
const RADIUS = 10

function getResponsiveValues() {
  const w = window.innerWidth
  if (w < 480) return { scale: 1.2, radius: 7 }
  if (w < 768) return { scale: 1.3, radius: 7.2 }
  if (w < 1024) return { scale: 1.3, radius: 8.5 }
  return { scale: 1.5, radius: RADIUS }
}

function truncateText(text: string, maxLen: number): string {
  return text.length > maxLen ? text.slice(0, maxLen).trimEnd() + '...' : text
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.arcTo(x + w, y, x + w, y + r, r)
  ctx.lineTo(x + w, y + h - r)
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r)
  ctx.lineTo(x + r, y + h)
  ctx.arcTo(x, y + h, x, y + h - r, r)
  ctx.lineTo(x, y + r)
  ctx.arcTo(x, y, x + r, y, r)
  ctx.closePath()
}

function createCardTexture(project: Project): Promise<THREE.Texture> {
  return new Promise((resolve) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const w = 640
      const h = 584
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d')!
      const cr = 16

      roundRect(ctx, 0, 0, w, h, cr)
      ctx.clip()

      const imgAreaH = h * 0.55
      const imgRatio = img.naturalWidth / img.naturalHeight
      const targetRatio = w / imgAreaH
      let iw: number, ih: number, ix: number, iy: number

      if (imgRatio > targetRatio) {
        ih = imgAreaH
        iw = ih * imgRatio
        ix = (w - iw) / 2
        iy = 0
      } else {
        iw = w
        ih = iw / imgRatio
        ix = 0
        iy = (imgAreaH - ih) / 2
      }
      ctx.drawImage(img, ix, iy, iw, ih)

      const glassGrad = ctx.createLinearGradient(0, 0, 0, imgAreaH)
      glassGrad.addColorStop(0, 'rgba(10,10,18,0.0)')
      glassGrad.addColorStop(0.45, 'rgba(10,10,18,0.04)')
      glassGrad.addColorStop(1, 'rgba(10,10,18,0.92)')
      ctx.fillStyle = glassGrad
      ctx.fillRect(0, 0, w, imgAreaH)

      ctx.fillStyle = 'rgba(255,255,255,0.06)'
      ctx.fillRect(0, imgAreaH - 1, w, 2)

      const infoGrad = ctx.createLinearGradient(0, imgAreaH - 20, 0, h)
      infoGrad.addColorStop(0, 'rgba(12,12,20,0.93)')
      infoGrad.addColorStop(1, 'rgba(10,10,16,1)')
      ctx.fillStyle = infoGrad
      ctx.fillRect(0, imgAreaH - 20, w, h - imgAreaH + 20)

      const accentColor = '#ff5900'

      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 26px "Inter", "Space Grotesk", sans-serif'
      ctx.fillText(project.name, 26, imgAreaH + 36)

      if (project.skills?.length) {
        let tagX = 26
        const tagY = imgAreaH + 56
        project.skills.slice(0, 3).forEach((skill) => {
          ctx.font = '11px "Inter", sans-serif'
          const m = ctx.measureText(skill)
          const tw = m.width + 16
          if (tagX + tw > w - 14) return
          ctx.fillStyle = accentColor + '1A'
          roundRect(ctx, tagX, tagY - 13, tw, 21, 10)
          ctx.fill()
          ctx.fillStyle = accentColor
          ctx.fillText(skill, tagX + 8, tagY)
          tagX += tw + 8
        })
      }

      const descLines = wrapText(ctx, truncateText(project.description, 100), w - 52, 20)
      ctx.fillStyle = 'rgba(180,180,200,0.78)'
      ctx.font = '15px "Inter", "Space Grotesk", sans-serif'
      descLines.forEach((line, i) => {
        ctx.fillText(line, 26, imgAreaH + 98 + i * 22)
      })

      ctx.strokeStyle = 'rgba(255,255,255,0.08)'
      ctx.lineWidth = 1
      roundRect(ctx, 0.5, 0.5, w - 1, h - 1, cr)
      ctx.stroke()

      const tex = new THREE.CanvasTexture(canvas)
      tex.colorSpace = THREE.SRGBColorSpace
      tex.minFilter = THREE.LinearMipmapLinearFilter
      tex.magFilter = THREE.LinearFilter
      tex.generateMipmaps = true
      resolve(tex)
    }
    img.onerror = () => {
      resolve(createFallbackTexture(project))
    }
    img.src = project.image
  })
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, _lh: number): string[] {
  const words = text.split(' ')
  const lines: string[] = []
  let current = ''
  for (const word of words) {
    const test = current ? `${current} ${word}` : word
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current)
      current = word
    } else {
      current = test
    }
  }
  if (current) lines.push(current)
  return lines.slice(0, 2)
}

function createFallbackTexture(project: Project): THREE.Texture {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 584
  const ctx = canvas.getContext('2d')!

  const bgGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  bgGrad.addColorStop(0, '#161622')
  bgGrad.addColorStop(1, '#0e0e18')
  ctx.fillStyle = bgGrad
  roundRect(ctx, 0, 0, canvas.width, canvas.height, 16)
  ctx.fill()
  ctx.clip()

  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 28px "Inter", sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(project.name, canvas.width / 2, canvas.height / 2 - 16)

  ctx.fillStyle = 'rgba(180,180,200,0.7)'
  ctx.font = '16px "Inter", sans-serif'
  ctx.fillText(truncateText(project.description, 60), canvas.width / 2, canvas.height / 2 + 28)
  ctx.textAlign = 'start'

  ctx.strokeStyle = 'rgba(255,255,255,0.08)'
  ctx.lineWidth = 1
  roundRect(ctx, 0.5, 0.5, canvas.width - 1, canvas.height - 1, 16)
  ctx.stroke()

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

function createScene() {
  if (!canvasRef.value) return

  const w = window.innerWidth
  const h = window.innerHeight

  scene = new THREE.Scene()
  scene.background = new THREE.Color('#0a0a0f')
  scene.fog = new THREE.FogExp2('#0a0a0f', 0.00018)

  camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100)
  camera.position.set(0, 0.5, 18)
  camera.lookAt(0, -0.2, 0)

  renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, antialias: true, alpha: false, powerPreference: 'high-performance' })
  renderer.setSize(w, h)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.15
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  clock = new THREE.Clock()

  const ambient = new THREE.AmbientLight('#334466', 0.6)
  scene.add(ambient)

  const key = new THREE.DirectionalLight('#ffffff', 3.5)
  key.position.set(5, 8, 10)
  key.castShadow = true
  key.shadow.mapSize.set(1024, 1024)
  key.shadow.camera.near = 0.5
  key.shadow.camera.far = 50
  key.shadow.camera.left = -20
  key.shadow.camera.right = 20
  key.shadow.camera.top = 20
  key.shadow.camera.bottom = -20
  key.shadow.bias = -0.0003
  scene.add(key)

  const rim = new THREE.DirectionalLight('#8899cc', 0.6)
  rim.position.set(-5, 2, -4)
  scene.add(rim)

  const accent = new THREE.PointLight('#ff5900', 12, 20, 1.5)
  accent.position.set(0, -3, 4)
  scene.add(accent)

  const backLight = new THREE.PointLight('#334466', 3, 18)
  backLight.position.set(0, 4, -8)
  scene.add(backLight)

  cylinderGroup = new THREE.Group()
  scene.add(cylinderGroup)

  createGround()
  createParticles()
}

function createGround() {
  const geo = new THREE.PlaneGeometry(60, 60)
  const mat = new THREE.MeshStandardMaterial({ color: '#0a0a0f', roughness: 0.9, metalness: 0.05, transparent: true, opacity: 0.85 })
  const ground = new THREE.Mesh(geo, mat)
  ground.rotation.x = -Math.PI / 2
  ground.position.y = -4
  ground.receiveShadow = true
  scene.add(ground)

  const gridGeo = new THREE.PlaneGeometry(44, 44)
  const gridMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vPos;
      void main() {
        vUv = uv;
        vec4 world = modelMatrix * vec4(position, 1.0);
        vPos = world.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      varying vec3 vPos;
      uniform float uTime;
      void main() {
        vec2 grid = abs(fract(vUv * 28.0) - 0.5);
        float line = min(grid.x, grid.y);
        float alpha = smoothstep(0.028, 0.0, line) * 0.035;
        float dist = length(vPos.xz) / 22.0;
        alpha *= 1.0 - smoothstep(0.0, 1.0, dist);
        gl_FragColor = vec4(vec3(1.0), alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
  })
  const grid = new THREE.Mesh(gridGeo, gridMat)
  grid.rotation.x = -Math.PI / 2
  grid.position.y = -3.98
  grid.name = 'grid'
  scene.add(grid)
}

function createParticles() {
  const count = 200
  const pos = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 24
    pos[i * 3 + 1] = Math.random() * 7 - 3.5
    pos[i * 3 + 2] = (Math.random() - 0.5) * 20
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  const mat = new THREE.PointsMaterial({
    color: '#8899bb',
    size: 0.022,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
  const dots = new THREE.Points(geo, mat)
  dots.name = 'particles'
  scene.add(dots)
}

function disposeGroup(group: THREE.Group) {
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.geometry?.dispose()
      const materials = Array.isArray(child.material) ? child.material : [child.material]
      materials.forEach((m) => {
        if ((m as THREE.MeshStandardMaterial).map) {
          ;(m as THREE.MeshStandardMaterial).map?.dispose()
        }
        m?.dispose()
      })
    }
  })
}

function disposeAllCards() {
  cardGroups.forEach((g) => {
    cylinderGroup.remove(g)
    disposeGroup(g)
  })
  cardGroups = []
}

async function buildCards() {
  const { scale, radius } = getResponsiveValues()
  const cw = CARD_W * scale
  const ch = CARD_H * scale
  const cd = CARD_D * scale
  const r = radius

  disposeAllCards()

  const total = props.projects.length
  if (total === 0) return

  const textures = await Promise.all(props.projects.map((p) => createCardTexture(p)))

  props.projects.forEach((project, i) => {
    const angle = (i / total) * Math.PI * 2

    const cardGroup = new THREE.Group()

    const geo = new THREE.BoxGeometry(cw, ch, cd, 2, 2, 2)
    const texture = textures[i]

    const frontMat = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.35, metalness: 0.08 })
    const edgeMat = new THREE.MeshStandardMaterial({ color: '#1a1a28', roughness: 0.5, metalness: 0.4 })
    const backMat = new THREE.MeshStandardMaterial({ color: '#0f0f1a', roughness: 0.7, metalness: 0.2 })

    const card = new THREE.Mesh(geo, [edgeMat, edgeMat, edgeMat, edgeMat, frontMat, backMat])
    card.castShadow = true
    card.receiveShadow = true
    card.name = 'card'
    cardGroup.add(card)

    const glowGeo = new THREE.PlaneGeometry(cw + 0.35, ch + 0.35)
    const glowMat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color('#ff5900') }, uHover: { value: 0 } },
      vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        varying vec2 vUv;
        uniform vec3 uColor;
        uniform float uHover;
        void main() {
          float d = length(vUv - 0.5) * 2.05;
          float a = smoothstep(1.0, 0.2, d) * (0.08 + uHover * 0.24);
          gl_FragColor = vec4(uColor, a);
        }
      `,
      transparent: true,
      depthWrite: false,
    })
    const glow = new THREE.Mesh(glowGeo, glowMat)
    glow.position.z = -0.001
    glow.name = 'glow'
    cardGroup.add(glow)

    const x = Math.sin(angle) * r
    const z = Math.cos(angle) * r
    cardGroup.position.set(x, -0.2, z)

    cardGroup.lookAt(new THREE.Vector3(x * 2, -0.2, z * 2))

    cardGroup.userData = {
      index: i,
      angle,
      floatOffset: Math.random() * Math.PI * 2,
      radius: r,
      glowMat,
    }

    cylinderGroup.add(cardGroup)
    cardGroups.push(cardGroup)
  })
}

function getCombinedProgress(): number {
  const combined = scrollProgress + dragOffset
  return Math.max(0, Math.min(1, combined))
}

function updateCylinderRotation() {
  const progress = getCombinedProgress()
  cylinderGroup.rotation.y = -progress * Math.PI * 2
}

function updateScrollProgress() {
  if (!sectionRef.value || !stickyRef.value) return

  const sectionRect = sectionRef.value.getBoundingClientRect()
  const stickyH = stickyRef.value.offsetHeight
  const scrollableH = sectionRect.height - stickyH

  if (scrollableH <= 0) {
    targetProgress = 0
    return
  }

  const raw = -sectionRect.top / scrollableH
  targetProgress = Math.max(0, Math.min(1, raw))
}

function handleScroll() {
  updateScrollProgress()
}

function handleResize() {
  if (resizeTimeout) clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => {
    const w = window.innerWidth
    const h = window.innerHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
    calcSectionHeight()
    buildCards().then(() => updateCylinderRotation())
  }, 150)
}

function onPointerDown(e: MouseEvent | TouchEvent) {
  isDragging.value = true
  const clientX = e instanceof MouseEvent ? e.clientX : e?.touches[0].clientX
  dragStartX = clientX
  dragLastX = clientX
  dragLastTime = performance.now()
  dragVelocity = 0
}

function onPointerMove(e: MouseEvent | TouchEvent) {
  if (!isDragging.value) return
  const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX
  const now = performance.now()

  const dx = clientX - dragLastX
  const dt = now - dragLastTime

  if (dt > 0) {
    dragVelocity = dx / dt
  }

  dragLastX = clientX
  dragLastTime = now

  const sensitivity = window.innerWidth < 768 ? 0.0035 : 0.002
  dragOffset -= dx * sensitivity
}

function onPointerUp() {
  isDragging.value = false
}

function animate() {
  animationId = requestAnimationFrame(animate)
  const elapsed = clock.getElapsedTime()

  scrollProgress += (targetProgress - scrollProgress) * 0.07

  if (!isDragging.value) {
    dragVelocity *= 0.94
    if (Math.abs(dragVelocity) < 0.00005) {
      dragVelocity = 0
      const snap = Math.round(scrollProgress * props.projects.length) / props.projects.length
      dragOffset += (snap - (scrollProgress + dragOffset)) * 0.06
    } else {
      dragOffset += dragVelocity
    }
  }

  updateCylinderRotation()

  const grid = scene.getObjectByName('grid') as THREE.Mesh
  if (grid?.material instanceof THREE.ShaderMaterial) {
    grid.material.uniforms.uTime.value = elapsed
  }

  const total = props.projects.length
  const progress = getCombinedProgress()

  const particles = scene.getObjectByName('particles')
  if (particles) {
    particles.rotation.y += 0.0003
  }

  cardGroups.forEach((group) => {
    const fy = Math.sin(elapsed * 0.55 + group.userData.floatOffset) * 0.07
    group.position.y = -0.2 + fy

    const cardAngle = group.userData.angle / (Math.PI * 2)
    let dist = 1 - Math.abs(progress - cardAngle) * 2.8
    dist = Math.max(0, Math.min(1, dist))

    const glowMat = group.userData.glowMat as THREE.ShaderMaterial
    if (glowMat) {
      glowMat.uniforms.uHover.value = dist
    }
  })

  renderer.render(scene, camera)
}

onMounted(async () => {
  scrollContainer = document.getElementById('BodyWrapper')
  calcSectionHeight()

  createScene()
  await buildCards()
  updateScrollProgress()
  updateCylinderRotation()
  animate()

  const target = scrollContainer || window
  target.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
  if (resizeTimeout) clearTimeout(resizeTimeout)
  const target = scrollContainer || window
  target.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  disposeAllCards()
  scene?.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.geometry?.dispose()
      const materials = Array.isArray(child.material) ? child.material : [child.material]
      materials.forEach((m) => m?.dispose())
    }
  })
  renderer?.dispose()
})
</script>

<style scoped>
.gallery3d-section {
  position: relative;
  background: #0a0a0f;
}

.gallery3d-sticky {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.gallery3d-canvas {
  display: block;
  width: 100%;
  height: 100%;
  touch-action: none;
}

.cursor-grab {
  cursor: grab;
}

.cursor-grabbing {
  cursor: grabbing;
}

.gallery-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(200, 200, 220, 0.5);
  font-size: 13px;
  font-family: 'Inter', 'Space Grotesk', sans-serif;
  letter-spacing: 0.02em;
  pointer-events: none;
  user-select: none;
  animation: hintPulse 3s ease-in-out infinite;
}

@keyframes hintPulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.75; }
}
</style>
