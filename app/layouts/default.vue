<template>
  <div>
    <div class="app-layout">
      <header class="app-header">
        <the-header />
        <div id="scrollProgressBar">
          <div class="progressBar" :style="`width:${scrollProgress}%;`"></div>
        </div>
      </header>
      <main class="app-content">
        <div class="body-wrapper">
        <slot  />
        </div>
      </main>
      <footer class="app-footer">
        <div class="scroll-button" v-if="scroll >= 200">
          <button class="scroll-btn" type="button" @click="scrollToTop">
            <i class="fa-solid fa-up-long"></i>
          </button>
        </div>
        <the-footer />
      </footer>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import TheHeader from '@/components/Layout/TheHeader'
import TheFooter from '@/components/Layout/TheFooter'

const scroll = ref(0)
const scrollProgress = ref(0)

function getScroll() {
  const content = document.getElementById('__layout')
  const scrollY = window.scrollY
  scroll.value = scrollY
  if (content) {
    const progress = (window.scrollY / (content.scrollHeight - window.innerHeight)) * 100
    scrollProgress.value = progress
  }
}

function scrollToTop() {
  document.documentElement.scrollTop = 0
}

onMounted(() => {
  document.addEventListener('scroll', getScroll)
})

onBeforeUnmount(() => {
  document.removeEventListener('scroll', getScroll)
})
</script>

<style>

.app-layout .app-header {
  padding: 0;
  height: fit-content;
  background-color: var(--bg-primary-color) !important;
}

.app-layout .app-content {
  background-color: var(--bg-primary-color) !important;
}

.app-layout .scroll-button .scroll-btn {
  font-size: 2rem;
  position: fixed;
  bottom: 7.5rem;
  right: 4rem;
  height: fit-content;
  width: fit-content;
  padding: 0.5rem 1.5rem;
  color: var(--text-black-color);
  background: linear-gradient(0deg, var(--theme-primary-color) 1%, transparent 48%);
  background-size: 102% 200%;
  background-position: top;
}

.app-layout .scroll-button .scroll-btn:hover {
  background-position: bottom;
  color: #fff;
  border-color: var(--theme-primary-color);
}

.app-layout #scrollProgressBar .progressBar {
  transition: 0.1s;
  background: var(--theme-gradient-primary-color);
  height: 0.7rem;
  margin-top: -0.1rem;
  width: 0%;
  border-radius: 0rem 1rem 1rem 0px;
}
</style>
