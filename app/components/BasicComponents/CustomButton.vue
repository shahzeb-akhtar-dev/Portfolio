<template>
  <button
    class="primary-btn relative flex items-center justify-center rounded-md border border-white bg-gradient-to-r from-[var(--theme-primary-color)] to-[var(--bg-primary-color)] bg-[length:240%_200%] bg-right px-6 py-2 text-lg font-medium uppercase text-white shadow-[0_0_10px_-3px_var(--box-shadow-color)] transition-all duration-300 ease-out hover:bg-left hover:shadow-none hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
    :disabled="loading"
    @click="emit('click')"
  >
    <svg
      v-if="loading"
      class="mr-2 h-5 w-5 animate-spin text-gray-200"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
      ></path>
    </svg>
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  loading?: boolean
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<style scoped lang="scss">
.primary-btn {
  // subtle gradient transition enhancement
  background-image: linear-gradient(
    40deg,
    var(--theme-primary-color) 20%,
    var(--bg-primary-color) 53%
  );
}
</style>
