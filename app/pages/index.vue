<template>
  <div class="portfolio-wrapper">
    <div id="hero-section" ref="triggerElement">
      <HeroSection />
    </div>
    <div id="about-me" ref="animatedElement">
      <about-me />
    </div>
    <div id="my-skill">
      <my-skills />
    </div>
    <div id="my-work">
      <my-work />
    </div>
    <div id="contact-info">
      <contact-info />
    </div>
  </div>
</template>

<script setup>
import aboutMe from '@/components/AboutMe'
import MySkills from '@/components/MySkills'
import MyWork from '@/components/MyWork'
import ContactInfo from '@/components/Contact'

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
