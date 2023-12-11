<template>
  <div class="portfolio-wrapper">
    <div id="hero-section">
      <div class="image-wrapper">
        <div class="image-layer">
          <img class="layer-image" src="~/assets/images/pic-2.png" alt="" />
        </div>
        <div class="image-layer">
          <img class="layer-image" src="~/assets/images/pic-2.png" alt="" />
        </div>
      </div>
      <div class="hero-text">
        Hi, I'm Shahzeb Akhtar <br />
        I build a Web Application's.
      </div>
    </div>
    <div id="about-me">
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
export default {
  components: { aboutMe, MySkills, MyWork, ContactInfo },
  name: 'TheBody',
}
</script>

<style lang="scss">
.portfolio-wrapper {
  #hero-section {
    position: relative;
    display: flex;
    justify-content: center;
    min-height: var(--hero-section-height);
    .image-wrapper {
      display: block;
      text-align: center;
      .image-layer {
        position: absolute;
        // top: var(--layout-header-height);
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;

        .layer-image {
          position: relative;
          height: var(--hero-section-height);
          zoom: 1.2;
          top: -1.5rem;
        }
        &:first-child {
          height: var(--hero-section-height);
          mask-image: url('~/assets/images/mask-image.png');
          mask-size: contain;
          mask-repeat: no-repeat;
          mask-position: center;
          &::before {
            content: '';
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            overflow: hidden !important;
            position: absolute;
            z-index: 1;
            background: var(--theme-primary-color);
          }
          .layer-image {
            z-index: 2;
          }
        }
        &:last-child {
          height: 50%;
          overflow: hidden !important;
          .layer-image {
            z-index: 5;
          }
        }
      }
    }
    .hero-text {
      font-size: 4.8rem;
      position: absolute;
      top: 50%;
      z-index: 99;
      color: var(--text-white-color);
      font-weight: 900;
      letter-spacing: 0.2rem;
      text-shadow: 0rem 0rem 2rem black;
      text-align: center;
    }
  }
  #about-me {
    position: relative;
    margin: 10rem 0rem;
    overflow: hidden;
  }
  #my-skill {
    position: relative;
  }
}
</style>
