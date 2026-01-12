<template>
  <div
    class="relative min-h-screen overflow-hidden"
    style="background: linear-gradient(180deg, #1a1f35 0%, #0f1421 100%)"
  >
    <!-- Main Content -->
    <div
      class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6"
    >
      <!-- Section Header -->
      <div class="text-center mb-20 space-y-6">
        <!-- Title -->
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
          <span class="block text-white mb-2"> </span>
        </h1>
        <HeaderBadge icon="fa-solid fa-microchip" heading="Technologies"/>
        <SectionHeading
          first-part="Skills &"
          second-part="Technologies"
        />
        <!-- Description -->
        <p class="max-w-2xl mx-auto text-lg leading-relaxed text-slate-300">
          Tools I use to build, ship, and scale.
        </p>
      </div>

      <!-- Infinite Scroll Container -->
      <div class="relative">
        <!-- Scrolling Track -->
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
              <div
                class="skill-card flex flex-col items-center gap-6 px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 min-w-[130px] md:min-w-[150px] lg:min-w-[180px] bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl transition-all duration-[400ms] cursor-pointer hover:bg-white/8 hover:border-orange-500/50 hover:-translate-y-3 hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_50px_rgba(255,90,1,0.3)]"
              >
                <div
                  class="w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center relative"
                >
                  <img
                    :src="skill.icon"
                    :alt="skill.name"
                    class="w-[56px] h-[56px] md:w-[64px] md:h-[64px] lg:w-[80px] lg:h-[80px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-400 hover:scale-[1.2] hover:rotate-[8deg] hover:drop-shadow-[0_8px_24px_rgba(255,90,1,0.5)]"
                  />
                </div>
                <span
                  class="text-[0.85rem] md:text-[0.9rem] lg:text-base font-bold text-white/90 text-center tracking-wide transition-all duration-300 hover:text-orange-500 hover:scale-105"
                >
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
              <div
                class="skill-card flex flex-col items-center gap-6 px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 min-w-[130px] md:min-w-[150px] lg:min-w-[180px] bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl transition-all duration-[400ms] cursor-pointer hover:bg-white/8 hover:border-orange-500/50 hover:-translate-y-3 hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_50px_rgba(255,90,1,0.3)]"
              >
                <div
                  class="w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center relative"
                >
                  <img
                    :src="skill.icon"
                    :alt="skill.name"
                    class="w-[56px] h-[56px] md:w-[64px] md:h-[64px] lg:w-[80px] lg:h-[80px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-400 hover:scale-[1.2] hover:rotate-[8deg] hover:drop-shadow-[0_8px_24px_rgba(255,90,1,0.5)]"
                  />
                </div>
                <span
                  class="text-[0.85rem] md:text-[0.9rem] lg:text-base font-bold text-white/90 text-center tracking-wide transition-all duration-300 hover:text-orange-500 hover:scale-105"
                >
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
          <div
            class="text-sm font-semibold uppercase tracking-wide text-slate-400"
          >
            Technologies
          </div>
        </div>
        <div
          class="w-px bg-gradient-to-b from-transparent via-slate-600 to-transparent"
        ></div>
        <div class="text-center group cursor-default">
          <div
            class="text-4xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300"
          >
            {{ siteInfo.dev.experience }}
          </div>
          <div
            class="text-sm font-semibold uppercase tracking-wide text-slate-400"
          >
            Years Exp
          </div>
        </div>
        <div
          class="w-px bg-gradient-to-b from-transparent via-slate-600 to-transparent"
        ></div>
        <div class="text-center group cursor-default">
          <div
            class="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300"
          >
           {{siteInfo.projects.length}}+
          </div>
          <div
            class="text-sm font-semibold uppercase tracking-wide text-slate-400"
          >
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
/* Infinite Scroll Animation - Cannot be done with Tailwind */
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

/* Responsive animation speed */
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
