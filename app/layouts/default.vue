<template>
  <!-- Layout Wrapper -->
  <a-layout class="flex flex-col">
    <!-- Header -->
    <a-layout-header
      class="relative top-0 z-[200] bg-[var(--bg-primary-color)] h-12"
    >
      <TheHeader />
    </a-layout-header>
    <div id="scrollProgressBar" class="bg-black">
      <div class="progressBar" :style="{ width: `${scrollProgress}%` }"></div>
    </div>
    <!-- Body -->
    <a-layout-content
      id="BodyWrapper"
      class="flex-1 overflow-y-auto custom-scrollbar  max-h-[calc(100vh-3.5rem)] scroll-smooth"
      @scroll="handleScroll"
    >
      <div class="body-wrapper max-h-full">
        <NuxtPage />
      </div>
      <!-- Footer -->
      <a-layout-footer class="relative !p-0">
        <div class="scroll-button" v-if="scroll >= 200">
          <a-button shape="circle" @click="scrollToTop">
            <i class="fa-solid fa-up-long text-gray-300 hover:text-white"></i>
          </a-button>
        </div>
        <TheFooter />
      </a-layout-footer>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TheHeader from '../components/Layout/AppHeader.vue'
import TheFooter from '../components/Layout/AppFooter.vue'

const scroll = ref(0)
const scrollProgress = ref(0)
let contentEl: HTMLElement | null = null

const handleScroll = () => {
  if (!contentEl) return

  const scrollTop = contentEl.scrollTop
  const scrollHeight = contentEl.scrollHeight - contentEl.clientHeight
  const progress = (scrollTop / scrollHeight) * 100

  scroll.value = scrollTop
  scrollProgress.value = progress
}

const scrollToTop = () => {
  contentEl?.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  contentEl = document.getElementById('BodyWrapper')
})
</script>

<style scoped>
.ant-layout-header {
  line-height: 6.4rem;
  padding: 0;
  height: fit-content;
  background-color: var(--bg-primary-color) !important;
}

.ant-layout-content {
  background-color: var(--bg-primary-color) !important;
}

/* Scroll To Top Button */
.scroll-button .ant-btn {
  font-size: 2rem;
  position: fixed;
  z-index: 999;
  bottom: 7.5rem;
  right: 4rem;
  height: fit-content;
  width: fit-content;
  padding: 0.5rem 1.5rem;
  
  background: linear-gradient(
    0deg,
    var(--theme-primary-color) 1%,
    transparent 48%
  );
  background-size: 102% 200%;
  background-position: top;
  transition: background-position 0.3s ease, color 0.3s ease;
}

.scroll-button .ant-btn:hover {
  background-position: bottom;
  color: #fff;
  border-color: var(--theme-primary-color);
}

/* Scroll Progress Bar */
#scrollProgressBar .progressBar {
  transition: width 0.1s ease;
  background: var(--theme-gradient-primary-color);
  height: 0.5rem;
  width: 0%;
  border-radius: 0 1rem 1rem 0;
}
</style>
