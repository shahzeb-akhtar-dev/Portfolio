import { ref, onBeforeUnmount, type Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface FadeConfig {
  y?: number
  opacity?: number
  scale?: number
  x?: number
}

interface ScrollAnimationOptions {
  fadeIn?: FadeConfig
  fadeOut?: FadeConfig
  start?: string
  end?: string
  duration?: number
  ease?: string
  once?: boolean
}

const SCROLLER_SELECTOR = '#BodyWrapper'

function getScroller(): Element | Window {
  return document.querySelector(SCROLLER_SELECTOR) || window
}

export function useScrollAnimation(
  target: Ref<HTMLElement | null>,
  options: ScrollAnimationOptions = {},
) {
  const {
    fadeIn = {},
    fadeOut = {},
    start = 'top 80%',
    end = 'bottom 20%',
    duration = 0.8,
    ease = 'power2.out',
    once = false,
  } = options

  const isVisible = ref(false)
  let ctx: gsap.Context | null = null

  const init = () => {
    if (!target.value) return

    kill()

    const el = target.value
    const scroller = getScroller()

    const fromY = fadeIn.y ?? 0
    const fromOpacity = fadeIn.opacity ?? 1
    const fromScale = fadeIn.scale ?? 1
    const fromX = fadeIn.x ?? 0

    const exitY = fadeOut.y ?? 0
    const exitOpacity = fadeOut.opacity ?? 1
    const exitScale = fadeOut.scale ?? 1
    const exitX = fadeOut.x ?? 0

    ctx = gsap.context(() => {
      gsap.set(el, {
        y: fromY,
        x: fromX,
        opacity: fromOpacity,
        scale: fromScale,
      })

      ScrollTrigger.create({
        trigger: el,
        scroller,
        start,
        end,
        once,
        onEnter: () => {
          gsap.to(el, {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            duration,
            ease,
          })
          isVisible.value = true
        },
        onLeave: () => {
          gsap.to(el, {
            y: exitY,
            x: exitX,
            opacity: exitOpacity,
            scale: exitScale,
            duration,
            ease: 'power2.in',
          })
          isVisible.value = false
        },
        onEnterBack: () => {
          gsap.to(el, {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            duration,
            ease,
          })
          isVisible.value = true
        },
        onLeaveBack: () => {
          gsap.to(el, {
            y: fromY,
            x: fromX,
            opacity: fromOpacity,
            scale: fromScale,
            duration,
            ease: 'power2.in',
          })
          isVisible.value = false
        },
      })
    }, el)
  }

  const kill = () => {
    if (ctx) {
      ctx.revert()
      ctx = null
    }
  }

  const refresh = () => {
    kill()
    init()
    ScrollTrigger.refresh()
  }

  onBeforeUnmount(() => {
    kill()
  })

  return {
    isVisible,
    init,
    kill,
    refresh,
  }
}

export function useScrollAnimationBatch(
  targets: Ref<HTMLElement | null>[],
  options: ScrollAnimationOptions = {},
) {
  const animations = targets.map((t) => useScrollAnimation(t, options))

  const initAll = () => {
    animations.forEach((a) => a.init())
  }

  const killAll = () => {
    animations.forEach((a) => a.kill())
  }

  const refreshAll = () => {
    animations.forEach((a) => a.refresh())
  }

  onBeforeUnmount(() => {
    killAll()
  })

  return {
    animations,
    initAll,
    killAll,
    refreshAll,
  }
}
