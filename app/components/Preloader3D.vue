<template>
  <Transition name="preloader-fade" @after-leave="$emit('complete')">
    <div v-if="visible" class="preloader-container">
      <div class="bg-grid" />

      <div class="preloader-content">
        <div class="orbit-ring" />

        <div class="brand">
          <h1 class="brand-name">PORTFOLIO</h1>
          <span class="brand-byline">Shahzeb Akhtar</span>
        </div>

        <div class="progress-wrap">
          <div class="progress-track">
            <div class="progress-fill" :style="{ width: `${progress}%` }" />
            <div class="progress-glow" :style="{ left: `${progress}%` }" />
          </div>
          <span class="progress-label">{{ Math.round(progress) }}%</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const emit = defineEmits<{ complete: [] }>()

const visible = ref(true)
const progress = ref(0)

let rafId: number
let startTime: number
const DURATION = 2800

const tick = () => {
  const elapsed = performance.now() - startTime
  const raw = (elapsed / DURATION) * 100
  progress.value = Math.min(raw, 100)

  if (progress.value < 100) {
    rafId = requestAnimationFrame(tick)
  } else {
    setTimeout(() => {
      visible.value = false
    }, 400)
  }
}

onMounted(() => {
  startTime = performance.now()
  rafId = requestAnimationFrame(tick)
})
</script>

<style scoped>
.preloader-container {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary-color);
  overflow: hidden;
}

.bg-grid {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image:
    linear-gradient(var(--border-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%);
}

.preloader-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;
}

.orbit-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 320px;
  border: 1px solid var(--border-color);
  border-radius: 50%;
  animation: orbit-spin 20s linear infinite;
}

.orbit-ring::before {
  content: '';
  position: absolute;
  top: -3px;
  left: 50%;
  width: 6px;
  height: 6px;
  background: var(--theme-primary-color);
  border-radius: 50%;
  box-shadow: 0 0 12px var(--theme-primary-color), 0 0 24px var(--glow-primary);
}

.brand {
  text-align: center;
  z-index: 1;
}

.brand-name {
  font-family: var(--logo-font-family);
  font-size: 3rem;
  font-weight: 400;
  color: var(--text-primary-color);
  letter-spacing: 0.12em;
  margin: 0;
  line-height: 1;
  animation: brand-in 0.8s ease-out both;
}

.brand-byline {
  display: block;
  margin-top: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--text-secondary-color);
  letter-spacing: 0.25em;
  text-transform: uppercase;
  animation: byline-in 0.8s ease-out 0.15s both;
}

.progress-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  width: 260px;
  animation: progress-in 0.8s ease-out 0.3s both;
}

.progress-track {
  position: relative;
  width: 100%;
  height: 2px;
  background: var(--border-color);
  border-radius: 1px;
  overflow: visible;
}

.progress-fill {
  height: 100%;
  background: var(--theme-gradient-primary);
  border-radius: 1px;
  transition: width 0.1s linear;
}

.progress-glow {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 4px;
  background: var(--theme-primary-color);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--theme-primary-color), 0 0 16px var(--glow-strong);
  transition: left 0.1s linear;
}

.progress-label {
  font-family: 'Space Grotesk', monospace;
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--text-secondary-color);
  letter-spacing: 0.2em;
}

@keyframes orbit-spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes brand-in {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes byline-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes progress-in {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

.preloader-fade-leave-active {
  transition: opacity 0.5s ease;
}

.preloader-fade-leave-to {
  opacity: 0;
}
</style>
