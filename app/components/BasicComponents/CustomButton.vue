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
      ? 'primary-btn'
      : 'border-2 border-transparent text-[var(--text-white-color)] shadow-[var(--shadow-md)] bg-gradient-to-br from-[var(--theme-primary-light)] via-[var(--theme-primary-color)] to-[var(--theme-primary-dark)] hover:shadow-[var(--shadow-lg)] hover:scale-[1.02] active:scale-[0.98] hover:from-[var(--theme-primary-light)] hover:via-[var(--theme-primary-color)] hover:to-[var(--theme-primary-dark)]',
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
.primary-btn {
  --gradient-color: linear-gradient(
    40deg,
    var(--theme-primary-color) 20%,
    var(--bg-primary-color) 53%
  );

  outline: none;
  border: 0.1rem solid #fff;
  text-shadow: 0rem 0rem 1.2rem black;
  color: var(--text-white-color);
  height: 4rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: var(--gradient-color);
  background-size: 240% 200%;
  font-size: 1.8rem;
  font-weight: 500;
  box-shadow: 0rem 0rem 1rem -0.3rem var(--box-shadow-color);
  background-position: right;
  transition: all 0.3s ease-out;
  text-transform: uppercase;
  &:hover {
    border: 0.1rem solid var(--gradient-color);
    box-shadow: none;
    text-shadow: none;
    background-position: left;
    color: var(--text-white-color);
  }
  &:disabled:hover {
    cursor: no-drop;
    background-position: right;
    box-shadow: 0rem 0rem 1rem -0.3rem var(--box-shadow-color);
    text-shadow: 0rem 0rem 1.2rem black;
  }

  i {
    color: #beb6b6;
    font-size: 3rem;
    margin-right: 0.7rem;
    vertical-align: 0;
  }
}
</style>