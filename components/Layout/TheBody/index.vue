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

<script>
import aboutMe from '@/components/AboutMe'
import MySkills from '@/components/MySkills'
import MyWork from '@/components/MyWork'
import ContactInfo from '@/components/Contact'
import Mixins from '@/mixins/commonFunction.js'
export default {
  components: { aboutMe, MySkills, MyWork, ContactInfo },
  mixins: [Mixins],
  name: 'TheBody',
  mounted() {
    this.scrollInOutAnimation('about-me', 200)
  },
  methods: {},
}
</script>

<style lang="scss">
.portfolio-wrapper {
  scroll-behavior: smooth;
  #about-me {
    position: relative;
    margin: 20rem 0rem;
    overflow: hidden;
    opacity: 0;
    transition: all 0.5s ease-out;
    transform: translateY(50px);
    &.fade-in {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  #my-skill {
    position: relative;
    margin: 20rem 0rem;
  }
  #my-work {
    margin: 10rem 0rem;
    transition: all 0.5s ease-out;
  }
}
</style>
