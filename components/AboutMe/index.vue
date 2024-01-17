<template>
  <div class="about-me row pt-7">
    <div class="poster-wrapper col-6">
      <div class="poster">
        <div class="image-wrapper">
          <div class="image-layer">
            <img class="layer-image" src="~/assets/images/pic-3.png" alt="" />
          </div>
          <div class="image-layer">
            <img class="layer-image" src="~/assets/images/pic-3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="title col">
      <div class="text-line">
        <div class="text">About Me</div>
      </div>
    </div>
    <div class="about col-5">
      <div class="description">
        <h1>Solid Experience in building Vue js responsive web apps.</h1>
        <p>
          Greetings, I'm Shahzeb Akhtar, a seasoned Frontend Developer with
          approximately 2 years of hands-on experience. My passion lies in
          crafting visually striking and user-friendly web applications that
          leave a lasting impact. Over the course of my professional journey,
          I've honed a profound understanding of front-end technologies,
          frameworks, and industry best practices. My expertise extends to
          successfully spearheading various projects, and navigating them from
          inception to fruition. I thrive in collaborative environments, working
          closely with cross-functional teams to ensure the delivery of
          exceptional user experiences. My forte lies in translating intricate
          design concepts into pixel-perfect, responsive websites that
          seamlessly align with both client objectives and overarching business
          goals. With a commitment to excellence, I bring a blend of creativity
          and technical proficiency to every project, ensuring a harmonious
          fusion of aesthetics and functionality.
        </p>
      </div>
      <div class="action text-center">
        <CustomButton @click="downloadCv">Download CV</CustomButton>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '../BasicComponents/CustomButton.vue'
export default {
  name: 'about-me',
  components: { CustomButton },
  data() {
    return {}
  },
  methods: {
    downloadCv() {
      fetch('/My-Resume.pdf')
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'My-Resume.pdf')
          link.click()
        })
    },
  },
}
</script>

<style lang="scss">
.about-me {
  height: 100%;
  .poster-wrapper {
    // width: 48%;

    .poster {
      width: 75%;
      position: relative;
      height: 100%;

      .image-wrapper {
        text-align: center;
        position: relative;
        width: 50rem;
        height: 50rem;
        .image-layer {
          position: absolute;
          left: 0;
          width: 60rem;
          height: 100%;
          overflow: hidden;

          .layer-image {
            position: relative;
            zoom: 1.2;
            top: -4.5rem;
            width: 53%;
            left: 1.1rem;
          }
          &:first-child {
            // mask-image: url('~/assets/images/mask-image.png');
            mask-image: url('~/assets/images/splash/mask.png');
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
              background: var(--theme-gradient-primary-color);
            }
            .layer-image {
              z-index: 2;
            }
          }
          &:last-child {
            height: 20rem;
            overflow: hidden !important;
            .layer-image {
              z-index: 5;
            }
          }
        }
      }
    }
  }
}
</style>
