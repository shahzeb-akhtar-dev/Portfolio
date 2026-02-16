<script setup lang="ts">
// strict typing & composition API
import { ref } from 'vue'
import HeaderBadge from '../BasicComponents/HeaderBadge.vue'
import siteInfo from '@/utilies/siteInfo.json'
import CustomButton from '../BasicComponents/CustomButton.vue'
import SectionHeading from '../BasicComponents/SectionHeading.vue'
import { scrollTo } from '@/composables/useScroll'

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

</script>

<template>
  <section aria-labelledby="about-heading" class="about-section py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <!-- HERO -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        <!-- LEFT: portrait with decorative frame -->
        <aside class="flex justify-center">
          <div class="about-image-wrapper">
            <div class="about-image-frame">
              <img
                src="@/assets/images/about-user-img.png"
                alt="Shahzeb Akhtar"
                class="about-portrait"
              />
            </div>
          </div>
        </aside>

        <!-- RIGHT: content -->
        <div class="pt-1">
          <HeaderBadge icon="fa-solid fa-circle-user" heading="About Me" />
          <SectionHeading
            first-part="I'm "
            :second-part="siteInfo.name"
            wrapperClass="!gap-4"
          />


          <p class="about-subtitle text-sm font-semibold mb-4">
            {{ siteInfo.title }}
          </p>

          <p
            class="about-description text-base lg:text-lg max-w-[58ch] leading-relaxed mb-10"
          >
            {{ siteInfo.about }}
          </p>

          <!-- skill row — glass cards -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div class="about-skill-card group">
              <div class="about-skill-card-inner">
                <div class="about-progress-ring" title="90%" aria-hidden="true">
                  <svg viewBox="0 0 80 80" class="w-16 h-16">
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      stroke="var(--border-color)"
                      stroke-width="6"
                      fill="none"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      stroke="var(--theme-primary-color)"
                      stroke-width="6"
                      fill="none"
                      stroke-linecap="round"
                      :stroke-dasharray="2 * Math.PI * 34"
                      :stroke-dashoffset="2 * Math.PI * 34 * (1 - 0.9)"
                      class="about-progress-circle"
                    />
                  </svg>
                  <span class="about-progress-text">90%</span>
                </div>
                <div class="min-w-0 mt-3 text-center">
                  <div class="about-skill-name">
                    {{ siteInfo.dev.expertise }}
                  </div>
                  <div class="about-skill-sub">Component Architecture</div>
                </div>
              </div>
            </div>

            <div class="about-skill-card group">
              <div class="about-skill-card-inner">
                <div class="about-progress-ring" title="85%" aria-hidden="true">
                  <svg viewBox="0 0 80 80" class="w-16 h-16">
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      stroke="var(--border-color)"
                      stroke-width="6"
                      fill="none"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      stroke="var(--theme-primary-color)"
                      stroke-width="6"
                      fill="none"
                      stroke-linecap="round"
                      :stroke-dasharray="2 * Math.PI * 34"
                      :stroke-dashoffset="2 * Math.PI * 34 * (1 - 0.85)"
                      class="about-progress-circle"
                    />
                  </svg>
                  <span class="about-progress-text">85%</span>
                </div>
                <div class="min-w-0 mt-3 text-center">
                  <div class="about-skill-name">Performance</div>
                  <div class="about-skill-sub">Optimizations</div>
                </div>
              </div>
            </div>

            <div class="about-skill-card group">
              <div class="about-skill-card-inner">
                <div class="about-progress-ring" title="70%" aria-hidden="true">
                  <svg viewBox="0 0 80 80" class="w-16 h-16">
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      stroke="var(--border-color)"
                      stroke-width="6"
                      fill="none"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      stroke="var(--theme-primary-color)"
                      stroke-width="6"
                      fill="none"
                      stroke-linecap="round"
                      :stroke-dasharray="2 * Math.PI * 34"
                      :stroke-dashoffset="2 * Math.PI * 34 * (1 - 0.7)"
                      class="about-progress-circle"
                    />
                  </svg>
                  <span class="about-progress-text">70%</span>
                </div>
                <div class="min-w-0 mt-3 text-center">
                  <div class="about-skill-name">UI/UX</div>
                  <div class="about-skill-sub">Design Systems</div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex flex-wrap gap-4">
            <CustomButton
              variant="primary"
              @click="downloadCv"
              :disabled="downloading"
            >
              <span>{{ downloading ? 'Downloading…' : 'Download CV' }}</span>
            </CustomButton>
            <CustomButton variant="secondary" @click="scrollTo('contact-form')">
              Contact Me
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Section ── */
.about-section {
  position: relative;
  overflow: hidden;
  padding: 6rem 0 7rem;
  background-color: var(--bg-secondary-color);
  color: var(--text-primary-color);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

/* ── Decorative Background ── */
.about-bg-decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.about-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.12;
}

.about-orb-1 {
  width: 500px;
  height: 500px;
  background: var(--theme-primary-color);
  top: -120px;
  left: -100px;
  animation: aboutOrbFloat 8s ease-in-out infinite alternate;
}

.about-orb-2 {
  width: 350px;
  height: 350px;
  background: var(--theme-primary-dark);
  bottom: -80px;
  right: -60px;
  animation: aboutOrbFloat 10s ease-in-out infinite alternate-reverse;
}

.about-grid-pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--border-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.3;
  mask-image: radial-gradient(ellipse at 60% 50%, black 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(
    ellipse at 60% 50%,
    black 20%,
    transparent 70%
  );
}

@keyframes aboutOrbFloat {
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(30px, 20px) scale(1.08);
  }
}

/* ── Image Wrapper ── */
.about-image-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 420px;
  width: 100%;
}

.about-image-glow {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--glow-primary) 0%, transparent 70%);
  animation: aboutGlowPulse 3s ease-in-out infinite;
  z-index: 0;
}

@keyframes aboutGlowPulse {
  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.about-image-frame {
  position: relative;
  z-index: 2;
  width: 100%;
}

.about-portrait {
  width: 100%;
  height: auto;
  display: block;
}

/* Floating accent dots */
.about-float-dot {
  position: absolute;
  border-radius: 50%;
  z-index: 3;
  animation: aboutDotFloat 4s ease-in-out infinite;
}

.dot-1 {
  width: 14px;
  height: 14px;
  background: var(--theme-primary-color);
  top: 10%;
  right: -8px;
  animation-delay: 0s;
}

.dot-2 {
  width: 10px;
  height: 10px;
  background: var(--theme-primary-light);
  bottom: 20%;
  left: -6px;
  animation-delay: 1.5s;
}

.dot-3 {
  width: 8px;
  height: 8px;
  background: var(--theme-primary-dark);
  top: 50%;
  right: -16px;
  animation-delay: 3s;
}

@keyframes aboutDotFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

/* ── Heading ── */
.about-heading {
  color: var(--text-primary-color);
}

.about-name-gradient {
  display: inline-block;
  background: linear-gradient(135deg, #ff5900 0%, #ff8a3d 50%, #ff5900 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: aboutShimmer 3s linear infinite;
}

@keyframes aboutShimmer {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

/* ── Role Badge ── */
.about-role-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--theme-primary-color);
  background: var(--glow-primary);
  border: 1px solid rgba(255, 90, 1, 0.2);
  margin-bottom: 1.25rem;
}

.about-role-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--theme-primary-color);
  animation: aboutRolePulse 2s ease-in-out infinite;
}

@keyframes aboutRolePulse {
  0%,
  100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(255, 90, 1, 0.4);
  }
  50% {
    opacity: 0.7;
    box-shadow: 0 0 0 6px rgba(255, 90, 1, 0);
  }
}

/* ── Description ── */
.about-description {
  color: var(--text-secondary-color);
}

/* ── Skill Cards ── */
.about-skill-card {
  position: relative;
  border-radius: 1.25rem;
  padding: 2px;
  background: linear-gradient(
    135deg,
    var(--border-color) 0%,
    transparent 50%,
    var(--border-color) 100%
  );
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.about-skill-card:hover {
  background: linear-gradient(
    135deg,
    var(--theme-primary-color) 0%,
    rgba(255, 90, 1, 0.3) 50%,
    var(--theme-primary-color) 100%
  );
  transform: translateY(-6px);
  box-shadow: 0 20px 40px -12px rgba(255, 90, 1, 0.25);
}

.about-skill-card-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  border-radius: calc(1.25rem - 2px);
  background: var(--bg-card-color);
  backdrop-filter: blur(12px);
  height: 100%;
  transition: background 0.3s ease;
}

/* ── SVG Progress Ring ── */
.about-progress-ring {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-progress-circle {
  transform: rotate(-90deg);
  transform-origin: center;
  transition: stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.about-progress-text {
  position: absolute;
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--theme-primary-color);
  letter-spacing: -0.02em;
}

.about-skill-name {
  font-size: 0.875rem;
  font-weight: 800;
  color: #000000;
  letter-spacing: 0.01em;
}

.about-skill-sub {
  font-size: 0.75rem;
  color: #1a1a1a;
  margin-top: 2px;
  opacity: 0.85;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .about-section {
    padding: 4rem 0 5rem;
  }

  .about-image-wrapper {
    max-width: 320px;
    margin: 0 auto;
  }

  .about-float-dot {
    display: none;
  }
}
</style>
