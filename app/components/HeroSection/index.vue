<template>
  <section class="hero-wrapper py-4 md:py-t pb-24" id="hero-section">
    <!-- Ambient background glow effects -->
    <div class="hero-ambient">
      <div class="ambient-orb ambient-orb-1"></div>
      <div class="ambient-orb ambient-orb-2"></div>
      <div class="ambient-orb ambient-orb-3"></div>
    </div>

    <div class="max-w-7xl mx-auto w-full relative z-[3]">
      <div class="hero-content">
        <!-- Left: Enhanced User Image -->
        <!-- <div class="user-image-container">
          <div class="user-image">
            <img src="~/assets/images/user-image.png" alt="Shahzeb Akhtar" />
            <div class="image-border"></div>
          </div>
          <div class="status-indicator">
            <div class="status-dot"></div>
            <span>Available for hire</span>
          </div>
        </div> -->

        <!-- Right: Enhanced Text Content -->
        <div class="hero-text">
          <HeaderBadge icon="fa-solid fa-hand" heading="Hello there!" />
          <SectionHeading
            first-part="I'm "
            second-part=" Shahzeb Akhtar"
            wrapperClass="!gap-4"
          />

          <div class="role-container">
            <p class="subtitle">Full-Stack Developer</p>
            <div class="tech-stack">
              <span
                class="tech-tag"
                v-for="tech in siteInfo.hero.techStack"
                :key="tech"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <p class="hero-description">
            {{ siteInfo.hero.description }}
          </p>

          <div class="hero-actions">
            <CustomButton @click="scrollTo('contact-form')">
              Let's Work Together
            </CustomButton>

            <CustomButton variant="secondary" @click="scrollTo('my-work')">
              View My Work
            </CustomButton>
          </div>

          <!-- Social proof -->
          <div class="social-proof">
            <div class="stat" v-for="item in stats" :key="item.label">
              <span class="stat-number">{{ item.value }}</span>
              <span class="stat-label">{{ item.label }}</span>
            </div>
          </div>
        </div>

        <!-- RIGHT: Image with Orbiting Icons -->
        <div class="user-image-container">
          <div class="orbit-system">
            <!-- Orbit ring visuals -->
            <div class="orbit-ring orbit-ring-outer"></div>
            <div class="orbit-ring orbit-ring-inner"></div>

            <!-- Outer orbit: clockwise -->
            <div class="orbit orbit-outer">
              <div
                v-for="(skill, i) in outerOrbitSkills"
                :key="'outer-' + i"
                class="orbit-icon"
                :style="{
                  '--angle': (360 / outerOrbitSkills.length) * i + 'deg',
                }"
              >
                <div class="orbit-icon-inner">
                  <img :src="skill.icon" :alt="skill.name" />
                </div>
              </div>
            </div>

            <!-- Inner orbit: counter-clockwise -->
            <div class="orbit orbit-inner">
              <div
                v-for="(skill, i) in innerOrbitSkills"
                :key="'inner-' + i"
                class="orbit-icon"
                :style="{
                  '--angle': (360 / innerOrbitSkills.length) * i + 'deg',
                }"
              >
                <div class="orbit-icon-inner">
                  <img :src="skill.icon" :alt="skill.name" />
                </div>
              </div>
            </div>

            <!-- Center: User image with premium frame -->
            <div class="user-image">
              <div class="image-glow"></div>
              <div class="image-frame">
                <div class="image-frame-inner"></div>
              </div>
              <img src="~/assets/images/user-image.png" alt="Shahzeb Akhtar" />
            </div>
          </div>

          <div class="status-indicator">
            <div class="status-dot"></div>
            <span>Available for hire</span>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator">
        <div class="scroll-line"></div>
        <span>Scroll to explore</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { scrollTo } from '@/composables/useScroll'
import siteInfo from '@/utilies/siteInfo.json'
import CustomButton from '../BasicComponents/CustomButton.vue'
import SectionHeading from '../BasicComponents/SectionHeading.vue'
import HeaderBadge from '../BasicComponents/HeaderBadge.vue'

// Split skills into two orbits
const outerOrbitSkills = computed(() => siteInfo.skills.slice(0, 6))
const innerOrbitSkills = computed(() => siteInfo.skills.slice(6, 12))

const stats = computed(() => [
  { value: `${siteInfo.projects.length}+`, label: 'Projects' },
  { value: siteInfo.dev.experience, label: 'Years Exp' },
  { value: '100%', label: 'Satisfaction' },
])


</script>

<style>
/* =============================
     HERO WRAPPER
  ============================= */
.hero-wrapper {
  @apply relative flex items-center justify-center min-h-screen overflow-hidden;
  background-color: var(--bg-primary-color);
}

/* =============================
     AMBIENT BACKGROUND EFFECTS
  ============================= */
.hero-ambient {
  @apply absolute inset-0 z-[1] overflow-hidden;
}

.ambient-orb {
  @apply absolute rounded-full;
  filter: blur(120px);
  opacity: 0.4;
}

.ambient-orb-1 {
  width: 600px;
  height: 600px;
  top: -15%;
  right: -5%;
  background: radial-gradient(circle, var(--glow-primary) 0%, transparent 70%);
  animation: ambientFloat 12s ease-in-out infinite;
}

.ambient-orb-2 {
  width: 400px;
  height: 400px;
  bottom: -10%;
  left: -5%;
  background: radial-gradient(
    circle,
    rgba(255, 90, 1, 0.08) 0%,
    transparent 70%
  );
  animation: ambientFloat 15s ease-in-out infinite reverse;
}

.ambient-orb-3 {
  width: 300px;
  height: 300px;
  top: 40%;
  left: 30%;
  background: radial-gradient(
    circle,
    rgba(255, 90, 1, 0.05) 0%,
    transparent 70%
  );
  animation: ambientFloat 18s ease-in-out infinite 3s;
}

/* =============================
     HERO CONTENT GRID
  ============================= */
.hero-content {
  @apply relative z-[3] grid items-center max-w-[1400px] w-full gap-16 px-8;
  grid-template-columns: 1fr auto;
}

/* =============================
     HERO TEXT (LEFT SIDE)
  ============================= */
.hero-text {
  @apply max-w-[620px];
  color: var(--hero-text-color);
}

.greeting {
  @apply flex items-center gap-2 mb-4 text-[1.1rem];
  color: var(--hero-text-muted);
}

.wave {
  animation: wave 2s ease-in-out infinite;
}

.title {
  @apply relative mb-4 font-black leading-[1.1];
  font-size: 4.5rem;
  color: var(--hero-text-color);
}

.name-highlight {
  @apply bg-clip-text text-transparent;
  color: var(--theme-primary-color);
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

.title-decoration {
  @apply absolute bottom-[-10px] left-0 w-[60px] h-[4px] rounded;
  background: var(--theme-gradient-primary);
}

@screen lg {
  .title {
    @apply text-[3.5rem];
  }
}

@screen sm {
  .title {
    @apply text-[2.5rem];
  }
}

/* =============================
     ROLES & TECH STACK
  ============================= */
.role-container {
  @apply mb-8;
}

.subtitle {
  @apply mb-4 text-[1.8rem] font-semibold;
  color: var(--hero-text-muted);
}

.tech-stack {
  @apply flex flex-wrap gap-3;
}

.tech-tag {
  @apply rounded-full px-4 py-2 text-[0.85rem] font-medium backdrop-blur-md transition-all duration-300 ease-in-out;
  background: var(--hero-badge-bg);
  border: 1px solid var(--hero-badge-border);
  color: var(--theme-primary-color);
}

.tech-tag:hover {
  @apply -translate-y-[2px];
  background: var(--orbit-icon-hover-bg);
  border-color: var(--orbit-icon-hover-border);
  box-shadow: 0 4px 15px var(--glow-primary);
}

/* =============================
     DESCRIPTION
  ============================= */
.hero-description {
  @apply mb-10 max-w-[500px] text-[1.15rem] leading-[1.7];
  color: var(--hero-text-muted);
}

/* =============================
     BUTTONS
  ============================= */
.hero-actions {
  @apply mb-10 flex flex-wrap gap-4;
}

/* .hero-actions button {
  @apply relative flex items-center gap-2 rounded-full border-0 px-8 py-4 text-[1rem] font-bold transition-all duration-300 ease-in-out cursor-pointer overflow-hidden;
} */

.btn-primary {
  @apply text-white;
  background: var(--theme-gradient-primary);
  box-shadow: 0 10px 30px var(--glow-strong);
}

.btn-shine {
  @apply absolute top-0 left-[-100%] w-full h-full transition-all duration-500;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
}

.btn-primary:hover {
  @apply -translate-y-[3px];
  box-shadow: 0 15px 40px var(--glow-strong);
}

.btn-primary:hover .btn-shine {
  left: 100%;
}

.btn-secondary {
  @apply border-2 bg-transparent backdrop-blur-lg;
  border-color: var(--glass-border);
  color: var(--hero-text-color);
}

.btn-secondary:hover {
  @apply -translate-y-[2px];
  border-color: var(--theme-primary-color);
  background: var(--glow-primary);
}

.btn-contact {
  @apply flex h-[60px] w-[60px] items-center justify-center rounded-full text-white;
  background: var(--theme-gradient-primary);
}

.btn-contact:hover {
  @apply -translate-y-[3px] rotate-[10deg];
}

/* =============================
     SOCIAL PROOF
  ============================= */
.social-proof {
  @apply flex gap-10;
}

.stat {
  @apply text-center;
}

.stat-number {
  @apply mb-1 block text-[2rem] font-black;
  color: var(--theme-primary-color);
}

.stat-label {
  @apply text-[0.85rem] uppercase tracking-wider font-medium;
  color: var(--hero-text-muted);
}

/* =============================
     USER IMAGE & ORBIT SYSTEM
  ============================= */
.user-image-container {
  @apply relative flex flex-col items-center;
}

.orbit-system {
  @apply relative flex items-center justify-center;
  width: 520px;
  height: 520px;
}

/* Orbit ring visuals */
.orbit-ring {
  @apply absolute rounded-full;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px dashed var(--orbit-ring-color);
}

.orbit-ring-outer {
  width: 500px;
  height: 500px;
}

.orbit-ring-inner {
  width: 360px;
  height: 360px;
}

/* Orbit containers */
.orbit {
  @apply absolute rounded-full;
  top: 50%;
  left: 50%;
  transform-origin: center center;
}

.orbit-outer {
  width: 500px;
  height: 500px;
  margin-top: -250px;
  margin-left: -250px;
  animation: orbitRotate 25s linear infinite;
}

.orbit-inner {
  width: 360px;
  height: 360px;
  margin-top: -180px;
  margin-left: -180px;
  animation: orbitRotateReverse 20s linear infinite;
}

/* Individual icon positioning */
.orbit-icon {
  @apply absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform: rotate(var(--angle)) translateX(var(--orbit-radius))
    rotate(calc(-1 * var(--angle)));
}

.orbit-outer .orbit-icon {
  --orbit-radius: 250px;
}

.orbit-inner .orbit-icon {
  --orbit-radius: 180px;
}

/* Counter-rotate icons to keep them upright */
.orbit-outer .orbit-icon .orbit-icon-inner {
  animation: orbitCounterRotate 25s linear infinite;
}

.orbit-inner .orbit-icon .orbit-icon-inner {
  animation: orbitCounterRotateReverse 20s linear infinite;
}

/* Icon styling */
.orbit-icon-inner {
  @apply flex items-center justify-center rounded-2xl shadow-lg backdrop-blur-md transition-all duration-300;
  width: 50px;
  height: 50px;
  margin-left: -25px;
  margin-top: -25px;
  background: var(--orbit-icon-bg);
  border: 1px solid var(--orbit-icon-border);
}

.orbit-icon-inner:hover {
  @apply scale-125;
  background: var(--orbit-icon-hover-bg);
  border-color: var(--orbit-icon-hover-border);
  box-shadow: 0 0 25px var(--glow-strong);
}

.orbit-icon-inner img {
  width: 28px;
  height: 28px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

/* =============================
     CENTER USER IMAGE — PREMIUM FRAME
  ============================= */
.user-image {
  @apply absolute z-[5] flex items-center justify-center;
  width: 260px;
  height: 260px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Soft ambient glow behind the image */
.image-glow {
  @apply absolute rounded-full z-[1];
  width: 260px;
  height: 260px;
  top: 50%;
  left: 50%;
  margin-top: -130px;
  margin-left: -130px;
  background: radial-gradient(
    circle,
    var(--glow-strong) 0%,
    var(--glow-primary) 40%,
    transparent 70%
  );
  animation: glowPulse 4s ease-in-out infinite;
}

/* Animated gradient border frame */
.image-frame {
  @apply absolute rounded-full z-[2];
  width: 234px;
  height: 234px;
  top: 50%;
  left: 50%;
  margin-top: -117px;
  margin-left: -117px;
  padding: 3px;
  background: conic-gradient(
    from 0deg,
    var(--theme-primary-color),
    var(--theme-primary-dark),
    var(--theme-primary-light),
    var(--theme-secondary-color),
    var(--theme-primary-color)
  );
  animation: rotate 6s linear infinite;
}

.image-frame-inner {
  @apply w-full h-full rounded-full;
  background: var(--bg-primary-color);
}

.user-image img {
  @apply absolute -translate-x-1/2 -translate-y-1/2 rounded-full object-cover z-[3] transition-transform duration-700 ease-in-out;
  width: 220px;
  height: 220px;
  top: 50%;
  left: 50%;
}

.user-image:hover img {
  @apply scale-105;
}

/* =============================
     STATUS INDICATOR
  ============================= */
.status-indicator {
  @apply mt-6 flex items-center gap-2 rounded-full px-4 py-2 text-[0.85rem] backdrop-blur-lg font-medium;
  background: var(--hero-badge-bg);
  border: 1px solid var(--hero-badge-border);
  color: var(--hero-text-color);
}

.status-dot {
  @apply w-2.5 h-2.5 rounded-full bg-emerald-500;
  animation: statusPulse 2s ease-in-out infinite;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.5);
}

/* =============================
     SCROLL INDICATOR
  ============================= */
.scroll-indicator {
  @apply absolute bottom-[0.5rem] left-1/2 flex flex-col items-center gap-2 text-[0.85rem] z-[4];
  transform: translateX(-50%);
  color: var(--hero-text-muted);
}

.scroll-line {
  @apply w-[1px] h-[40px];
  background: linear-gradient(
    to bottom,
    transparent,
    var(--theme-primary-color),
    transparent
  );
  animation: scrollPulse 2s ease-in-out infinite;
}

/* =============================
     ANIMATIONS
  ============================= */
@keyframes ambientFloat {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -20px) scale(1.05);
  }
  66% {
    transform: translate(-20px, 15px) scale(0.95);
  }
}

@keyframes glowPulse {
  0%,
  100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.08);
  }
}

@keyframes statusPulse {
  0%,
  100% {
    opacity: 1;
    box-shadow: 0 0 8px rgba(16, 185, 129, 0.5);
  }
  50% {
    opacity: 0.7;
    box-shadow: 0 0 14px rgba(16, 185, 129, 0.7);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.5;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes wave {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  75% {
    transform: rotate(-10deg);
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes scrollPulse {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

/* =============================
     ORBIT ANIMATIONS
  ============================= */
@keyframes orbitRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes orbitRotateReverse {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

@keyframes orbitCounterRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

@keyframes orbitCounterRotateReverse {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* =============================
     RESPONSIVE
  ============================= */
@media screen and (max-width: 1024px) {
  .hero-content {
    gap: 3rem !important;
    padding: 2rem 1.5rem !important;
  }

  .orbit-system {
    width: 420px;
    height: 420px;
  }

  .orbit-ring-outer {
    width: 400px;
    height: 400px;
  }

  .orbit-ring-inner {
    width: 290px;
    height: 290px;
  }

  .orbit-outer {
    width: 400px;
    height: 400px;
    margin-top: -200px;
    margin-left: -200px;
  }

  .orbit-outer .orbit-icon {
    --orbit-radius: 200px;
  }

  .orbit-inner {
    width: 290px;
    height: 290px;
    margin-top: -145px;
    margin-left: -145px;
  }

  .orbit-inner .orbit-icon {
    --orbit-radius: 145px;
  }

  .user-image img {
    width: 170px;
    height: 170px;
  }

  .image-frame {
    width: 184px;
    height: 184px;
  }

  .image-glow {
    width: 210px;
    height: 210px;
  }

  .orbit-icon-inner {
    width: 42px;
    height: 42px;
    margin-left: -21px;
    margin-top: -21px;
  }

  .orbit-icon-inner img {
    width: 22px;
    height: 22px;
  }
}

@media screen and (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr !important;
    gap: 3rem !important;
    padding: 2rem !important;
  }

  /* On mobile, image goes on top (reorder) */
  .user-image-container {
    order: -1;
  }

  .hero-text {
    text-align: center;
  }

  .tech-stack {
    justify-content: center;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .social-proof {
    justify-content: center;
  }

  .orbit-system {
    width: 340px;
    height: 340px;
  }

  .orbit-ring-outer {
    width: 320px;
    height: 320px;
  }

  .orbit-ring-inner {
    width: 230px;
    height: 230px;
  }

  .orbit-outer {
    width: 320px;
    height: 320px;
    margin-top: -160px;
    margin-left: -160px;
  }

  .orbit-outer .orbit-icon {
    --orbit-radius: 160px;
  }

  .orbit-inner {
    width: 230px;
    height: 230px;
    margin-top: -115px;
    margin-left: -115px;
  }

  .orbit-inner .orbit-icon {
    --orbit-radius: 115px;
  }

  .user-image img {
    width: 130px;
    height: 130px;
  }

  .image-frame {
    width: 144px;
    height: 144px;
  }

  .image-glow {
    width: 170px;
    height: 170px;
  }

  .orbit-icon-inner {
    width: 36px;
    height: 36px;
    margin-left: -18px;
    margin-top: -18px;
  }

  .orbit-icon-inner img {
    width: 18px;
    height: 18px;
  }
}
</style>
