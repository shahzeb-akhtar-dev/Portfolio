<template>
  <div>
    <a-layout>
      <a-layout-header>
        <the-header />
        <div id="scrollProgressBar">
          <div class="progressBar" :style="`width:${scrollProgress}%;`"></div>
        </div>
      </a-layout-header>
      <a-layout-content>
        <div class="body-wrapper">
          <Nuxt />
        </div>
      </a-layout-content>
      <a-layout-footer>
        <div class="scroll-button" v-if="scroll >= 200">
          <a-button shape="circle" @click="scrollToTop"
            ><i class="fa-solid fa-up-long"></i
          ></a-button>
        </div>
        <the-footer />
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
import theHeader from '@/components/Layout/TheHeader'
import theFooter from '@/components/Layout/TheFooter'
export default {
  components: {
    theHeader,
    theFooter,
  },
  data() {
    return {
      scroll: 0,
      scrollProgress: 0,
    }
  },
  mounted() {
    document.addEventListener('scroll', () => this.getScroll())
  },
  methods: {
    getScroll() {
      let content = document.getElementById('__layout')
      let scrollY = window.scrollY
      this.scroll = scrollY
      let Progress =
        (window.scrollY / (content.scrollHeight - window.innerHeight)) * 100
      this.scrollProgress = Progress
    },
    scrollToTop() {
      document.documentElement.scrollTop = 0
    },
  },
}
</script>

<style lang="scss">
.ant-layout {
  .ant-layout-header {
    line-height: 6.4rem;
    padding: 0;
    height: fit-content;
    background-color: var(--bg-primary-color) !important;
  }
  .ant-layout-content {
    background-color: var(--bg-primary-color) !important;
  }
  .scroll-button {
    .ant-btn {
      font-size: 2rem;
      position: fixed;
      bottom: 7.5rem;
      right: 4rem;
      height: fit-content;
      width: fit-content;
      padding: 0.5rem 1.5rem;
      color: var(--text-black-color);
      background: linear-gradient(
        0deg,
        var(--theme-primary-color) 1%,
        transparent 48%
      );
      background-size: 102% 200%;
      background-position: top;
      &:hover {
        background-position: bottom;
        color: #fff;
        border-color: var(--theme-primary-color);
      }
    }
  }
  #scrollProgressBar {
    .progressBar {
      transition: 0.1s;
      background: var(--theme-gradient-primary-color);
      height: 0.7rem;
      margin-top: -0.1rem;
      width: 0%;
      border-radius: 0rem 1rem 1rem 0px;
    }
  }
}
</style>
