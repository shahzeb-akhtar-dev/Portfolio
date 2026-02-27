<template>
  <div class="skills-section relative min-h-screen overflow-hidden">
    <!-- Main Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="text-center mb-20 space-y-6">
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
          <span class="block mb-2"> </span>
        </h1>
        <HeaderBadge icon="fa-solid fa-microchip" heading="Technologies" class=" !mx-auto"/>
        <SectionHeading
          first-part="Skills &"
          second-part="Technologies"
          wrapper-class="!justify-center"
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
      <div class="skills-kpi-grid mt-16 mb-4">
        <article class="skills-kpi-card skills-kpi-card--tech">
          <div class="skills-kpi-icon skills-kpi-icon--tech">
            <i class="fa-solid fa-microchip text-white"></i>
          </div>
          <div class="skills-kpi-content">
            <p class="skills-kpi-value">{{ skills.length }}+</p>
            <p class="skills-kpi-label">Technologies</p>
          </div>
        </article>

        <article class="skills-kpi-card skills-kpi-card--satisfaction">
          <div class="skills-kpi-icon skills-kpi-icon--satisfaction">
            <i class="fa-solid fa-thumbs-up text-white"></i>
          </div>
          <div class="skills-kpi-content">
            <p class="skills-kpi-value">100%</p>
            <p class="skills-kpi-label">Satisfaction</p>
          </div>
        </article>

        <article class="skills-kpi-card skills-kpi-card--years">
          <div class="skills-kpi-icon skills-kpi-icon--years">
            <i class="fa-solid fa-calendar-check text-white"></i>
          </div>
          <div class="skills-kpi-content">
            <p class="skills-kpi-value">{{ siteInfo.dev.experience }}</p>
            <p class="skills-kpi-label">Years</p>
          </div>
        </article>
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

.skills-kpi-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;
}

.skills-kpi-card {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background: var(--bg-card-color);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.skills-kpi-card:hover {
  transform: translateY(-4px);
  border-color: var(--theme-primary-color);
  box-shadow: var(--shadow-md);
}

.skills-kpi-card::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 4px;
  opacity: 0.8;
}

.skills-kpi-card--tech::before {
  background: linear-gradient(
    to bottom,
    var(--theme-primary-color),
    var(--theme-primary-dark)
  );
}

.skills-kpi-card--satisfaction::before {
  background: linear-gradient(
    to bottom,
    var(--theme-secondary-color),
    var(--theme-primary-light)
  );
}

.skills-kpi-card--years::before {
  background: linear-gradient(
    to bottom,
    var(--theme-primary-light),
    var(--theme-primary-color)
  );
}

.skills-kpi-icon {
  position: relative;
  isolation: isolate;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 0.85rem 1rem 0.8rem 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  border: 1px solid var(--white-transparent-20);
  box-shadow: var(--shadow-sm);
  flex-shrink: 0;
}



.skills-kpi-icon::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    145deg,
    var(--white-transparent-20),
    transparent 45%
  );
  z-index: -1;
}

.skills-kpi-icon i {
  color: var(--text-white-color);
  text-shadow: 0 1px 1px var(--white-transparent-10);
}

.skills-kpi-icon--tech {
  border-radius: 0.9rem 0.7rem 1rem 0.8rem;
  background: linear-gradient(
    135deg,
    var(--theme-primary-color),
    var(--theme-primary-dark)
  );
}

.skills-kpi-icon--satisfaction {
  border-radius: 0.75rem 1rem 0.8rem 1rem;
  background: linear-gradient(
    135deg,
    var(--theme-secondary-color),
    var(--theme-primary-light)
  );
}

.skills-kpi-icon--years {
  border-radius: 1rem 0.8rem 0.95rem 0.75rem;
  background: linear-gradient(
    135deg,
    var(--theme-primary-light),
    var(--theme-primary-color)
  );
}

.skills-kpi-content {
  text-align: left;
}

.skills-kpi-value {
  margin: 0;
  font-size: clamp(1.9rem, 2.3vw, 2.35rem);
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: var(--text-primary-color);
}

.skills-kpi-label {
  margin: 0.32rem 0 0;
  font-size: 0.86rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted-color);
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

  .skills-kpi-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .animate-scroll {
    animation-duration: 20s;
  }

  .skills-kpi-grid {
    grid-template-columns: 1fr;
    gap: 0.85rem;
  }

  .skills-kpi-card {
    padding: 1rem;
  }

  .skills-kpi-icon {
    width: 2.9rem;
    height: 2.9rem;
    border-radius: 0.75rem;
  }
}
</style>
