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
    <span class="relative z-10 flex items-center gap-2">
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
    'relative flex items-center justify-center overflow-hidden rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale group'

  return [
    base,
    props.variant === 'secondary'
      ? 'secondary-btn border border-[var(--border-color)] text-[var(--text-primary-color)] bg-transparent hover:border-[var(--theme-primary-color)] hover:text-[var(--theme-primary-color)] hover:bg-[var(--glow-primary)]'
      : 'primary-btn border border-transparent text-white shadow-[var(--shadow-md)] bg-gradient-to-r from-[var(--theme-primary-light)] via-[var(--theme-primary-color)] to-[var(--theme-secondary-color)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5 active:translate-y-0',
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
    rgba(255, 255, 255, 0.25),
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
    rgba(255, 255, 255, 0.25) 0%,
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

/* Primary button glow */
.primary-btn {
  box-shadow: 0 8px 25px -8px rgba(59, 130, 246, 0.4);
}

.primary-btn:hover {
  box-shadow: 0 12px 35px -8px rgba(59, 130, 246, 0.55);
}

/* Secondary button */
.secondary-btn i {
  transition: transform 0.3s ease;
}

.secondary-btn:hover i {
  transform: translateY(1px);
}

/* Loading state adjustments */
.btn-base:disabled {
  transform: none !important;
  animation: none !important;
}

/* Smooth transitions for all interactive states */
.btn-base * {
  transition: inherit;
}
</style>
