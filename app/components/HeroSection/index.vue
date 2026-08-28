<template>
  <section
    class="relative w-full pt-20 pb-12 min-h-[calc(100dvh)] bg-[var(--bg-primary-color)] overflow-hidden max-sm:pt-6 max-sm:!pb-16 max-sm:min-h-[auto]"
    id="hero-section"
  >
    <div class="max-w-7xl mx-auto px-6 max-sm:px-4 max-[380px]:px-3">
      <div
        class="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-10 lg:gap-12 max-sm:text-center"
      >
        <!-- Left Content (Text) -->
        <div
          class="flex flex-col items-center md:items-start gap-4 sm:gap-5 z-[2] order-1"
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
                wrapper-class="!mb-0 !flex-col !items-center md:!items-start !self-center"
              />
              <div
                class="w-[70px] h-1 rounded-sm bg-gradient-to-br from-teal-500 via-blue-500 to-violet-500 my-2 mx-auto md:mx-0 opacity-0 rounded"
                ref="underlineRef"
              ></div>
            </div>
          </h1>

          <p
            class="max-w-[460px] text-[0.95rem] sm:text-[1.05rem] leading-6 sm:leading-7 text-[var(--text-muted-color)] m-0 md:max-w-[500px] opacity-0"
            ref="descRef"
          >
            I build modern, responsive and user-focused web applications with
            clean code and great user experience.
          </p>

          <div
            class="flex flex-wrap gap-3 sm:gap-4 mt-1 w-full justify-center md:justify-start max-sm:[&_.btn-base]:flex-1 max-sm:[&_.btn-base]:max-w-[220px] [&_.btn-base]:gap-2.5 [&_.btn-base_i]:text-[0.85rem] opacity-0"
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
            class="flex flex-col gap-3 mt-2 sm:mt-3 items-center md:items-start opacity-0"
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

        <!-- Right Content (Image) -->
        <div
          class="relative my-10 md:mt-0 flex items-center justify-start md:justify-center z-[2] order-2"
          ref="heroRightRef"
        >
          <!-- Main image -->
          <div
            class="relative w-full max-w-[260px] md:max-w-[380px] lg:max-w-[460px] flex items-center justify-center"
          >
            <div class="relative opacity-0 w-full" ref="imageShapeRef">
              <img
                src="/images/hero-user.png"
                alt="Shahzeb Akhtar"
                class="w-full h-auto object-cover object-top"
              />
            </div>

            <!-- Specialized card -->
            <div
              class="absolute !bottom-[-1rem] left-0 lg:left-1/2 lg:-translate-x-1/2 flex items-center gap-2 sm:gap-3 py-[0.6rem] sm:py-[0.85rem] px-[0.8rem] sm:px-[1.1rem] bg-[var(--bg-secondary-color)] border border-[var(--border-color)] rounded-2xl shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)] z-10 md:left-0 md:-right-4 md:bottom-4 md:-translate-x-0 md:py-[0.9rem] md:px-[1.1rem] opacity-0"
              ref="specializedCardRef"
            >
              <div
                class="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-teal-500/10 shrink-0"
              >
                <svg
                  viewBox="0 0 128 128"
                  width="24"
                  height="24"
                  class="sm:w-7 sm:h-7"
                >
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
              <div class="flex flex-col gap-[0.05rem] sm:gap-[0.15rem]">
                <span
                  class="text-[0.65rem] sm:text-[0.8rem] text-[var(--text-muted-color)]"
                  >Specialized In</span
                >
                <span
                  class="text-[0.75rem] sm:text-[0.95rem] font-bold text-[var(--text-primary-color)] [&_em]:not-italic [&_em]:text-teal-500"
                >
                  <em>Vue.js</em> Development
                </span>
              </div>
            </div>
          </div>

          <!-- Stats cards (hidden on mobile) -->
          <div
            class="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10 flex lg:-right-4 lg:[&_.stat-card]:min-w-[150px] lg:[&_.stat-card]:py-3 lg:[&_.stat-card]:px-3.5 md:-right-2 opacity-0"
            ref="statsRef"
          >
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="stat-card flex items-center gap-2 lg:gap-3.5 py-[0.85rem] px-4 lg:min-w-[170px] bg-[var(--bg-secondary-color)] border border-[var(--border-color)] rounded-2xl shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)] transition-transform duration-[250ms] ease-in-out hover:-translate-x-1"
            >
              <div
                class="flex items-center justify-center rounded-[0.65rem] bg-blue-500/[0.08] shrink-0"
              >
                <Icon
                  :icon="stat.icon"
                  class="text-[var(--theme-primary-color)] size-7 lg:size-10"
                />
              </div>
              <div class="flex flex-col gap-[0.1rem]">
                <span
                  class="lg:text-xl font-bold md:font-extrabold text-[var(--text-primary-color)] leading-none"
                >
                  {{ stat.value }}
                </span>
                <span
                  class="text-[0.78rem] font-medium text-[var(--text-muted-color)] leading-tight whitespace-pre-line"
                >
                  {{ stat.label }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Technologies strip -->
    <div class="mt-4 sm:mt-14 mb-4 sm:mb-8 relative z-[2]" ref="techStripRef">
      <TechStrip />
    </div>

    <!-- Hero waves decoration -->
    <img
      ref="heroWavesRef"
      src="/images/hero-waves.png"
      alt=""
      class="absolute bottom-0 left-0 w-full h-[115px] md:h-[200px] lg:h-[500px] object-cover pointer-events-none z-[1]"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { scrollTo } from '@/composables/useScroll'
import siteInfo from '@/utils/siteInfo.json'
import CustomButton from '../BasicComponents/CustomButton.vue'
import HeaderBadge from '../BasicComponents/HeaderBadge.vue'
import TechStrip from './TechStrip.vue'
import SectionHeading from '../BasicComponents/SectionHeading.vue'
import { Icon } from '@iconify/vue'

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
    icon: `hugeicons:work-history`,
  },
  {
    value: siteInfo.dev.projects,
    label: 'Projects\nCompleted',
    icon: `hugeicons:computer-programming-01`,
  },
  {
    value: '90%',
    label: 'Performance\nFocused',
    icon: 'eos-icons:performance',
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

  if (window.innerWidth < 1024) {
    const elements = [
      badgeRef.value,
      greetingRef.value,
      nameRef.value,
      underlineRef.value,
      descRef.value,
      actionsRef.value,
      socialRef.value,
      imageBgRef.value,
      imageShapeRef.value,
      specializedCardRef.value,
      statsRef.value,
      dotsTopRef.value,
      dotsBottomRef.value,
    ]
    elements.forEach((el) => {
      if (el) el.style.opacity = '1'
    })
    return
  }

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
