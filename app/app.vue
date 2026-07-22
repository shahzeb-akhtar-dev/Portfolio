<template>
  <Preloader3D v-if="showPreloader" @complete="showPreloader = false" />
  <NuxtLayout v-show="!showPreloader"> <NuxtPage/> </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showPreloader = ref(true)
</script>
