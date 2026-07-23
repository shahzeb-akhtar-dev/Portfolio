<template>
  <section id="my-work" class="work-section relative ">
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
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
          <span class="work-highlight font-semibold">stunning digital experiences</span>
          through innovative design, clean code, and cutting-edge technology.
        </p>
        <KpiCards :items="workKpis" />
      </div>
    </div>

    <WorkGallery3D :projects="myWork" />

    <div class="relative z-10 flex justify-center pb-20 -mt-6">
      <div class="flex items-center gap-2 text-sm" style="color: var(--text-muted-color)">
        <span>{{ myWork.length }} projects</span>
        <span class="opacity-40">·</span>
        <span>Scroll to explore</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import siteInfo from '@/utilies/siteInfo.json'
import HeaderBadge from '../BasicComponents/HeaderBadge.vue'
import SectionHeading from '../BasicComponents/SectionHeading.vue'
import KpiCards, { type KpiItem } from '../BasicComponents/KpiCards.vue'
import WorkGallery3D from './WorkGallery3D.vue'

interface Project {
  id: number | string
  name: string
  description: string
  skills?: string[]
  image: string
}

const myWork = ref<Project[]>(siteInfo.projects || [])

const workKpis = computed<KpiItem[]>(() => [
  {
    id: 'projects',
    value: `${myWork.value.length}+`,
    label: 'Projects',
    icon: 'fa-solid fa-rocket',
  },
  {
    id: 'satisfaction',
    value: '100%',
    label: 'Satisfaction',
    icon: 'fa-solid fa-users',
  },
  {
    id: 'experience',
    value: siteInfo.dev.experience,
    label: 'Years',
    icon: 'fa-solid fa-award',
  },
])
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
