<template>
  <h2
    class="text-3xl md:text-4xl lg:text-5xl font-bold open-sans mb-6 flex justify-center md:justify-start  gap-1 mb-0"
    :style="{ color: 'var(--text-primary-color)' }"
    :class="wrapperClass"
  >
    <p class="mb-0">{{ firstPart }}</p>
    <p
      class="text-3xl md:text-4xl lg:text-5xl pb-2 mb-0 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme-primary-color)] to-[var(--theme-primary-dark)] open-sans"
    >
      {{ secondPart }}
    </p>
  </h2>
</template>
<script setup lang="ts">
defineProps<{
  firstPart: string;
  secondPart?: string;
  wrapperClass?: string;
}>();
</script>
