<template>
  <section id="my-work" class="work-section relative">
    <div
      class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24"
    >
      <div class="text-center mb-12 space-y-8">
        <HeaderBadge
          icon="fa-solid fa-diagram-project"
          heading="Portfolio Showcase"
          class="!mx-auto"
        />
        <SectionHeading
          first-part="Crafting Digital "
          second-part="Masterpieces"
          wrapper-class="!justify-center"
        />
        <p class="work-description max-w-3xl mx-auto text-lg leading-relaxed">
          Transforming ideas into
          <span class="work-highlight font-semibold"
            >stunning digital experiences</span
          >
          through innovative design, clean code, and cutting-edge technology.
        </p>
      </div>
    </div>
    <WorkGallery :slides="carouselSlides" />
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import siteInfo from '@/utils/siteInfo.json'
import HeaderBadge from '../BasicComponents/HeaderBadge.vue'
import SectionHeading from '../BasicComponents/SectionHeading.vue'
import WorkGallery from './WorkGallery.vue'


interface Project {
  id: number | string
  name: string
  description: string
  skills?: string[]
  image: string
}

const myWork = ref<Project[]>(siteInfo.projects || [])

// Transform projects data into carousel slides format
const carouselSlides = computed(() =>
  myWork.value.map((project) => ({
    image: project.image,
    title: project.name,
    description: project.description,
  })),
)
</script>

<style scoped>
.work-section {
  background-color: var(--bg-primary-color);
}

.work-description {
  color: var(--text-secondary-color);
}

.work-highlight {
  color: var(--text-primary-color);
}
</style>
