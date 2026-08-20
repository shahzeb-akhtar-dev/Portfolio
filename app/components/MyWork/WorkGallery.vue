<template>
  <section
    class="relative w-full overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24"
  >
    <!-- 3D Carousel -->
    <div class="relative w-full">
      <!-- Carousel viewport -->
      <div class="relative mx-auto w-full max-w-[1500px] overflow-hidden">
        <swiper
          :modules="modules"
          effect="coverflow"
          :grab-cursor="true"
          :centered-slides="true"
          :slides-per-view="'auto'"
          :space-between="0"
          :coverflow-effect="coverflowEffect"
          :loop="slides.length > 7"
          :speed="700"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :watch-slides-progress="true"
          :allow-touch-move="true"
          :observer="true"
          :observe-parents="true"
          class="!w-full !overflow-visible !py-8 sm:!py-12"
        >
          <swiper-slide
            v-for="(slide, index) in slides"
            :key="`${slide.title}-${index}`"
            v-slot="{ isActive, isPrev, isNext }"
            class="!h-[390px] !w-[280px] sm:!h-[470px] sm:!w-[330px] lg:!h-[560px] lg:!w-[420px]"
          >
            <article
              class="group relative h-full w-full overflow-hidden rounded-2xl border bg-white transition-all duration-500 ease-out"
              :class="
                isActive
                  ? 'border-blue-200 shadow-[0_30px_80px_rgba(37,99,235,0.22)]'
                  : isPrev || isNext
                    ? 'border-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.14)]'
                    : 'border-slate-200 shadow-xl'
              "
            >
              <!-- Project image -->
              <img
                :src="slide.image"
                :alt="slide.title"
                loading="lazy"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out"
                :class="
                  isActive
                    ? 'scale-[1.025] group-hover:scale-[1.045]'
                    : 'scale-100'
                "
              />

              <!-- Image color treatment -->
              <div
                class="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/5 to-slate-950/75"
              />

              <!-- Active blue glow -->
              <div
                v-if="isActive"
                class="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/20"
              />

              <!-- Project content -->
              <div class="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
                <div
                  class="mb-3 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md sm:text-xs"
                >
                  {{ slide.category || 'Web Application' }}
                </div>

                <h3
                  class="text-xl font-bold leading-tight text-white sm:text-2xl"
                >
                  {{ slide.title }}
                </h3>

                <p
                  v-if="slide.description"
                  class="mt-2 line-clamp-3 text-xs leading-5 text-slate-200 sm:text-sm sm:leading-6"
                >
                  {{ slide.description }}
                </p>

                <!-- Technologies -->
                <div
                  v-if="slide.technologies?.length"
                  class="mt-4 flex flex-wrap gap-2"
                >
                  <span
                    v-for="technology in slide.technologies.slice(0, 4)"
                    :key="technology"
                    class="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md sm:text-xs"
                  >
                    {{ technology }}
                  </span>
                </div>
              </div>

              <!-- Active card indicator -->
              <div
                v-if="isActive"
                class="absolute left-5 top-5 h-1 w-10 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-lg sm:left-6 sm:top-6"
              />
            </article>
          </swiper-slide>
        </swiper>
      </div>

      <!-- Decorative side gradients -->
      <div
        class="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent lg:block"
      />

      <div
        class="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent lg:block"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'

interface Slide {
  image: string
  title: string
  description?: string
  category?: string
  technologies?: string[]
}

const props = defineProps<{
  slides: Slide[]
}>()

const modules = [Autoplay, EffectCoverflow, Navigation, Pagination]

const coverflowEffect = {
  rotate: 35,
  stretch: -20,
  depth: 350,
  modifier: 1.2,
  scale: 0.8,
  slideShadows: true,
}
</script>
