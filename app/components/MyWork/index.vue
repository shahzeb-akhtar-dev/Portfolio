<template>
  <div class="work-section relative min-h-screen overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-3xl animate-float"
      ></div>
      <div
        class="absolute -bottom-1/2 -left-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float-delayed"
      ></div>
    </div>

    <!-- Main Content -->
    <div
      class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
    >
      <!-- Header Section -->
      <div class="text-center mb-20 space-y-8">
        <HeaderBadge
          icon="fa-solid fa-diagram-project"
          heading="Portfolio Showcase"
          class="!mx-auto"
        />
        <SectionHeading
          first-part="Crafting Digital "
          second-part="Masterpieces"
          wrapper-class=" !justify-center"
        />

        <p class="work-description max-w-3xl mx-auto text-lg leading-relaxed">
          Transforming ideas into
          <span class="work-highlight font-semibold"
            >stunning digital experiences</span
          >
          through innovative design, clean code, and cutting-edge technology.
          Each project is a testament to
          <span class="text-primary font-semibold">excellence</span> and
          <span class="text-purple-400 font-semibold">creativity</span>.
        </p>

        <!-- Stats -->
        <KpiCards :items="workKpis" />
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div
          v-for="(project, index) in recentProjects"
          :key="project.id"
          :style="{ animationDelay: `${index * 100}ms` }"
          class="work-project-card group relative backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500/50"
        >
          <!-- Project Number Badge -->
          <div
            class="work-badge absolute top-4 right-4 z-10 flex items-center justify-center w-12 h-12 backdrop-blur-md border border-orange-500/30 rounded-full font-black text-orange-400 group-hover:scale-110 transition-all duration-300"
          >
            {{ String(index + 1).padStart(2, '0') }}
          </div>

          <!-- Image -->
          <div class="work-img-wrapper relative h-56 overflow-hidden">
            <img
              :src="project.image"
              :alt="project.name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="work-img-overlay absolute inset-0 opacity-60"></div>
          </div>

          <!-- Content -->
          <div class="relative p-6 space-y-4">
            <h3
              class="work-project-title text-2xl font-black group-hover:text-orange-500 transition-colors duration-300"
            >
              {{ project.name }}
            </h3>
            <p
              class="work-project-desc group-hover:text-orange-400 leading-relaxed line-clamp-3"
            >
              {{ project.description }}
            </p>

            <div
              v-if="project.skills?.length"
              class="work-skills-wrap flex flex-wrap gap-2 pt-1"
            >
              <span
                v-for="skill in project.skills"
                :key="`${project.id}-${skill}`"
                class="work-skill-tag text-[var(--theme-primary-dark)] inline-flex bg-[#ff4d001e] items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-300"
              >
                {{ skill }}
              </span>
            </div>

            <!-- Footer -->
            <!-- <div class="flex items-center justify-between pt-4">
              <a href="#" class="inline-flex items-center gap-2 text-orange-400 font-bold hover:gap-4 transition-all duration-300 group/link">
                <span>View Project</span>
                <i class="fa-solid fa-arrow-right group-hover/link:translate-x-1 transition-transform"></i>
              </a>
              <div class="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <i class="fa-solid fa-code text-orange-400"></i>
              </div>
            </div> -->
          </div>
        </div>
      </div>

      <!-- Load More / All Loaded -->
      <div class="flex justify-center">
        <CustomButton
          variant="secondary"
          v-if="workDataLimit < myWork.length"
          @click="loadMore"
        >
          <div class="flex items-center gap-2">
            Load More Projects
            <i
              class="fa-solid fa-arrow-down ml-1 animate-bounce-slow my-2 -mb-[1rem]"
            ></i>
          </div>
        </CustomButton>

        <div v-else class="text-center space-y-4">
          <div
            class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 rounded-full animate-pulse-slow"
          >
            <i class="fa-solid fa-check-circle text-5xl text-green-400"></i>
          </div>
          <p class="work-all-loaded text-xl font-bold">All projects loaded!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import siteInfo from '@/utilies/siteInfo.json'
import HeaderBadge from '../BasicComponents/HeaderBadge.vue'
import SectionHeading from '../BasicComponents/SectionHeading.vue'
import CustomButton from '../BasicComponents/CustomButton.vue'
import KpiCards, { type KpiItem } from '../BasicComponents/KpiCards.vue'
// Types
interface Project {
  id: number | string
  name: string
  description: string
  skills?: string[]
  image: string
}

// Project data with relevant images
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

const workDataLimit = ref<number>(6)

const recentProjects = computed(() => {
  return myWork.value.slice(0, workDataLimit.value)
})

const loadMore = () => {
  const limit = myWork.value.length
  if (workDataLimit.value < limit) {
    workDataLimit.value += 3
  }
}
</script>

<!-- Tailwind Custom Styles -->
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

.work-stat-card {
  background: var(--surface-glass);
  border: 1px solid var(--glass-border);
}

.work-stat-value {
  color: var(--text-primary-color);
}

.work-stat-label {
  color: var(--text-muted-color);
}

.work-project-card {
  background: var(--surface-glass);
  border: 1px solid var(--glass-border);
}

.work-badge {
  background: var(--bg-primary-color);
}

.work-img-wrapper {
  background-color: var(--bg-secondary-color);
}

.work-img-overlay {
  background: rgba(0, 0, 0, 0.137);
}

.work-project-title {
  color: var(--text-primary-color);
}

.work-project-desc {
  color: var(--text-secondary-color);
}

.work-skill-tag {
  border: 1px solid var(--glass-border);
}

.work-project-card:hover .work-skill-tag {
  border-color: rgb(249 115 22 / 0.35);
}

.work-all-loaded {
  color: var(--text-muted-color);
}
@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(5deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(-5deg);
  }
}

@keyframes float-delayed {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(-30px, 30px) rotate(-5deg);
  }
  66% {
    transform: translate(20px, -20px) rotate(5deg);
  }
}

@keyframes gradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

.animate-float {
  animation: float 20s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 25s ease-in-out infinite;
}

.animate-gradient {
  background-size: 200% auto;
  animation: gradient 3s linear infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 2s ease-in-out infinite;
}

.bg-grid-pattern {
  background-image:
    linear-gradient(var(--white-transparent-03) 1px, transparent 1px),
    linear-gradient(90deg, var(--white-transparent-03) 1px, transparent 1px);
  background-size: 50px 50px;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
