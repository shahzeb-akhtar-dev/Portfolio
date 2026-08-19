<template>
  <section
    class="relative w-full pt-8 pb-12 min-h-[calc(100dvh)] bg-[var(--bg-primary-color)] overflow-hidden max-sm:pt-6 max-sm:pb-8"
    id="hero-section"
  >
    <div class="max-w-[1280px] mx-auto px-6 max-sm:px-4">
      <div
        class="grid grid-cols-2 items-center gap-12 lg:gap-8 md:grid-cols-2 md:text-center md:gap-10 md:min-h-0 md:pt-4 md:pb-4"
      >
        <!-- Left Content -->
        <div
          class="flex flex-col items-start gap-5 z-[2] md:items-center"
          ref="heroLeftRef"
        >
          <div ref="badgeRef" class="opacity-0">
            <HeaderBadge heading="Senior Vue.js Developer" />
          </div>

          <h1 class="flex flex-col gap-1 m-0 leading-[1.1]">
            <div ref="nameRef" class="opacity-0">
              <SectionHeading
                first-part="Hi, I'm"
                second-part="Shahzeb Akhtar"
                wrapper-class="!mb-0 !flex-col !items-start !self-center"
              />
              <div
                class="w-[70px] h-1 rounded-sm bg-gradient-to-br from-teal-500 via-blue-500 to-violet-500 my-2 opacity-0 rounded"
                ref="underlineRef"
              ></div>
            </div>
          </h1>

          <p
            class="max-w-[460px] text-[1.1rem] leading-7 text-[var(--text-muted-color)] m-0 md:max-w-[500px] opacity-0"
            ref="descRef"
          >
            I build modern, responsive and user-focused web applications with
            clean code and great user experience.
          </p>

          <div
            class="flex flex-wrap gap-4 mt-2 sm:w-full sm:justify-center max-sm:[&_.btn-base]:flex-1 max-sm:[&_.btn-base]:max-w-[220px] [&_.btn-base]:gap-2.5 [&_.btn-base_i]:text-[0.85rem] opacity-0"
            ref="actionsRef"
          >
            <CustomButton @click="scrollTo('my-work')">
              View My Work
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </CustomButton>

            <CustomButton variant="secondary" @click="downloadCV">
              Download CV
              <i class="fa-solid fa-download"></i>
            </CustomButton>
          </div>

          <div
            class="flex flex-col gap-3 mt-4 md:items-center opacity-0"
            ref="socialRef"
          >
            <span
              class="text-[0.95rem] font-medium text-[var(--text-secondary-color)]"
              >Let's connect</span
            >
            <div class="flex gap-3">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--bg-secondary-color)] border border-[var(--border-color)] text-[var(--text-secondary-color)] text-[1.1rem] transition-all duration-[250ms] ease-in-out hover:border-[var(--theme-primary-color)] hover:text-[var(--theme-primary-color)] hover:bg-[var(--glow-primary)] hover:-translate-y-0.5"
                :aria-label="link.name"
              >
                <i :class="link.icon"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Content -->
        <div
          class="relative flex items-center justify-center min-h-[560px] z-[2] lg:min-h-[480px] md:min-h-[420px] max-sm:min-h-[360px]"
          ref="heroRightRef"
        >
          <!-- Decorative dots -->
          <div
            class="absolute text-[var(--text-muted-color)] z-[1] pointer-events-none top-0 right-0 md:-right-4 max-sm:hidden opacity-0"
            ref="dotsTopRef"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <pattern
                id="dots-top"
                x="0"
                y="0"
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  fill="currentColor"
                  opacity="0.25"
                />
              </pattern>
              <rect width="80" height="80" fill="url(#dots-top)" />
            </svg>
          </div>

          <div
            class="absolute text-[var(--text-muted-color)] z-[1] pointer-events-none bottom-16 left-0 md:-left-4 max-sm:hidden opacity-0"
            ref="dotsBottomRef"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <pattern
                id="dots-bottom"
                x="0"
                y="0"
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  fill="currentColor"
                  opacity="0.25"
                />
              </pattern>
              <rect width="80" height="80" fill="url(#dots-bottom)" />
            </svg>
          </div>

          <!-- Main image with blob background -->
          <div
            class="relative w-full max-w-[480px] flex items-center justify-center"
          >
            <div
              class="absolute w-[90%] aspect-square rounded-[60%_40%_55%_45%/55%_45%_60%_40%] bg-gradient-to-br from-teal-500/[0.12] to-blue-500/[0.12] shadow-[inset_0_0_80px_rgba(59,130,246,0.08)] opacity-0"
              ref="imageBgRef"
            ></div>
            <div
              class="relative w-[85%] aspect-square rounded-[55%_45%_50%_50%/50%_55%_45%_50%] overflow-hidden bg-gradient-to-br from-teal-500/[0.08] to-violet-500/[0.08] border border-blue-500/10 opacity-0"
              ref="imageShapeRef"
            >
              <img
                src="~/assets/images/user-image.png"
                alt="Shahzeb Akhtar"
                class="w-full h-full object-cover object-top scale-105"
              />
            </div>

            <!-- Specialized card -->
            <div
              class="absolute bottom-6 -left-4 flex items-center gap-3.5 py-[0.9rem] px-[1.1rem] bg-[var(--bg-secondary-color)] border border-[var(--border-color)] rounded-2xl shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)] z-10 md:left-0 md:bottom-2 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:bottom-[-0.5rem] max-sm:py-[0.7rem] max-sm:px-[0.9rem] opacity-0"
              ref="specializedCardRef"
            >
              <div
                class="flex items-center justify-center w-11 h-11 rounded-xl bg-teal-500/10"
              >
                <svg viewBox="0 0 128 128" width="32" height="32">
                  <path
                    fill="#42b883"
                    d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110H78.8z"
                  />
                  <path
                    fill="#35495e"
                    d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
                  />
                </svg>
              </div>
              <div class="flex flex-col gap-[0.15rem]">
                <span class="text-[0.8rem] text-[var(--text-muted-color)]"
                  >Specialized In</span
                >
                <span
                  class="text-[0.95rem] font-bold text-[var(--text-primary-color)] [&_em]:not-italic [&_em]:text-teal-500"
                >
                  <em>Vue.js</em> Development
                </span>
              </div>
            </div>
          </div>

          <!-- Stats cards -->
          <div
            class="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10 lg:-right-4 lg:[&_.stat-card]:min-w-[150px] lg:[&_.stat-card]:py-3 lg:[&_.stat-card]:px-3.5 md:-right-2 max-sm:static max-sm:translate-y-0 max-sm:flex-row max-sm:justify-center max-sm:flex-wrap max-sm:mt-6 max-sm:gap-3 opacity-0"
            ref="statsRef"
          >
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="stat-card flex items-center gap-3.5 py-[0.85rem] px-4 min-w-[170px] bg-[var(--bg-secondary-color)] border border-[var(--border-color)] rounded-2xl shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)] transition-transform duration-[250ms] ease-in-out hover:-translate-x-1 max-sm:min-w-0 max-sm:flex-1 max-sm:max-w-[160px] max-sm:hover:-translate-y-1"
            >
              <div
                class="flex items-center justify-center w-10 h-10 rounded-[0.65rem] bg-blue-500/[0.08] text-[var(--theme-primary-color)] shrink-0"
                v-html="stat.icon"
              ></div>
              <div class="flex flex-col gap-[0.1rem]">
                <span
                  class="text-xl font-extrabold text-[var(--text-primary-color)] leading-none"
                  >{{ stat.value }}</span
                >
                <span
                  class="text-[0.78rem] font-medium text-[var(--text-muted-color)] leading-tight whitespace-pre-line"
                  >{{ stat.label }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Technologies strip -->
    <div
      class="mt-16 mb-8 relative z-[2] max-sm:mt-10 max-sm:mb-12"
      ref="techStripRef"
    >
      <TechStrip />
    </div>

    <!-- Hero waves decoration -->
    <img
      ref="heroWavesRef"
      src="/images/hero-waves.png"
      alt=""
      class="absolute bottom-0 left-0 w-full h-[500px] object-cover pointer-events-none z-[1] max-sm:-bottom-2"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { scrollTo } from '@/composables/useScroll'
import siteInfo from '@/utilies/siteInfo.json'
import CustomButton from '../BasicComponents/CustomButton.vue'
import HeaderBadge from '../BasicComponents/HeaderBadge.vue'
import TechStrip from './TechStrip.vue'
import SectionHeading from '../BasicComponents/SectionHeading.vue'

gsap.registerPlugin(ScrollTrigger, CSSPlugin)

const { showPreloader } = usePreloader()

const badgeRef = ref<HTMLElement | null>(null)
const greetingRef = ref<HTMLElement | null>(null)
const nameRef = ref<HTMLElement | null>(null)
const underlineRef = ref<HTMLElement | null>(null)
const descRef = ref<HTMLElement | null>(null)
const actionsRef = ref<HTMLElement | null>(null)
const socialRef = ref<HTMLElement | null>(null)
const heroLeftRef = ref<HTMLElement | null>(null)
const heroRightRef = ref<HTMLElement | null>(null)
const dotsTopRef = ref<HTMLElement | null>(null)
const dotsBottomRef = ref<HTMLElement | null>(null)
const imageBgRef = ref<HTMLElement | null>(null)
const imageShapeRef = ref<HTMLElement | null>(null)
const specializedCardRef = ref<HTMLElement | null>(null)
const statsRef = ref<HTMLElement | null>(null)
const techStripRef = ref<HTMLElement | null>(null)
const heroWavesRef = ref<HTMLElement | null>(null)

let loadTl: gsap.core.Timeline | null = null
let scrollTriggers: ScrollTrigger[] = []
let gsapCtx: gsap.Context | null = null
let animationStarted = false

const stats = [
  {
    value: `${siteInfo.dev.experience}`,
    label: 'Years\nExperience',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
  },
  {
    value: '15+',
    label: 'Projects\nCompleted',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  },
  {
    value: '20+',
    label: 'Happy\nClients',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  },
]

const socialLinks = [
  {
    name: 'GitHub',
    icon: 'fa-brands fa-github',
    url: siteInfo.socialLinks.github,
  },
  {
    name: 'LinkedIn',
    icon: 'fa-brands fa-linkedin-in',
    url: siteInfo.socialLinks.linkedin,
  },
  {
    name: 'Email',
    icon: 'fa-regular fa-envelope',
    url: `mailto:${siteInfo.contact.email}`,
  },
]

const downloadCV = () => {
  alert('CV download coming soon!')
}

function startAnimations() {
  if (animationStarted) return
  animationStarted = true

  const scroller = document.getElementById('BodyWrapper') || window

  gsapCtx = gsap.context(() => {
    loadTl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    if (badgeRef.value)
      loadTl.fromTo(
        badgeRef.value,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 },
      )
    if (greetingRef.value)
      loadTl.fromTo(
        greetingRef.value,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 },
        '-=0.4',
      )
    if (nameRef.value)
      loadTl.fromTo(
        nameRef.value,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.5',
      )
    if (underlineRef.value)
      loadTl.fromTo(
        underlineRef.value,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.4 },
        '-=0.4',
      )
    if (descRef.value)
      loadTl.fromTo(
        descRef.value,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 },
        '-=0.3',
      )
    if (actionsRef.value)
      loadTl.fromTo(
        actionsRef.value,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.3',
      )
    if (socialRef.value)
      loadTl.fromTo(
        socialRef.value,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.2',
      )
    if (imageBgRef.value)
      loadTl.fromTo(
        imageBgRef.value,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        '-=0.8',
      )
    if (imageShapeRef.value)
      loadTl.fromTo(
        imageShapeRef.value,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.9 },
        '-=0.8',
      )
    if (specializedCardRef.value)
      loadTl.fromTo(
        specializedCardRef.value,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7 },
        '-=0.5',
      )
    if (statsRef.value)
      loadTl.fromTo(
        statsRef.value,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7 },
        '-=0.6',
      )
    if (dotsTopRef.value)
      loadTl.fromTo(
        dotsTopRef.value,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 },
        '-=0.4',
      )
    if (dotsBottomRef.value)
      loadTl.fromTo(
        dotsBottomRef.value,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 },
        '-=0.3',
      )
    // if (techStripRef.value) loadTl.fromTo(techStripRef.value, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.3')
    // if (heroWavesRef.value) loadTl.fromTo(heroWavesRef.value, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.4,
        scroller,
      },
    })

    if (heroLeftRef.value)
      tl.to(heroLeftRef.value, { y: -80, opacity: 0.4, duration: 1 })
    if (heroRightRef.value)
      tl.to(heroRightRef.value, { y: -50, opacity: 0.5, duration: 1 }, '<')
    if (imageBgRef.value)
      tl.to(imageBgRef.value, { scale: 1.15, rotation: 8, duration: 1 }, '<')
    if (dotsTopRef.value) tl.to(dotsTopRef.value, { y: -60, duration: 1 }, '<')
    if (dotsBottomRef.value)
      tl.to(dotsBottomRef.value, { y: -40, duration: 1 }, '<')
    // if (techStripRef.value) tl.to(techStripRef.value, { y: -30, opacity: 0.3, duration: 1 }, '<')
    // if (heroWavesRef.value) tl.to(heroWavesRef.value, { y: -20, opacity: 0.5, duration: 1 }, '<')

    scrollTriggers = ScrollTrigger.getAll().filter(
      (st) => st.trigger === document.getElementById('hero-section'),
    )
  })
}

onMounted(() => {
  if (!showPreloader.value) {
    setTimeout(startAnimations, 100)
  }
})

watch(showPreloader, (val) => {
  if (!val) {
    setTimeout(startAnimations, 100)
  }
})

onBeforeUnmount(() => {
  scrollTriggers.forEach((st) => st.kill())
  scrollTriggers = []
  if (loadTl) {
    loadTl.kill()
    loadTl = null
  }
  if (gsapCtx) {
    gsapCtx.revert()
    gsapCtx = null
  }
})
</script>
