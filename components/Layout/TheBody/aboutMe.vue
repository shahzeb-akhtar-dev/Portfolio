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
    <div class="description col-5">
      <h1>Solid Experience in building Vue js and responsive web app .</h1>
      <p>
        Hi,i am a Shahzeb Akhtar. Experienced Frontend Developer with a strong
        passion for creating visually stunning and user-friendly web
        applications. With over 1.5 years of professional experience, I have
        developed a deep understanding of front-end technologies, frameworks,
        and best practices. <br />
        Throughout my career, I have successfully delivered numerous projects
        from concept to completion, collaborating closely with cross-functional
        teams to ensure exceptional user experiences. I excel in transforming
        complex design concepts into pixel-perfect, responsive websites that
        align with client objectives and business goals.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-me",
};
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
        display: block;
        text-align: center;
        .image-layer {
          position: absolute;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;

          .layer-image {
            position: relative;

            zoom: 1.2;
            top: -45px;
            width: 60%;
          }
          &:first-child {
            height: 100%;
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
    }
  }

  .description {
    // width: 48%;
    h1 {
      text-transform: capitalize;
    }
    p {
      padding-left:1rem ;
      margin: 1rem;
    }
  }
}
</style>
