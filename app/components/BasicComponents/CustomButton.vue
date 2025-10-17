<template>
  <button
    :disabled="loading"
    @click="emit('click')"
    class="btn-base"
    :class="variantClasses"
  >
    <svg
      v-if="loading"
      class="mr-2 h-5 w-5 animate-spin text-white/80"
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
    <slot />
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

// Computed variant classes — clear separation, easy to extend
const variantClasses = computed(() => {
  const base =
    'relative flex items-center justify-center rounded-md border px-6 py-2 text-lg font-normal transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-70'
    
  return [
    base,
    props.variant === 'secondary'
      ? 'border-[var(--theme-primary-color)] border-orange-500 rounded-lg text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition'
      : 'border-white  text-white shadow-[0_0_10px_-3px_var(--box-shadow-color)] bg-gradient-to-r from-[var(--theme-primary-color)] to-[var(--bg-primary-color)] bg-[length:240%_200%] bg-right hover:bg-left hover:shadow-none',
  ]
})
</script>

<style scoped>
.btn-base {
  background-size: 240% 200%;
  background-position: right;
}
.btn-base:hover {
  background-position: left;
}
</style>
