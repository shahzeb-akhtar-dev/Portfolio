<template>
  <section class="hero-wrapper py-4 md:py-t pb-24" id="hero-section">
    <div class="max-w-7xl mx-auto">
      <div class="hero-content">
        <!-- Left: Enhanced User Image -->
        <div class="user-image-container">
          <!-- <div class="image-backdrop"></div> -->
          <div class="user-image">
            <img src="~/assets/images/user-image.png" alt="Shahzeb Akhtar" />
            <div class="image-border"></div>
          </div>
          <div class="status-indicator">
            <div class="status-dot"></div>
            <span>Available for hire</span>
          </div>
        </div>

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

          <p class="description">
            {{ siteInfo.hero.description }}
          </p>

          <div class="hero-actions">
            <CustomButton>
              <span class="btn-icon"> 🚀</span> <span>Let's Work Together</span>
            </CustomButton>

            <CustomButton variant="secondary" @click="navigateTo('#my-work')">
              View My Work
            </CustomButton>
          </div>

          <!-- Social proof -->
          <div class="social-proof">
            <div class="stat">
              <span class="stat-number">{{ siteInfo.projects.length }}+</span>
              <span class="stat-label">Projects</span>
            </div>
            <div class="stat">
              <span class="stat-number"> {{ siteInfo.dev.experience }} </span>
              <span class="stat-label">Years</span>
            </div>
            <div class="stat">
              <span class="stat-number">100%</span>
              <span class="stat-label">Satisfaction</span>
            </div>
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
import siteInfo from '@/utilies/siteInfo.json'
import CustomButton from '../BasicComponents/CustomButton.vue'
import SectionHeading from '../BasicComponents/SectionHeading.vue'
import HeaderBadge from '../BasicComponents/HeaderBadge.vue'
// Ready for future interactions in Nuxt 4
</script>

<style>
/* =============================
     HERO WRAPPER
  ============================= */
.hero-wrapper {
  @apply relative flex items-center justify-center min-h-screen overflow-hidden bg-center bg-cover bg-fixed;
  background-image: url('~/assets/images/bg-2.jpg');
}

.hero-wrapper::before {
  content: '';
  @apply absolute inset-0 z-[1];
  background: linear-gradient(var(--bg-overlay-dark), var(--bg-overlay-darker));
}

/* =============================
     FLOATING SHAPES
  ============================= */
.bg-elements {
  @apply absolute inset-0 z-[2];
}

.floating-shape {
  @apply absolute rounded-full backdrop-blur-sm;
  background: linear-gradient(
    45deg,
    rgba(255, 90, 1, 0.15),
    rgba(255, 75, 0, 0.15)
  );
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  @apply w-[200px] h-[200px] top-[10%] left-[10%];
  animation-delay: 0s;
}

.shape-2 {
  @apply w-[150px] h-[150px] top-[60%] right-[15%];
  animation-delay: 2s;
}

.shape-3 {
  @apply w-[100px] h-[100px] bottom-[20%] left-[20%];
  animation-delay: 4s;
}

.shape-4 {
  @apply w-[120px] h-[120px] top-[30%] right-[40%];
  animation-delay: 1s;
}

/* =============================
     HERO CONTENT GRID
  ============================= */
.hero-content {
  @apply relative z-[3] grid items-center md:grid-cols-2 max-w-[1400px] w-full gap-[6rem] px-12;
  grid-template-columns: auto 1fr;
}

/* =============================
     USER IMAGE
  ============================= */
.user-image-container {
  @apply relative flex flex-col items-center;
}

.image-backdrop {
  @apply absolute w-[420px] h-[420px] rounded-full opacity-30 blur-[20px];
  background: var(--theme-gradient-primary-color);
  animation: pulse 3s ease-in-out infinite;
}

.user-image {
  @apply relative z-[2];
}

.user-image img {
  @apply w-[380px] h-[380px] rounded-full object-cover transition-transform duration-700 ease-in-out grayscale-[20%] contrast-[110%];
}

.image-border {
  @apply absolute inset-[-8px] rounded-full z-[-1];
  background: linear-gradient(
    45deg,
    var(--theme-primary-color),
    rgb(255, 75, 0),
    var(--theme-primary-color)
  );
  animation: rotate 8s linear infinite;
}

.user-image:hover img {
  @apply scale-105  contrast-[120%];
}

/* =============================
     STATUS INDICATOR
  ============================= */
.status-indicator {
  @apply mt-6 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.9rem] text-white backdrop-blur-lg;
}

.status-dot {
  @apply w-2 h-2 rounded-full bg-emerald-500;
  animation: pulse 2s ease-in-out infinite;
}

/* =============================
     HERO TEXT
  ============================= */
.hero-text {
  @apply text-white max-w-[600px];
}

.greeting {
  @apply flex items-center gap-2 mb-4 text-[1.1rem] opacity-90;
}

.wave {
  animation: wave 2s ease-in-out infinite;
}

.title {
  @apply relative mb-4 font-black leading-[1.1] text-white;
  font-size: 4.5rem;
}

.name-highlight {
  @apply bg-clip-text text-transparent;
  color: var(--theme-primary-color);
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

.title-decoration {
  @apply absolute bottom-[-10px] left-0 w-[60px] h-[4px] rounded bg-[var(--theme-gradient-primary-color)];
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
  @apply mb-4 text-[1.8rem] font-semibold opacity-90;
}

.tech-stack {
  @apply flex flex-wrap gap-4;
}

@screen lg {
  .tech-stack {
    @apply justify-center;
  }
}

.tech-tag {
  @apply rounded-full border border-orange-500/30 bg-orange-500/20 px-4 py-2 text-[0.9rem] backdrop-blur-md transition-all duration-300 ease-in-out;
}

.tech-tag:hover {
  @apply bg-orange-500/30 -translate-y-[2px];
}

/* =============================
     DESCRIPTION
  ============================= */
.description {
  @apply mb-12 max-w-[500px] text-[1.2rem] leading-[1.6] opacity-80;
}

@screen lg {
  .description {
    @apply mx-auto mb-12;
  }
}

/* =============================
     BUTTONS
  ============================= */
.hero-actions {
  @apply mb-12 flex flex-wrap gap-4;
}

@screen lg {
  .hero-actions {
    @apply justify-center;
  }
}

.hero-actions button {
  @apply relative flex items-center gap-2 rounded-full border-0 px-8 py-4 text-[1rem] font-bold transition-all duration-300 ease-in-out cursor-pointer overflow-hidden;
}

.btn-primary {
  @apply text-white shadow-[0_10px_30px_rgba(255,90,1,0.3)];
  background: var(--theme-gradient-primary-color);
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
  @apply -translate-y-[3px] shadow-[0_15px_40px_rgba(255,90,1,0.4)];
}

.btn-primary:hover .btn-shine {
  left: 100%;
}

.btn-secondary {
  @apply border-2 border-white/30 bg-transparent text-white backdrop-blur-lg;
}

.btn-secondary:hover {
  @apply -translate-y-[2px] border-white/50 bg-white/10;
}

.btn-contact {
  @apply flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[var(--theme-gradient-primary-color)] text-white;
}

.btn-contact:hover {
  @apply -translate-y-[3px] rotate-[10deg];
}

/* =============================
     SOCIAL PROOF
  ============================= */
.social-proof {
  @apply flex gap-[3rem];
}

@screen lg {
  .social-proof {
    @apply justify-center;
  }
}

@screen sm {
  .social-proof {
    @apply gap-[2rem];
  }
}

.stat {
  @apply text-center;
}

.stat-number {
  @apply mb-1 block text-[2rem] font-black text-[var(--theme-primary-color)];
}

.stat-label {
  @apply text-[0.9rem] uppercase tracking-[0.5px] opacity-70;
}

/* =============================
     SCROLL INDICATOR
  ============================= */
.scroll-indicator {
  @apply absolute bottom-[0.5rem] left-1/2 flex flex-col items-center gap-2 text-[0.9rem] text-white/80 z-[4];
  transform: translateX(-50%);
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
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}
</style>
