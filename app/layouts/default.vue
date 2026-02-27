<template>
  <!-- Layout Wrapper -->
  <a-layout class="flex flex-col layout-wrapper">
    <!-- Header -->
    <a-layout-header
      class="layout-header relative top-0 z-[200] h-12"
    >
      <TheHeader />
    </a-layout-header>
    <div id="scrollProgressBar">
      <div class="progressBar" :style="{ width: `${scrollProgress}%` }"></div>
    </div>
    <!-- Body -->
    <a-layout-content
      id="BodyWrapper"
      class="layout-content flex-1 overflow-y-auto custom-scrollbar max-h-[calc(100vh-3.5rem)] scroll-smooth"
      @scroll="handleScroll"
    >
      <div class="body-wrapper max-h-full">
        <NuxtPage />
      </div>
      <!-- Footer -->
      <a-layout-footer class="layout-footer relative !p-0">
        <div class="scroll-button" v-if="scroll >= 200">
          <a-button shape="circle" @click="scrollToTop">
            <i class="fa-solid fa-up-long scroll-top-icon"></i>
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
import { useTheme } from '@/composables/useTheme'

const { initTheme } = useTheme()

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
  initTheme()
  contentEl = document.getElementById('BodyWrapper')
})
</script>

<style scoped>
.layout-header {
  line-height: 1.2;
  padding: 0;
  min-height: auto;
  height: auto;
  background-color: var(--bg-primary-color) !important;
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.layout-content {
  background-color: var(--bg-primary-color) !important;
  transition: background-color 0.3s ease;
}

.layout-footer {
  background-color: var(--bg-primary-color) !important;
  transition: background-color 0.3s ease;
}

/* Scroll To Top Button */
.scroll-button .ant-btn {
  font-size: 1.2rem;
  position: fixed;
  z-index: 999;
  bottom: 7.5rem;
  right: 4rem;
  height: fit-content;
  width: fit-content;
  padding: 0.5rem 1.1rem;
  border: 1px solid var(--border-color);
  background: var(--surface-glass);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.scroll-button .ant-btn:hover {
  border-color: var(--theme-primary-color);
  background: var(--glow-primary);
}

.scroll-top-icon {
  color: var(--text-secondary-color);
  transition: color 0.3s ease;
}

.scroll-button .ant-btn:hover .scroll-top-icon {
  color: var(--theme-primary-color);
}

/* Scroll Progress Bar */
#scrollProgressBar {
  background-color: var(--bg-secondary-color);
  transition: background-color 0.3s ease;
}

#scrollProgressBar .progressBar {
  transition: width 0.1s ease;
  background: var(--theme-gradient-primary);
  height: 0.4rem;
  width: 0%;
  border-radius: 0 1rem 1rem 0;
}
</style>
