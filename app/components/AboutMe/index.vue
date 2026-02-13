<script setup lang="ts">
// strict typing & composition API
import { ref } from 'vue'
import HeaderBadge from '../BasicComponents/HeaderBadge.vue'
import siteInfo from '@/utilies/siteInfo.json'
import CustomButton from '../BasicComponents/CustomButton.vue'

// client-only checks
const isClient = typeof window !== 'undefined'

// download CV
const downloading = ref(false)
async function downloadCv(): Promise<void> {
  if (!isClient) return
  try {
    downloading.value = true
    const res = await fetch('/My-Resume.pdf')
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`)
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.setAttribute('download', 'Shahzeb-Akhtar-Resume.pdf')
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  } catch (err) {
    // keep console.log removable/toggleable in production
    // you can replace with a toast composable if you have one
    // eslint-disable-next-line no-console
    console.error('Error downloading CV:', err)
  } finally {
    downloading.value = false
  }
}

// smooth scroll to #contact
function scrollToContact(): void {
  if (!isClient) return
  const el = document.getElementById('contact')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section aria-labelledby="about-heading" class="about-section py-16">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <!-- HERO -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center content-center"
      >
        <!-- LEFT: portrait + stats -->
        <aside class="flex justify-center lg:justify-start">
          <img src="@/assets/images/about-user-img.png" alt="Shahzeb Akhtar" />
        </aside>

        <!-- RIGHT: content -->
        <div class="pt-1">
          <HeaderBadge icon="fa-solid fa-circle-user" heading="About Me" />

          <h1
            id="about-heading"
            class="about-heading text-4xl lg:text-5xl font-extrabold leading-tight mb-2"
          >
            Hi, I'm
            <span
              class="ml-2 inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400"
            >
              {{ siteInfo.name }}
            </span>
          </h1>

          <p class="about-subtitle text-sm font-semibold mb-4">
            {{ siteInfo.title }}
          </p>

          <p
            class="about-description text-base lg:text-lg max-w-[60ch] leading-relaxed mb-6"
          >
            {{ siteInfo.about }}
          </p>

          <!-- skill row -->
          <div class="flex flex-wrap gap-3 mb-5">
            <div
              class="about-skill-card flex items-center gap-3 rounded-xl p-3 min-w-[180px] shadow"
            >
              <div
                class="flex items-center justify-center rounded-full w-14 h-14 font-extrabold text-sm text-white"
                :style="{
                  background: `conic-gradient(var(--theme-primary-dark) ${90}%, var(--bg-primary-color) 0%)`,
                  boxShadow: 'var(--shadow-sm)',
                }"
                title="90%"
                aria-hidden="true"
              >
                90%
              </div>
              <div class="min-w-0">
                <div class="about-skill-name font-extrabold">
                  {{ siteInfo.dev.expertise }}
                </div>
                <div class="about-skill-sub text-xs">
                  Component Architecture
                </div>
              </div>
            </div>

            <div
              class="about-skill-card flex items-center gap-3 rounded-xl p-3 min-w-[180px] shadow"
            >
              <div
                class="flex items-center justify-center rounded-full w-14 h-14 font-extrabold text-sm text-white"
                :style="{
                  background: `conic-gradient(var(--theme-primary-dark) ${85}%, var(--bg-primary-color) 0%)`,
                  boxShadow: 'var(--shadow-sm)',
                }"
                title="85%"
                aria-hidden="true"
              >
                85%
              </div>
              <div class="min-w-0">
                <div class="about-skill-name font-extrabold">Performance</div>
                <div class="about-skill-sub text-xs">Optimizations</div>
              </div>
            </div>

            <div
              class="about-skill-card flex items-center gap-3 rounded-xl p-3 min-w-[180px] shadow"
            >
              <div
                class="flex items-center justify-center rounded-full w-14 h-14 font-extrabold text-sm text-white"
                :style="{
                  background: `conic-gradient(var(--theme-primary-dark) ${70}%, var(--bg-primary-color) 0%)`,
                  boxShadow: 'var(--shadow-sm)',
                }"
                title="70%"
                aria-hidden="true"
              >
                70%
              </div>
              <div class="min-w-0">
                <div class="about-skill-name font-extrabold">UI/UX</div>
                <div class="about-skill-sub text-xs">Design Systems</div>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex flex-wrap gap-3">
            <CustomButton
              variant="primary"
              @click="downloadCv"
              :disabled="downloading"
            >
              <span>{{ downloading ? 'Downloading…' : 'Download CV' }}</span>
            </CustomButton>
            <CustomButton variant="secondary" @click="scrollToContact">
              Contact Me
            </CustomButton>
          </div>
        </div>
      </div>

      <!-- TIMELINE -->
      <div class="mt-10 grid gap-3">
        <article class="about-timeline-item flex gap-4 p-4 rounded-xl shadow">
          <time
            class="about-timeline-time min-w-[64px] font-extrabold text-orange-500 rounded-md px-3 py-2 text-center"
            >2024</time
          >
          <div class="flex-1">
            <h3 class="about-timeline-title m-0 font-bold">
              Frontend Engineer
            </h3>
            <p class="about-timeline-desc m-0 text-sm">
              Built scalable Vue component libraries and shipped performance
              improvements.
            </p>
          </div>
        </article>

        <article class="about-timeline-item flex gap-4 p-4 rounded-xl shadow">
          <time
            class="about-timeline-time min-w-[64px] font-extrabold text-orange-500 rounded-md px-3 py-2 text-center"
            >2023</time
          >
          <div class="flex-1">
            <h3 class="about-timeline-title m-0 font-bold">UI/UX Projects</h3>
            <p class="about-timeline-desc m-0 text-sm">
              Designed accessible interfaces and improved usability across
              products.
            </p>
          </div>
        </article>

        <article class="about-timeline-item flex gap-4 p-4 rounded-xl shadow">
          <time
            class="about-timeline-time min-w-[64px] font-extrabold text-orange-500 rounded-md px-3 py-2 text-center"
            >2022</time
          >
          <div class="flex-1">
            <h3 class="about-timeline-title m-0 font-bold">Focused on Vue</h3>
            <p class="about-timeline-desc m-0 text-sm">
              Adopted component-driven patterns and built multiple SPAs.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: var(--bg-secondary-color);
  color: var(--text-primary-color);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.about-card {
  background: var(--bg-card-color);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.about-stat-list {
  color: var(--text-secondary-color);
}

.about-stat-item {
  background: var(--surface-glass);
  border: 1px solid var(--border-color);
}

.about-heading {
  color: var(--text-primary-color);
}

.about-subtitle {
  color: var(--text-secondary-color);
}

.about-description {
  color: var(--text-secondary-color);
}

.about-skill-card {
  background: var(--bg-card-color);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.about-skill-name {
  color: var(--text-primary-color);
}

.about-skill-sub {
  color: var(--text-secondary-color);
}

.about-timeline-item {
  background: var(--bg-card-color);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.about-timeline-time {
  background: var(--glow-primary);
}

.about-timeline-title {
  color: var(--text-primary-color);
}

.about-timeline-desc {
  color: var(--text-secondary-color);
}
</style>
