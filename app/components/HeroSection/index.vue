<template>
  <section class="hero-wrapper py-4 md:py-t pb-24" id="hero-section">
    <div class="max-w-7xl mx-auto">
      <div class="hero-content">
        <!-- Left: Enhanced User Image -->
        <div class="user-image-container">
          <div class="image-backdrop"></div>
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
          <div class="greeting">
            <span class="wave">👋</span>
            <span>Hello there!</span>
          </div>

          <h1 class="title">
            I'm <span class="name-highlight">Shahzeb Akhtar</span>
            <div class="title-decoration"></div>
          </h1>

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
            <button class="btn-primary">
              <span class="btn-icon">🚀</span>
              <span>Let's Work Together</span>
              <div class="btn-shine"></div>
            </button>
            <button class="btn-secondary">
              <span class="btn-icon">📂</span>
              <span>View My Work</span>
            </button>
            <button class="btn-contact">
              <span class="btn-icon">💬</span>
            </button>
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
// Ready for future interactions in Nuxt 4
</script>

<style scoped>
.hero-wrapper {
  min-height: 100vh;
  background: url('~/assets/images/bg-2.jpg') no-repeat center center fixed;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-wrapper::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(15, 15, 35, 0.7));
  z-index: 1;
}

/* Floating shapes */
.bg-elements {
  position: absolute;
  inset: 0;
  z-index: 2;
}

.bg-elements .floating-shape {
  position: absolute;
  background: linear-gradient(
    45deg,
    rgba(255, 90, 1, 0.15),
    rgba(255, 75, 0, 0.15)
  );
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
  backdrop-filter: blur(2px);
}

.bg-elements .shape-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}
.bg-elements .shape-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}
.bg-elements .shape-3 {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}
.bg-elements .shape-4 {
  width: 120px;
  height: 120px;
  top: 30%;
  right: 40%;
  animation-delay: 1s;
}

/* Hero content */
.hero-content {
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 6rem;
  max-width: 1400px;
  padding: 0 3rem;
  width: 100%;
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 4rem;
  }
}

/* User image */
.user-image-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-image-container .image-backdrop {
  position: absolute;
  width: 420px;
  height: 420px;
  background: var(--theme-gradient-primary-color);
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0.3;
  animation: pulse 3s ease-in-out infinite;
}

.user-image {
  position: relative;
  z-index: 2;
}

.user-image img {
  width: 380px;
  height: 380px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.6s ease;
  filter: grayscale(20%) contrast(110%);
}

.user-image .image-border {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    var(--theme-primary-color),
    rgb(255, 75, 0),
    var(--theme-primary-color)
  );
  z-index: -1;
  animation: rotate 8s linear infinite;
}

.user-image:hover img {
  transform: scale(1.05);
  filter: grayscale(0%) contrast(120%);
}

/* Status indicator */
.status-indicator {
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--text-white-color);
  font-size: 0.9rem;
}

.status-indicator .status-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

/* Text side */
.hero-text {
  color: var(--text-white-color);
  max-width: 600px;
}

.greeting {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  opacity: 0.9;
}
.greeting .wave {
  animation: wave 2s ease-in-out infinite;
}

.title {
  font-size: 4.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.1;
  position: relative;
  color: var(--text-white-color);
}
.title .name-highlight {
  background: var(--theme-gradient-primary-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}
.title .title-decoration {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background: var(--theme-gradient-primary-color);
  border-radius: 2px;
}
@media (max-width: 1024px) {
  .title {
    font-size: 3.5rem;
  }
}
@media (max-width: 600px) {
  .title {
    font-size: 2.5rem;
  }
}

/* Roles */
.role-container {
  margin-bottom: 2rem;
}
.role-container .subtitle {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  opacity: 0.9;
  font-weight: 600;
}
.tech-stack {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
@media (max-width: 1024px) {
  .tech-stack {
    justify-content: center;
  }
}
.tech-tag {
  background: rgba(255, 90, 1, 0.2);
  border: 1px solid rgba(255, 90, 1, 0.3);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}
.tech-tag:hover {
  background: rgba(255, 90, 1, 0.3);
  transform: translateY(-2px);
}

/* Description */
.description {
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.8;
  margin-bottom: 3rem;
  max-width: 500px;
}
@media (max-width: 1024px) {
  .description {
    margin: 0 auto 3rem;
  }
}

/* Buttons */
.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}
@media (max-width: 1024px) {
  .hero-actions {
    justify-content: center;
  }
}

.hero-actions button {
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: var(--theme-gradient-primary-color);
  color: var(--text-white-color);
  box-shadow: 0 10px 30px rgba(255, 90, 1, 0.3);
}
.btn-primary .btn-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}
.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(255, 90, 1, 0.4);
}
.btn-primary:hover .btn-shine {
  left: 100%;
}

.btn-secondary {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: var(--text-white-color);
  backdrop-filter: blur(10px);
}
.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.btn-contact {
  width: 60px;
  height: 60px;
  padding: 0;
  border-radius: 50%;
  background: var(--theme-gradient-primary-color);
  color: var(--text-white-color);
  justify-content: center;
}
.btn-contact:hover {
  transform: translateY(-3px) rotate(10deg);
}

/* Social proof */
.social-proof {
  display: flex;
  gap: 3rem;
}
@media (max-width: 1024px) {
  .social-proof {
    justify-content: center;
  }
}
@media (max-width: 600px) {
  .social-proof {
    gap: 2rem;
  }
}
.stat {
  text-align: center;
}
.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 900;
  color: var(--theme-primary-color);
  margin-bottom: 0.25rem;
}
.stat-label {
  font-size: 0.9rem;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  z-index: 4;
}
.scroll-indicator .scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--theme-primary-color),
    transparent
  );
  animation: scrollPulse 2s ease-in-out infinite;
}

/* Animations */
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
