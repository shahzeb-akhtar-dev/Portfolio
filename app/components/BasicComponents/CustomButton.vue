<template>
  <a-button :loading="loading" type="primary" @click="$emit('click')">
    <slot />
  </a-button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  loading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})
</script>

<style scoped>
/* keep component-specific overrides minimal; prefer Ant Design classes */
</style>
