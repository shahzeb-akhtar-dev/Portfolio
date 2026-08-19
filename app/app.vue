<template>
  <Preloader3D v-if="showPreloader" @complete="hide" />
  <div v-show="!showPreloader">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { showPreloader, hide } = usePreloader()
</script>
