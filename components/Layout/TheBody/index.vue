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
      <my-skills/>
    </div>
  </div>
</template>

<script>
import aboutMe from "./aboutMe.vue";
import MySkills from './mySkills.vue';
export default {
  components: { aboutMe, MySkills },
  name: "TheBody",
};
</script>

<style lang="scss">
.portfolio-wrapper {
  #hero-section {
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
          top: -15px;
        }
        &:first-child {
          height: var(--hero-section-height);
          mask-image: url("~/assets/images/mask-image.png");
          mask-size: contain;
          mask-repeat: no-repeat;
          mask-position: center;
          &::before {
            content: "";
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
      width: 65rem;
      color: #fff;
      left: 28%;
      font-weight: 900;
      letter-spacing: 2px;
      text-shadow: 0rem 0rem 2rem black;
      text-align: center;
    }
  }
  #about-me {
    margin-top: 10rem;
    // height: 50rem;
    overflow: hidden;
  }
  #my-skill{
    height: 40rem;
  }
}
</style>
