<template>
  <section class="hero-section" id="hero-section">
    <div class="hero-container">
      <div class="hero-grid">
        <!-- Left Content -->
        <div class="hero-content-left">
          <HeaderBadge heading="Senior Vue.js Developer" />

          <h1 class="hero-title">
            <span class="title-greeting">Hi, I'm</span>
            <span class="title-name">Shahzeb Akhtar</span>
          </h1>

          <div class="title-underline"></div>

          <p class="hero-description">
            I build modern, responsive and user-focused web applications with clean code and
            great user experience.
          </p>

          <div class="hero-actions">
            <CustomButton @click="scrollTo('my-work')">
              View My Work
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </CustomButton>

            <CustomButton variant="secondary" @click="downloadCV">
              Download CV
              <i class="fa-solid fa-download"></i>
            </CustomButton>
          </div>

          <div class="hero-social">
            <span class="social-label">Let's connect</span>
            <div class="social-links">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link"
                :aria-label="link.name"
              >
                <i :class="link.icon"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Content -->
        <div class="hero-content-right">
          <!-- Decorative dots -->
          <div class="decoration decoration-dots-top">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <pattern id="dots-top" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="currentColor" opacity="0.25"/>
              </pattern>
              <rect width="80" height="80" fill="url(#dots-top)"/>
            </svg>
          </div>

          <div class="decoration decoration-dots-bottom">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <pattern id="dots-bottom" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="currentColor" opacity="0.25"/>
              </pattern>
              <rect width="80" height="80" fill="url(#dots-bottom)"/>
            </svg>
          </div>

          <!-- Main image with blob background -->
          <div class="hero-image-wrapper">
            <div class="hero-image-bg"></div>
            <div class="hero-image-shape">
              <img
                src="~/assets/images/user-image.png"
                alt="Shahzeb Akhtar"
                class="hero-image"
              />
            </div>

            <!-- Specialized card -->
            <div class="specialized-card">
              <div class="specialized-icon">
                <svg viewBox="0 0 128 128" width="32" height="32">
                  <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110H78.8z"/>
                  <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"/>
                </svg>
              </div>
              <div class="specialized-text">
                <span class="specialized-label">Specialized In</span>
                <span class="specialized-value">
                  <em>Vue.js</em> Development
                </span>
              </div>
            </div>
          </div>

          <!-- Stats cards -->
          <div class="stats-cards">
            <div v-for="stat in stats" :key="stat.label" class="stat-card">
              <div class="stat-icon" v-html="stat.icon"></div>
              <div class="stat-info">
                <span class="stat-number">{{ stat.value }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Technologies strip -->
    <div class="hero-tech-strip">
      <TechStrip />
    </div>
  </section>
</template>

<script setup lang="ts">
import { scrollTo } from '@/composables/useScroll'
import siteInfo from '@/utilies/siteInfo.json'
import CustomButton from '../BasicComponents/CustomButton.vue'
import HeaderBadge from '../BasicComponents/HeaderBadge.vue'
import TechStrip from './TechStrip.vue'

const stats = [
  {
    value: `${siteInfo.dev.experience}`,
    label: 'Years\nExperience',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`
  },
  {
    value: '15+',
    label: 'Projects\nCompleted',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
  },
  {
    value: '20+',
    label: 'Happy\nClients',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
  }
]

const socialLinks = [
  {
    name: 'GitHub',
    icon: 'fa-brands fa-github',
    url: siteInfo.socialLinks.github
  },
  {
    name: 'LinkedIn',
    icon: 'fa-brands fa-linkedin-in',
    url: siteInfo.socialLinks.linkedin
  },
  {
    name: 'Email',
    icon: 'fa-regular fa-envelope',
    url: `mailto:${siteInfo.contact.email}`
  }
]

const downloadCV = () => {
  // Placeholder for CV download - can be replaced with actual CV path
  alert('CV download coming soon!')
}
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 3rem;
  background: var(--bg-primary-color);
  overflow: hidden;
}

.hero-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3rem;
  min-height: calc(100vh - 12rem);
}

/* Left Content */
.hero-content-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  z-index: 2;
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0;
  line-height: 1.1;
}

.title-greeting {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: var(--text-primary-color);
  letter-spacing: -0.03em;
}

.title-name {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #14b8a6 0%, #3b82f6 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-underline {
  width: 70px;
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(135deg, #14b8a6 0%, #3b82f6 50%, #8b5cf6 100%);
  margin-top: -0.25rem;
  margin-bottom: 0.5rem;
}

.hero-description {
  max-width: 460px;
  font-size: 1.1rem;
  line-height: 1.75;
  color: var(--text-muted-color);
  margin: 0;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
}

.hero-actions :deep(.btn-base) {
  gap: 0.6rem;
}

.hero-actions :deep(.btn-base i) {
  font-size: 0.85rem;
}

.hero-social {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
}

.social-label {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary-color);
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  background: var(--bg-secondary-color);
  border: 1px solid var(--border-color);
  color: var(--text-secondary-color);
  font-size: 1.1rem;
  transition: all 0.25s ease;
}

.social-link:hover {
  border-color: var(--theme-primary-color);
  color: var(--theme-primary-color);
  background: var(--glow-primary);
  transform: translateY(-2px);
}

/* Right Content */
.hero-content-right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 560px;
  z-index: 2;
}

.hero-image-wrapper {
  position: relative;
  width: 100%;
  max-width: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image-bg {
  position: absolute;
  width: 90%;
  aspect-ratio: 1;
  border-radius: 60% 40% 55% 45% / 55% 45% 60% 40%;
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.12) 0%, rgba(59, 130, 246, 0.12) 100%);
  box-shadow: inset 0 0 80px rgba(59, 130, 246, 0.08);
}

.hero-image-shape {
  position: relative;
  width: 85%;
  aspect-ratio: 1;
  border-radius: 55% 45% 50% 50% / 50% 55% 45% 50%;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%);
  border: 1px solid rgba(59, 130, 246, 0.1);
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transform: scale(1.05);
}

/* Specialized card */
.specialized-card {
  position: absolute;
  bottom: 1.5rem;
  left: -1rem;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.9rem 1.1rem;
  background: var(--bg-secondary-color);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  box-shadow: 0 12px 40px -12px rgba(15, 23, 42, 0.12);
  z-index: 10;
}

.specialized-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  background: rgba(20, 184, 166, 0.1);
}

.specialized-text {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.specialized-label {
  font-size: 0.8rem;
  color: var(--text-muted-color);
}

.specialized-value {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary-color);
}

.specialized-value em {
  font-style: normal;
  color: #14b8a6;
}

/* Stats cards */
.stats-cards {
  position: absolute;
  right: -0.5rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 10;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.85rem 1rem;
  min-width: 170px;
  background: var(--bg-secondary-color);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  box-shadow: 0 12px 40px -12px rgba(15, 23, 42, 0.12);
  transition: transform 0.25s ease;
}

.stat-card:hover {
  transform: translateX(-4px);
}

.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.65rem;
  background: rgba(59, 130, 246, 0.08);
  color: var(--theme-primary-color);
  flex-shrink: 0;
}

.stat-info {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.stat-number {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-primary-color);
  line-height: 1;
}

.stat-label {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--text-muted-color);
  line-height: 1.3;
  white-space: pre-line;
}

/* Decorations */
.decoration {
  position: absolute;
  color: var(--text-muted-color);
  z-index: 1;
  pointer-events: none;
}

.decoration-dots-top {
  top: 0;
  right: 0;
}

.decoration-dots-bottom {
  bottom: 4rem;
  left: 0;
}

/* Tech strip */
.hero-tech-strip {
  margin-top: 4rem;
  position: relative;
  z-index: 2;
}

/* Responsive */
@media screen and (max-width: 1024px) {
  .hero-grid {
    gap: 2rem;
  }

  .hero-content-right {
    min-height: 480px;
  }

  .stats-cards {
    right: -1rem;
  }

  .stat-card {
    min-width: 150px;
    padding: 0.75rem 0.85rem;
  }
}

@media screen and (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2.5rem;
    min-height: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .hero-content-left {
    align-items: center;
  }

  .hero-description {
    max-width: 500px;
  }

  .hero-social {
    align-items: center;
  }

  .hero-content-right {
    min-height: 420px;
  }

  .specialized-card {
    left: 0;
    bottom: 0.5rem;
  }

  .stats-cards {
    right: -0.5rem;
  }

  .decoration-dots-top {
    right: -1rem;
  }

  .decoration-dots-bottom {
    left: -1rem;
  }
}

@media screen and (max-width: 640px) {
  .hero-section {
    padding-top: 1.5rem;
    padding-bottom: 2rem;
  }

  .hero-container {
    padding: 0 1rem;
  }

  .hero-content-right {
    min-height: 360px;
  }

  .specialized-card {
    padding: 0.7rem 0.9rem;
    left: 50%;
    transform: translateX(-50%);
    bottom: -0.5rem;
  }

  .stats-cards {
    position: static;
    transform: none;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 1.5rem;
    gap: 0.75rem;
  }

  .stat-card {
    min-width: auto;
    flex: 1 1 140px;
    max-width: 160px;
  }

  .stat-card:hover {
    transform: translateY(-3px);
  }

  .decoration {
    display: none;
  }

  .hero-tech-strip {
    margin-top: 2.5rem;
  }
}

@media screen and (max-width: 480px) {
  .hero-actions {
    width: 100%;
    justify-content: center;
  }

  .hero-actions :deep(.btn-base) {
    flex: 1 1 100%;
    max-width: 220px;
  }
}
</style>
