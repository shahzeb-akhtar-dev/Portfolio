import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue'
import * as THREE from 'three'
import { useGalleryTheme, type Palette } from './useGalleryTheme'
import { createCardTexture, clearImageCache, type Project } from '../utils/cardTexture'

const CARD_SIZE = { w: 2.6, h: 2.35, d: 0.06 }
const BASE_RADIUS = 10

function responsiveScale() {
  const w = window.innerWidth
  if (w < 480) return { scale: 1.15, radius: 6.5 }
  if (w < 768) return { scale: 1.3, radius: 7.2 }
  if (w < 1024) return { scale: 1.35, radius: 8.5 }
  if (w < 1536) return { scale: 1.5, radius: BASE_RADIUS }
  return { scale: 1.65, radius: BASE_RADIUS * 1.15 }
}

export function useGallery3D(projects: Ref<Project[]>) {
  const sectionRef = ref<HTMLDivElement>()
  const stickyRef = ref<HTMLDivElement>()
  const canvasRef = ref<HTMLCanvasElement>()
  const sectionHeight = ref(0)
  const isDragging = ref(false)

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let renderer: THREE.WebGLRenderer
  let scene: THREE.Scene
  let camera: THREE.PerspectiveCamera
  let clock: THREE.Clock
  let cylinder: THREE.Group
  let cardGroups: THREE.Group[] = []

  let ambient: THREE.AmbientLight, key: THREE.DirectionalLight, rim: THREE.DirectionalLight
  let accent: THREE.PointLight, back: THREE.PointLight
  let ground: THREE.MeshStandardMaterial
  let grid: THREE.ShaderMaterial
  let particles: THREE.PointsMaterial

  let animationId = 0
  let resizeTimer: ReturnType<typeof setTimeout>
  let scrollTarget = 0
  let scrollProgress = 0
  let dragOffset = 0
  let dragVelocity = 0
  let dragLastX = 0
  let dragLastTime = 0
  let visible = true
  let scrollHost: HTMLElement | Window = window
  let intersectionObserver: IntersectionObserver

  const combinedProgress = () => Math.max(0, Math.min(1, scrollProgress + dragOffset))

  function calcSectionHeight() {
    const vh = window.innerHeight
    sectionHeight.value = vh + projects.value.length * vh * 0.8
  }

  /* ---------------- scene setup ---------------- */

  function buildScene(palette: Palette) {
    const canvas = canvasRef.value!
    const { innerWidth: w, innerHeight: h } = window

    scene = new THREE.Scene()
    scene.background = new THREE.Color(palette.bg)
    scene.fog = new THREE.FogExp2(palette.bg, 0.00018)

    camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100)
    camera.position.set(0, -0.02, 19.5)
    camera.lookAt(0, -1.6, 0)

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.15
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    clock = new THREE.Clock()

    ambient = new THREE.AmbientLight()
    key = new THREE.DirectionalLight()
    key.position.set(5, 8, 10)
    key.castShadow = true
    key.shadow.mapSize.set(1024, 1024)
    Object.assign(key.shadow.camera, { near: 0.5, far: 50, left: -20, right: 20, top: 20, bottom: -20 })
    key.shadow.bias = -0.0003

    rim = new THREE.DirectionalLight()
    rim.position.set(-5, 2, -4)

    accent = new THREE.PointLight(undefined, undefined, 20, 1.5)
    accent.position.set(0, -3, 4)

    back = new THREE.PointLight(undefined, undefined, 18)
    back.position.set(0, 4, -8)

    scene.add(ambient, key, rim, accent, back)

    cylinder = new THREE.Group()
    scene.add(cylinder)

    buildGround()
    buildParticles()
    applyPalette(palette)
  }

  function buildGround() {
    ground = new THREE.MeshStandardMaterial({ roughness: 0.9, metalness: 0.05, transparent: true })
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), ground)
    plane.rotation.x = -Math.PI / 2
    plane.position.y = -4
    plane.receiveShadow = true
    scene.add(plane)

    grid = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color() }, uAlpha: { value: 0 } },
      vertexShader: `
        varying vec2 vUv; varying vec3 vPos;
        void main() {
          vUv = uv;
          vPos = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        varying vec2 vUv; varying vec3 vPos;
        uniform vec3 uColor; uniform float uAlpha;
        void main() {
          vec2 g = abs(fract(vUv * 28.0) - 0.5);
          float line = smoothstep(0.028, 0.0, min(g.x, g.y)) * uAlpha;
          float fade = 1.0 - smoothstep(0.0, 1.0, length(vPos.xz) / 22.0);
          gl_FragColor = vec4(uColor, line * fade);
        }`,
    })
    const gridMesh = new THREE.Mesh(new THREE.PlaneGeometry(44, 44), grid)
    gridMesh.rotation.x = -Math.PI / 2
    gridMesh.position.y = -3.98
    scene.add(gridMesh)
  }

  function buildParticles() {
    const count = window.innerWidth < 768 ? 110 : 200
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 24
      pos[i * 3 + 1] = Math.random() * 7 - 3.5
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    particles = new THREE.PointsMaterial({ size: 0.022, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })
    const points = new THREE.Points(geo, particles)
    points.name = 'particles'
    scene.add(points)
  }

  /** Pushes a palette's colors/intensities into already-created scene objects. */
  function applyPalette(p: Palette) {
    ;(scene.background as THREE.Color).set(p.bg)
    ;(scene.fog as THREE.FogExp2).color.set(p.bg)

    const lights: [THREE.Light, { color: string; intensity: number }][] = [
      [ambient, p.lights.ambient],
      [key, p.lights.key],
      [rim, p.lights.rim],
      [accent, p.lights.accent],
      [back, p.lights.back],
    ]
    lights.forEach(([light, cfg]) => {
      light.color.set(cfg.color)
      light.intensity = cfg.intensity
    })

    ground.color.set(p.bg)
    ground.opacity = p.ground.opacity

    grid.uniforms.uColor.value.set(p.grid.color)
    grid.uniforms.uAlpha.value = p.grid.alpha

    particles.color.set(p.particles.color)
    particles.opacity = p.particles.opacity
  }

  /* ---------------- cards ---------------- */

  function disposeCards() {
    cardGroups.forEach((group) => {
      cylinder.remove(group)
      group.traverse((child) => {
        if (!(child instanceof THREE.Mesh)) return
        child.geometry.dispose()
        const mats = Array.isArray(child.material) ? child.material : [child.material]
        mats.forEach((m) => {
          ;(m as THREE.MeshStandardMaterial).map?.dispose()
          m.dispose()
        })
      })
    })
    cardGroups = []
  }

  let buildToken = 0

  async function buildCards(palette: Palette) {
    const token = ++buildToken
    const list = projects.value
    if (!list.length) {
      disposeCards()
      return
    }

    const { scale, radius } = responsiveScale()
    const w = CARD_SIZE.w * scale
    const h = CARD_SIZE.h * scale
    const d = CARD_SIZE.d * scale

    const textures = await Promise.all(list.map((p) => createCardTexture(p, palette)))
    // A newer build started (or unmounted) while textures were loading — bail
    // so a slow theme/resize build can't clobber a faster, more recent one.
    if (token !== buildToken) return

    disposeCards()
    const glowFrom = new THREE.Color(palette.glow.from)
    const glowTo = new THREE.Color(palette.glow.to)

    list.forEach((_project, i) => {
      const angle = (i / list.length) * Math.PI * 2
      const group = new THREE.Group()

      const face = new THREE.MeshStandardMaterial({ map: textures[i], roughness: 0.35, metalness: 0.08 })
      const edge = new THREE.MeshStandardMaterial({ color: palette.card.edge, roughness: 0.5, metalness: 0.4 })
      const backFace = new THREE.MeshStandardMaterial({ color: palette.card.back, roughness: 0.7, metalness: 0.2 })
      const card = new THREE.Mesh(new THREE.BoxGeometry(w, h, d, 2, 2, 2), [edge, edge, edge, edge, face, backFace])
      card.castShadow = card.receiveShadow = true
      group.add(card)

      const t = list.length > 1 ? i / (list.length - 1) : 0
      const glowMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: { uColor: { value: glowFrom.clone().lerp(glowTo, t) }, uHover: { value: 0 } },
        vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `
          varying vec2 vUv; uniform vec3 uColor; uniform float uHover;
          void main() {
            float d = length(vUv - 0.5) * 2.05;
            float a = smoothstep(1.0, 0.2, d) * (0.08 + uHover * 0.24);
            gl_FragColor = vec4(uColor, a);
          }`,
      })
      const glow = new THREE.Mesh(new THREE.PlaneGeometry(w + 0.35, h + 0.35), glowMat)
      glow.position.z = -0.001
      group.add(glow)

      const x = Math.sin(angle) * radius
      const z = Math.cos(angle) * radius
      group.position.set(x, -0.2, z)
      group.lookAt(x * 2, -0.2, z * 2)
      group.userData = { angle, floatOffset: Math.random() * Math.PI * 2, glowMat }

      cylinder.add(group)
      cardGroups.push(group)
    })
  }

  /* ---------------- scroll + drag ---------------- */

  function updateScrollTarget() {
    if (!sectionRef.value || !stickyRef.value) return
    const rect = sectionRef.value.getBoundingClientRect()
    const scrollable = rect.height - stickyRef.value.offsetHeight
    scrollTarget = scrollable > 0 ? Math.max(0, Math.min(1, -rect.top / scrollable)) : 0
  }

  function onPointerDown(e: MouseEvent | TouchEvent) {
    isDragging.value = true
    dragLastX = 'touches' in e ? e.touches[0].clientX : e.clientX
    dragLastTime = performance.now()
    dragVelocity = 0
  }

  function onPointerMove(e: MouseEvent | TouchEvent) {
    if (!isDragging.value) return
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX
    const now = performance.now()
    const dt = now - dragLastTime
    if (dt > 0) dragVelocity = (x - dragLastX) / dt

    const sensitivity = window.innerWidth < 768 ? 0.0035 : 0.002
    dragOffset -= (x - dragLastX) * sensitivity
    dragLastX = x
    dragLastTime = now
  }

  function onPointerUp() {
    isDragging.value = false
  }

  /* ---------------- render loop ---------------- */

  function animate() {
    animationId = requestAnimationFrame(animate)
    if (!visible) return

    const elapsed = clock.getElapsedTime()
    scrollProgress += (scrollTarget - scrollProgress) * 0.07

    // Only settle/snap while there's leftover drag state (velocity from a
    // flick, or a residual offset). Pure scrolling never touches dragOffset,
    // so it can't fight scrollProgress or flip-flop at card boundaries.
    if (!isDragging.value && (Math.abs(dragVelocity) > 0.00005 || Math.abs(dragOffset) > 0.0008)) {
      dragVelocity *= 0.94
      if (Math.abs(dragVelocity) < 0.00005) {
        dragVelocity = 0
        const snapTarget = Math.round((scrollProgress + dragOffset) * projects.value.length) / projects.value.length
        dragOffset += (snapTarget - (scrollProgress + dragOffset)) * 0.06
        if (Math.abs(dragOffset) < 0.0008) dragOffset = 0
      } else {
        dragOffset += dragVelocity
      }
    }

    const progress = combinedProgress()
    cylinder.rotation.y = -progress * Math.PI * 2
    grid.uniforms.uTime.value = elapsed

    if (!reducedMotion) scene.getObjectByName('particles')!.rotation.y += 0.0003

    cardGroups.forEach((group) => {
      group.position.y = -0.2 + (reducedMotion ? 0 : Math.sin(elapsed * 0.55 + group.userData.floatOffset) * 0.07)
      const closeness = Math.max(0, Math.min(1, 1 - Math.abs(progress - group.userData.angle / (Math.PI * 2)) * 2.8))
      group.userData.glowMat.uniforms.uHover.value = closeness
    })

    renderer.render(scene, camera)
  }

  /* ---------------- lifecycle ---------------- */

  const { palette, dispose: disposeTheme } = useGalleryTheme((next) => {
    applyPalette(next)
    buildCards(next)
  })

  function handleResize() {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      calcSectionHeight()
      buildCards(palette)
    }, 150)
  }

  onMounted(async () => {
    scrollHost = document.getElementById('BodyWrapper') || window
    calcSectionHeight()
    buildScene(palette)
    await buildCards(palette)
    updateScrollTarget()
    animate()

    scrollHost.addEventListener('scroll', updateScrollTarget as EventListener, { passive: true })
    window.addEventListener('resize', handleResize)

    intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true
    })
    if (sectionRef.value) intersectionObserver.observe(sectionRef.value)
  })

  onBeforeUnmount(() => {
    buildToken++
    cancelAnimationFrame(animationId)
    clearTimeout(resizeTimer)
    scrollHost.removeEventListener('scroll', updateScrollTarget as EventListener)
    window.removeEventListener('resize', handleResize)
    intersectionObserver?.disconnect()
    disposeTheme()
    disposeCards()

    scene?.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return
      child.geometry.dispose()
      const mats = Array.isArray(child.material) ? child.material : [child.material]
      mats.forEach((m) => m.dispose())
    })
    renderer?.dispose()
    clearImageCache()
  })

  return { sectionRef, stickyRef, canvasRef, sectionHeight, isDragging, onPointerDown, onPointerMove, onPointerUp }
}