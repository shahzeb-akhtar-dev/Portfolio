<template>
  <div class="portfolio-wrapper">
    <div id="hero-section" ref="triggerElement">
      <LayoutTheBodyHeroSection />
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
import aboutMe from './aboutMe.vue'
import MySkills from './mySkills.vue'
import MyWork from './myWork.vue'
import ContactInfo from './contact.vue'
import Mixins from '@/mixins/commonFunction.js'
export default {
  components: { aboutMe, MySkills, MyWork, ContactInfo },
  mixins: [Mixins],
  name: 'TheBody',
  mounted() {
    this.scrollInOutAnimation('about-me')
    // this.scrollInOutAnimation('my-skill')
    this.scrollInOutAnimation('my-work')
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
    transition: all 0.7s ease-out;
    transform: translateY(60px);
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
    opacity: 0;
    margin: 10rem 0rem;
    transition: all 0.7s ease-out;
    transform: translateY(60px);
    &.fade-in {
      opacity: 1;
      transform: translateY(0px);
    }
  }
}
</style>
