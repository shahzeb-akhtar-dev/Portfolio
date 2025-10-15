<script setup lang="ts">
import userImage from '@/assets/images/user-image.png'
// strict typing & composition API
import { ref } from 'vue'
import HeaderBadge from '../BasicComponents/HeaderBadge.vue'
import siteInfo from '@/utilies/siteInfo.json'

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
  <section
    aria-labelledby="about-heading"
    class="py-16 bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100"
  >
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <!-- HERO -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center content-center"
      >
        <!-- LEFT: portrait + stats -->
        <aside class="flex justify-center lg:justify-start">
          <div
            class="w-full max-w-[320px] mx-auto bg-white/80 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 rounded-xl p-4 shadow-lg"
            role="region"
            aria-label="Profile card"
          >
            <div
              class="relative rounded-lg overflow-hidden mb-3"
              style="
                padding-top: 100%;
                background: linear-gradient(70deg, #ff5a01, #ff4b00);
              "
              aria-hidden="true"
            >
              <img
                :src="userImage"
                alt="Shahzeb Akhtar"
                class="absolute inset-0 w-full h-full object-cover object-center filter saturate-[0.98] contrast-[1.02]"
              />
            </div>

            <ul
              class="flex gap-2 justify-between list-none p-0 m-0 text-sm text-slate-600 dark:text-slate-300"
              role="list"
            >
              <li
                class="flex-1 text-center bg-white/60 dark:bg-slate-700/60 border rounded-lg px-2 py-2"
              >
                <strong class="block text-orange-500 font-extrabold text-base"
                  >2+</strong
                >
                <span class="block mt-1 text-xs">Years</span>
              </li>

              <li
                class="flex-1 text-center bg-white/60 dark:bg-slate-700/60 border rounded-lg px-2 py-2"
              >
                <strong class="block text-orange-500 font-extrabold text-base"
                  >Vue.js</strong
                >
                <span class="block mt-1 text-xs">Specialist</span>
              </li>

              <li
                class="flex-1 text-center bg-white/60 dark:bg-slate-700/60 border rounded-lg px-2 py-2"
              >
                <strong class="block text-orange-500 font-extrabold text-base"
                  >Remote</strong
                >
                <span class="block mt-1 text-xs">Available</span>
              </li>
            </ul>
          </div>
        </aside>

        <!-- RIGHT: content -->
        <div class="pt-1">
          <HeaderBadge icon="fa-solid fa-circle-user" heading="About Me" />
         
          <h1
            id="about-heading"
            class="text-4xl lg:text-5xl font-extrabold leading-tight mb-2"
          >
            Hi, I'm
            <span
              class="ml-2 inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400"
            >
              {{ siteInfo.name }}
            </span>
          </h1>

          <p
            class="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-4"
          >
            {{ siteInfo.title }}
          </p>

          <p
            class="text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-[60ch] leading-relaxed mb-6"
          >
            {{ siteInfo.about }}
          </p>

          <!-- skill row -->
          <div class="flex flex-wrap gap-3 mb-5">
            <!-- skill card -->
            <div
              class="flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 border rounded-xl p-3 min-w-[180px] shadow"
            >
              <div
                class="flex items-center justify-center rounded-full w-14 h-14 font-extrabold text-sm text-black"
                :style="{
                  background: `conic-gradient(#ff5a01 ${90 * 1}%, #f1f5f9 0%)`,
                  boxShadow:
                    '0 10px 30px rgba(255,90,1,0.08), inset 0 -4px 12px rgba(255,255,255,0.06)',
                }"
                title="90%"
                aria-hidden="true"
              >
                90%
              </div>
              <div class="min-w-0">
                <div class="font-extrabold text-slate-900 dark:text-slate-100">
                  Vue.js
                </div>
                <div class="text-xs text-slate-500 dark:text-slate-300">
                  Component Architecture
                </div>
              </div>
            </div>

            <div
              class="flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 border rounded-xl p-3 min-w-[180px] shadow"
            >
              <div
                class="flex items-center justify-center rounded-full w-14 h-14 font-extrabold text-sm text-black"
                :style="{
                  background: `conic-gradient(#ff5a01 ${85 * 1}%, #f1f5f9 0%)`,
                  boxShadow:
                    '0 10px 30px rgba(255,90,1,0.08), inset 0 -4px 12px rgba(255,255,255,0.06)',
                }"
                title="85%"
                aria-hidden="true"
              >
                85%
              </div>
              <div class="min-w-0">
                <div class="font-extrabold text-slate-900 dark:text-slate-100">
                  Performance
                </div>
                <div class="text-xs text-slate-500 dark:text-slate-300">
                  Optimizations
                </div>
              </div>
            </div>

            <div
              class="flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 border rounded-xl p-3 min-w-[180px] shadow"
            >
              <div
                class="flex items-center justify-center rounded-full w-14 h-14 font-extrabold text-sm text-black"
                :style="{
                  background: `conic-gradient(#ff5a01 ${70 * 1}%, #f1f5f9 0%)`,
                  boxShadow:
                    '0 10px 30px rgba(255,90,1,0.08), inset 0 -4px 12px rgba(255,255,255,0.06)',
                }"
                title="70%"
                aria-hidden="true"
              >
                70%
              </div>
              <div class="min-w-0">
                <div class="font-extrabold text-slate-900 dark:text-slate-100">
                  UI/UX
                </div>
                <div class="text-xs text-slate-500 dark:text-slate-300">
                  Design Systems
                </div>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex flex-wrap gap-3">
            <button
              @click="downloadCv"
              :disabled="downloading"
              class="inline-flex items-center justify-center gap-2 min-w-[160px] px-4 py-2 rounded-lg font-semibold transition-transform transform hover:-translate-y-1 shadow-md bg-gradient-to-br from-orange-500 to-orange-400 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v12M8 11l4 4 4-4M21 21H3"
                />
              </svg>
              <span>{{ downloading ? 'Downloading…' : 'Download CV' }}</span>
            </button>

            <button
              @click="scrollToContact"
              class="inline-flex items-center gap-2 min-w-[140px] px-4 py-2 rounded-lg font-semibold border-2 border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <!-- TIMELINE -->
      <div class="mt-10 grid gap-3">
        <article
          class="flex gap-4 p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 border shadow"
        >
          <time
            class="min-w-[64px] font-extrabold text-orange-500 bg-gradient-to-b from-orange-50 to-orange-25 rounded-md px-3 py-2 text-center"
            >2024</time
          >
          <div class="flex-1">
            <h3 class="m-0 font-bold text-slate-900 dark:text-slate-100">
              Frontend Engineer
            </h3>
            <p class="m-0 text-sm text-slate-600 dark:text-slate-300">
              Built scalable Vue component libraries and shipped performance
              improvements.
            </p>
          </div>
        </article>

        <article
          class="flex gap-4 p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 border shadow"
        >
          <time
            class="min-w-[64px] font-extrabold text-orange-500 bg-gradient-to-b from-orange-50 to-orange-25 rounded-md px-3 py-2 text-center"
            >2023</time
          >
          <div class="flex-1">
            <h3 class="m-0 font-bold text-slate-900 dark:text-slate-100">
              UI/UX Projects
            </h3>
            <p class="m-0 text-sm text-slate-600 dark:text-slate-300">
              Designed accessible interfaces and improved usability across
              products.
            </p>
          </div>
        </article>

        <article
          class="flex gap-4 p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 border shadow"
        >
          <time
            class="min-w-[64px] font-extrabold text-orange-500 bg-gradient-to-b from-orange-50 to-orange-25 rounded-md px-3 py-2 text-center"
            >2022</time
          >
          <div class="flex-1">
            <h3 class="m-0 font-bold text-slate-900 dark:text-slate-100">
              Focused on Vue
            </h3>
            <p class="m-0 text-sm text-slate-600 dark:text-slate-300">
              Adopted component-driven patterns and built multiple SPAs.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
