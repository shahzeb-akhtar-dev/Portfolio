<template>
  <div class="skills-section relative min-h-screen overflow-hidden">
    <!-- Main Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="text-center mb-20 space-y-6">
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
          <span class="block mb-2"> </span>
        </h1>
        <HeaderBadge icon="fa-solid fa-microchip" heading="Technologies"/>
        <SectionHeading
          first-part="Skills &"
          second-part="Technologies"
          wrapper-class="justify-center"
        />
        <p class="skills-description max-w-2xl mx-auto text-lg leading-relaxed">
          Tools I use to build, ship, and scale.
        </p>
      </div>

      <!-- Infinite Scroll Container -->
      <div class="relative">
        <div class="overflow-hidden py-12 mx-auto" style="max-width: 100%">
          <div
            class="flex animate-scroll gap-8 md:gap-10 lg:gap-12"
            style="width: max-content"
          >
            <!-- First Set -->
            <div
              v-for="(skill, index) in skills"
              :key="`skill-1-${index}`"
              class="flex-shrink-0"
            >
              <div class="skill-card">
                <div
                  class="w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center relative"
                >
                  <img
                    :src="skill.icon"
                    :alt="skill.name"
                    class="w-[56px] h-[56px] md:w-[64px] md:h-[64px] lg:w-[80px] lg:h-[80px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-400 hover:scale-[1.2] hover:rotate-[8deg]"
                  />
                </div>
                <span class="skill-card-name">
                  {{ skill.name }}
                </span>
              </div>
            </div>

            <!-- Duplicate Set for Seamless Loop -->
            <div
              v-for="(skill, index) in skills"
              :key="`skill-2-${index}`"
              class="flex-shrink-0"
            >
              <div class="skill-card">
                <div
                  class="w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center relative"
                >
                  <img
                    :src="skill.icon"
                    :alt="skill.name"
                    class="w-[56px] h-[56px] md:w-[64px] md:h-[64px] lg:w-[80px] lg:h-[80px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-400 hover:scale-[1.2] hover:rotate-[8deg]"
                  />
                </div>
                <span class="skill-card-name">
                  {{ skill.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Achievement Stats -->
      <div class="flex justify-center gap-8 mt-16">
        <div class="text-center group cursor-default">
          <div
            class="text-4xl font-black bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300"
          >
            {{ skills.length }}+
          </div>
          <div class="skills-stat-label text-sm font-semibold uppercase tracking-wide">
            Technologies
          </div>
        </div>
        <div class="skills-divider w-px"></div>
        <div class="text-center group cursor-default">
          <div
            class="text-4xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300"
          >
            {{ siteInfo.dev.experience }}
          </div>
          <div class="skills-stat-label text-sm font-semibold uppercase tracking-wide">
            Years Exp
          </div>
        </div>
        <div class="skills-divider w-px"></div>
        <div class="text-center group cursor-default">
          <div
            class="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300"
          >
           {{siteInfo.projects.length}}+
          </div>
          <div class="skills-stat-label text-sm font-semibold uppercase tracking-wide">
            Projects
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import siteInfo from '~/utilies/siteInfo.json'
import SectionHeading from '../BasicComponents/SectionHeading.vue'
import HeaderBadge from '../BasicComponents/HeaderBadge.vue'

// Types
interface Skill {
  name: string
  icon: string
}

// Skills data from JSON
const skills = ref<Skill[]>(siteInfo.skills)
</script>

<style scoped>
.skills-section {
  background-color: var(--bg-secondary-color);
}

.skills-description {
  color: var(--text-secondary-color);
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 1.5rem;
  min-width: 130px;
  background: var(--surface-glass);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  border-radius: 1.5rem;
  transition: all 400ms ease;
  cursor: pointer;
}

.skill-card:hover {
  background: var(--orbit-icon-hover-bg);
  border-color: rgba(255, 90, 1, 0.5);
  transform: translateY(-0.75rem) scale(1.05);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 50px var(--glow-primary);
}

.skill-card-name {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-primary-color);
  text-align: center;
  letter-spacing: 0.025em;
  transition: all 300ms ease;
}

.skill-card:hover .skill-card-name {
  color: var(--theme-primary-color, #ff5a01);
}

.skills-stat-label {
  color: var(--text-muted-color);
}

.skills-divider {
  background: linear-gradient(to bottom, transparent, var(--border-color), transparent);
}

/* Infinite Scroll Animation */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 2));
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused;
}

@media (min-width: 768px) {
  .skill-card {
    padding: 2.5rem 2rem;
    min-width: 150px;
  }
  .skill-card-name {
    font-size: 0.9rem;
  }
}

@media (min-width: 1024px) {
  .skill-card {
    padding: 3rem 2.5rem;
    min-width: 180px;
  }
  .skill-card-name {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .animate-scroll {
    animation-duration: 25s;
  }
}

@media (max-width: 480px) {
  .animate-scroll {
    animation-duration: 20s;
  }
}
</style>
