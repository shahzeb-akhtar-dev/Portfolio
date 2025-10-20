<template>
  <button
    :disabled="loading"
    @click="emit('click')"
    class="btn-base"
    :class="variantClasses"
  >
    <!-- Loading spinner -->
    <svg
      v-if="loading"
      class="mr-2 h-5 w-5 animate-spin"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M988 548c-19.9 0-36-16.1-36-36
           0-59.4-11.6-117-34.6-171.3a440.45
           440.45 0 0 0-94.3-139.9 437.71
           437.71 0 0 0-139.9-94.3C629 83.6
           571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36
           36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66
           827 103 874 150c47 47 83.9 101.8 109.7
           162.7 26.7 63.1 40.2 130.2 40.2
           199.3.1 19.9-16 36-35.9 36z"
      />
    </svg>
    
    <!-- Button content -->
    <span class="relative z-10">
      <slot />
    </span>
    
    <!-- Shine effect for primary -->
    <span v-if="variant !== 'secondary'" class="shine"></span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  loading?: boolean
  variant?: 'primary' | 'secondary'
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

const variantClasses = computed(() => {
  const base =
    'relative flex items-center justify-center overflow-hidden rounded-xl px-8 py-3.5 text-base font-semibold transition-all duration-500 ease-out disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale group'
    
  return [
    base,
    props.variant === 'secondary'
      ? 'border-2 border-orange-500 text-orange-600 dark:text-orange-400 hover:text-white hover:border-orange-400 bg-transparent hover:bg-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:scale-[1.02] active:scale-[0.98]'
      : 'border-2 border-transparent text-white shadow-[0_10px_40px_-10px_var(--box-shadow-color)] bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 hover:shadow-[0_20px_60px_-10px_rgba(249,115,22,0.6)] hover:scale-[1.02] active:scale-[0.98] hover:from-orange-400 hover:via-orange-500 hover:to-red-500',
  ]
})
</script>

<style scoped>
.btn-base {
  transform-origin: center;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
}

/* Shimmer/shine effect for primary button */
.shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.6s ease;
}

.btn-base:hover .shine {
  left: 100%;
}

/* Ripple effect on click */
.btn-base::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.3) 0%,
    transparent 70%
  );
  opacity: 0;
  transform: scale(0);
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.btn-base:active::before {
  transform: scale(1);
  opacity: 1;
  transition: transform 0s, opacity 0s;
}

/* Glow pulse animation for primary */
.btn-base:not(.border-orange-500) {
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 10px 40px -10px rgba(249, 115, 22, 0.4);
  }
  50% {
    box-shadow: 0 10px 50px -5px rgba(249, 115, 22, 0.6);
  }
}

.btn-base:hover {
  animation: none;
}

/* Secondary button border glow */
.border-orange-500::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: linear-gradient(45deg, 
    transparent,
    rgba(249, 115, 22, 0.4),
    transparent
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
  animation: border-rotate 3s linear infinite;
}

.border-orange-500:hover::after {
  opacity: 1;
}

@keyframes border-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Loading state adjustments */
.btn-base:disabled {
  transform: none !important;
  animation: none !important;
}

.btn-base:disabled:hover {
  box-shadow: 0 10px 40px -10px rgba(249, 115, 22, 0.2);
}

/* Dark mode enhancements */
@media (prefers-color-scheme: dark) {
  .btn-base:not(.border-orange-500) {
    box-shadow: 0 10px 40px -10px rgba(249, 115, 22, 0.5),
                0 0 20px -5px rgba(249, 115, 22, 0.3);
  }
  
  .btn-base:not(.border-orange-500):hover {
    box-shadow: 0 20px 60px -10px rgba(249, 115, 22, 0.7),
                0 0 30px 0px rgba(249, 115, 22, 0.5);
  }
}

/* Smooth transitions for all interactive states */
.btn-base * {
  transition: inherit;
}
</style>