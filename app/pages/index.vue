<template>
  <div class="portfolio-wrapper">
    <div id="hero-section" ref="triggerElement">
      <HeroSection />
    </div>
    <div id="about-me" ref="aboutRef">
      <about-me />
    </div>
    <div id="my-skill" ref="skillsWrapperRef">
      <my-skills />
    </div>
    <div id="my-work" ref="workWrapperRef">
      <my-work />
    </div>
    <div id="contact-info" ref="contactWrapperRef">
      <contact-info />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import aboutMe from '@/components/AboutMe'
import MySkills from '@/components/MySkills'
import MyWork from '@/components/MyWork'
import ContactInfo from '@/components/Contact'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { showPreloader } = usePreloader()

const aboutRef = ref(null)
const skillsWrapperRef = ref(null)
const workWrapperRef = ref(null)
const contactWrapperRef = ref(null)

const aboutLeftRef = ref(null)
const aboutRightRef = ref(null)
const skillsSectionRef = ref(null)
const workSectionRef = ref(null)
const contactSectionRef = ref(null)

const aboutLeftAnim = useScrollAnimation(aboutLeftRef, {
  fadeIn: { x: -150, opacity: 1 },
  fadeOut: { x: -150, opacity: 1 },
  duration: 0.8,
  once: false,
})

const aboutRightAnim = useScrollAnimation(aboutRightRef, {
  fadeIn: { x: 150, opacity: 1 },
  fadeOut: { x: 150, opacity: 1 },
  duration: 0.8,
  once: false,
})

const skillsAnim = useScrollAnimation(skillsSectionRef, {
  fadeIn: { y: 120, opacity: 1 },
  fadeOut: { y: -120, opacity: 1 },
  duration: 0.8,
  once: false,
})

const workAnim = useScrollAnimation(workSectionRef, {
  fadeIn: { y: 120, opacity: 1 },
  fadeOut: { y: -120, opacity: 1 },
  duration: 0.8,
  once: false,
})

const contactAnim = useScrollAnimation(contactSectionRef, {
  fadeIn: { y: 120, opacity: 1 },
  fadeOut: { y: -120, opacity: 1 },
  duration: 0.8,
  once: false,
})

function startScrollAnimations() {
  nextTick(() => {
    if (aboutRef.value) {
      aboutLeftRef.value = aboutRef.value.querySelector('aside')
      aboutRightRef.value = aboutRef.value.querySelector('.grid > div:last-child')
    }
    
    if (skillsWrapperRef.value) {
      skillsSectionRef.value = skillsWrapperRef.value.querySelector('.skills-section')
    }
    
    if (workWrapperRef.value) {
      workSectionRef.value = workWrapperRef.value.querySelector('.work-section')
    }
    
    if (contactWrapperRef.value) {
      contactSectionRef.value = contactWrapperRef.value.querySelector('.contact-section')
    }
    
    aboutLeftAnim.init()
    aboutRightAnim.init()
    skillsAnim.init()
    workAnim.init()
    contactAnim.init()
  })
}

onMounted(() => {
  if (!showPreloader.value) {
    setTimeout(startScrollAnimations, 300)
  }
})

watch(showPreloader, (val) => {
  if (!val) {
    setTimeout(startScrollAnimations, 300)
  }
})
</script>

<style>
.portfolio-wrapper {
  scroll-behavior: smooth;
}
.portfolio-wrapper #my-skill {
  position: relative;
}

.portfolio-wrapper #my-work {
  transition: all 0.5s ease-out;
}
</style>
