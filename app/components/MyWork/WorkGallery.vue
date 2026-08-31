<template>
  <section class="relative w-full py-16 pb-24">
    <div class="relative w-full max-w-[1400px] mx-auto px-6">
      <article
        v-for="(project, index) in projects"
        :key="project.id"
        ref="cardRefs"
        class="sticky mb-16"
      >
        <div class="group relative grid grid-cols-1 md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_1.2fr] items-start bg-[var(--bg-card-color)] rounded-3xl border border-[var(--border-color)] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15),0_2px_10px_rgba(0,0,0,0.05)] overflow-hidden transition-shadow duration-[400ms] ease-[ease] hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)] gap-4 lg:gap-10 p-4 lg:p-12">
          <!-- Left: Number + Category -->
          <div class="flex flex-row items-center gap-4 min-w-0 md:flex-col md:items-start md:gap-2 md:min-w-[80px]">
            <div class="flex items-baseline gap-1">
              <span class="text-4xl md:text-5xl font-extrabold leading-none bg-[linear-gradient(135deg,var(--theme-primary-color),var(--theme-primary-dark))] bg-clip-text text-transparent">{{
                String(index + 1).padStart(2, '0')
              }}</span>
              <span class="text-[1.1rem] font-medium text-[var(--text-muted-color)]"
                >/{{ String(projects.length).padStart(2, '0') }}</span
              >
            </div>
            <span class="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[var(--theme-primary-color)]">{{
              project.category || 'Web Application'
            }}</span>
          </div>

          <!-- Center: Content -->
          <div class="flex flex-col gap-4">
            <div class="inline-flex items-center gap-[0.4rem] py-[0.35rem] px-[0.9rem] rounded-full text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-[var(--theme-primary-color)] bg-[var(--glow-primary)] border border-[rgba(59,130,246,0.15)] w-fit">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l2 2" />
              </svg>
              <span>Featured Project</span>
            </div>

            <h2 class="text-[1.4rem] md:text-[1.75rem] font-extrabold leading-[1.2] text-[var(--text-primary-color)] m-0">{{ project.name }}</h2>
            <p class="text-[0.95rem] leading-[1.65] text-[var(--text-secondary-color)] m-0 max-w-[420px]">{{ project.description }}</p>

            <!-- Feature badges -->
            <div
              v-if="project.features?.length"
              class="hidden lg:flex flex-wrap mt-1 gap-2"
            >
              <div
                v-for="feature in project.features"
                :key="feature.label"
                class="inline-flex items-center gap-[0.4rem] py-[0.4rem] px-[0.85rem] rounded-[0.6rem] text-[0.78rem] font-medium text-[var(--text-secondary-color)] bg-[var(--bg-elevated-color)] border border-[var(--border-color)]"
              >
                <i :class="feature.icon" class="text-[0.85rem] text-[var(--theme-primary-color)]"></i>
                <span>{{ feature.label }}</span>
              </div>
            </div>

            <!-- Tech tags -->
            <div
              v-if="project.skills?.length"
              class="hidden md:flex flex-wrap gap-2"
            >
              <span
                v-for="tech in project.skills.slice(0, 5)"
                :key="tech"
                class="py-1 px-[0.65rem] rounded-full text-[0.7rem] font-medium text-[var(--text-muted-color)] bg-[var(--white-transparent-05)] border border-[var(--border-color)]"
              >
                {{ tech }}
              </span>
            </div>

            <!-- CTA Buttons -->
            <!-- <div class="cta-group">
              <button class="cta-btn primary">
                <span>View Project</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button class="cta-btn secondary">
                <span>Live Demo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </button>
            </div> -->
          </div>

          <!-- Right: Preview Image -->
          <div class="relative flex items-center justify-center col-span-full mt-4 lg:col-auto lg:mt-0">
            <div class="relative w-full rounded-xl overflow-hidden shadow-[0_15px_40px_-10px_rgba(15,23,42,0.12)]">
              <img
                :src="project.image"
                :alt="project.name"
                loading="lazy"
                class="w-full h-[200px] md:h-[260px] lg:h-[320px] object-cover block transition-transform duration-[600ms] ease-[ease] group-hover:scale-[1.03]"
              />
              <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.04),rgba(139,92,246,0.06))] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

interface ProjectFeature {
  icon: string
  label: string
}

interface Project {
  id: number | string
  name: string
  description: string
  skills?: string[]
  image: string
  category?: string
  features?: ProjectFeature[]
}

const props = defineProps<{
  projects: Project[]
}>()

const cardRefs = ref<HTMLElement[]>([])

const STICKY_TOP = computed(() => {
  return window.innerWidth > 768 ? 80 : 10
})
const STICKY_OFFSET = computed(() => {
  return window.innerWidth > 768 ? 24 : 10
})

onMounted(() => {
  nextTick(() => {
    const cards = cardRefs.value.filter(Boolean)
    cards.forEach((card, i) => {
      const topValue = STICKY_TOP.value + i * STICKY_OFFSET.value
      card.style.position = 'sticky'
      card.style.top = `${topValue}px`
      card.style.zIndex = `${i + 1}`
    })
  })
})
</script>
