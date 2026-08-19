<script setup lang="ts">
import HeaderBadge from '../BasicComponents/HeaderBadge.vue'
import siteInfo from '@/utilies/siteInfo.json'
import CustomButton from '../BasicComponents/CustomButton.vue'
import SectionHeading from '../BasicComponents/SectionHeading.vue'
import { scrollTo } from '@/composables/useScroll'

const techStack = [
  { name: 'Vue.js', icon: 'fa-brands fa-vuejs', color: '#4FC08D' },
  { name: 'Nuxt.js', icon: 'fa-solid fa-n', color: '#00DC82' },
  { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: 'fa-solid fa-wind', color: '#38BDF8' },
  { name: 'Firebase', icon: 'fa-solid fa-fire', color: '#FFCA28' },
  { name: 'Mapbox', icon: 'fa-solid fa-map-location-dot', color: '#4264FB' },
]
</script>

<template>
  <section
    aria-labelledby="about-heading"
    class="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 bg-[var(--bg-primary-color)] text-[var(--text-primary-color)] transition-[background-color,color] duration-300 ease-in-out"
  >
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <!-- LEFT: portrait with blob splash -->
        <aside class="flex relative justify-center lg:justify-start">
          <div
            class="flex items-center justify-center w-[340px] h-[380px] md:w-[400px] md:h-[440px] lg:w-[460px] lg:h-[500px]"
          >
            <img
              src="/images/about-user-img.png"
              alt="Shahzeb Akhtar"
              class=""
            />
          </div>
        </aside>

        <!-- RIGHT: content -->
        <div class="text-center lg:text-left">
          <HeaderBadge icon="fa-solid fa-circle-user" heading="About Me" />

          <SectionHeading
            first-part="I'm "
            :second-part="siteInfo.name"
            wrapperClass="!gap-4"
          />

          <p class="text-lg font-bold mb-4 text-[var(--text-primary-color)]">
            {{ siteInfo.title }}
          </p>

          <p
            class="text-base lg:text-lg leading-relaxed mb-8 text-[var(--text-secondary-color)] max-w-[58ch] mx-auto lg:mx-0"
          >
            {{ siteInfo.about }}
          </p>

          <!-- KPI Cards -->
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div
              class="flex items-center gap-[14px] py-3 px-[14px] md:py-4 md:px-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card-color)] transition-all duration-300 ease-in-out hover:border-[var(--theme-primary-color)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
            >
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 bg-[rgba(79,192,141,0.12)] text-[#4FC08D]"
              >
                <i class="fa-solid fa-briefcase"></i>
              </div>
              <div>
                <div
                  class="text-xl md:text-2xl font-extrabold text-[var(--text-primary-color)] leading-[1.2]"
                >
                  {{ siteInfo.dev.experience }}+
                </div>
                <div
                  class="text-sm text-[var(--text-secondary-color)] leading-[1.3]"
                >
                  Years<br />Experience
                </div>
              </div>
            </div>
            <div
              class="flex items-center gap-[14px] py-3 px-[14px] md:py-4 md:px-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card-color)] transition-all duration-300 ease-in-out hover:border-[var(--theme-primary-color)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
            >
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 bg-[rgba(99,102,241,0.12)] text-[#6366F1]"
              >
                <i class="fa-solid fa-code"></i>
              </div>
              <div>
                <div
                  class="text-xl md:text-2xl font-extrabold text-[var(--text-primary-color)] leading-[1.2]"
                >
                  {{ siteInfo.dev.projects }}+
                </div>
                <div
                  class="text-sm text-[var(--text-secondary-color)] leading-[1.3]"
                >
                  Projects<br />Completed
                </div>
              </div>
            </div>
          </div>

          <!-- Tech Stack -->
          <div class="mb-8">
            <p
              class="text-sm font-semibold mb-3 text-[var(--text-primary-color)]"
            >
              Tech Stack
            </p>
            <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
              <span
                v-for="tech in techStack"
                :key="tech.name"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-card-color)] text-sm font-medium text-[var(--text-primary-color)] transition-all duration-[250ms] hover:border-[var(--theme-primary-color)] hover:-translate-y-px hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
              >
                <i
                  :class="tech.icon"
                  :style="{ color: tech.color }"
                  class="text-base"
                ></i>
                {{ tech.name }}
              </span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
            <CustomButton variant="primary" @click="scrollTo('projects')">
              View My Work
              <i class="fa-solid fa-arrow-up-right-from-square ml-1"></i>
            </CustomButton>
            <CustomButton variant="secondary" @click="scrollTo('contact-form')">
              Contact Me
              <i class="fa-regular fa-envelope ml-1"></i>
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
