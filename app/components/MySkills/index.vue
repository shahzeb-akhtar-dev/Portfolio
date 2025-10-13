<template>
  <div class="skills-section">
    <div
      class="skills-container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-4 md:px-8"
    >
      <!-- Left Side: Description -->
      <div class="description-wrapper">
        <div class="description-content">
          <div class="section-badge">
            <i class="fa-solid fa-code"></i>
            <span>Expertise</span>
          </div>
          <h2 class="section-title">
            My Programming
            <span class="title-highlight">Skills</span>
          </h2>
          <p class="section-description">
            I create user interfaces that are straightforward, user-friendly,
            and adaptable, streamlining tasks for users by minimizing both
            effort and time through the effective utilization of cutting-edge
            technologies.
          </p>
          <div class="stats-mini">
            <div class="stat-item">
              <div class="stat-number">12+</div>
              <div class="stat-label">Technologies</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-number">5+</div>
              <div class="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
        <!-- Decorative Elements -->
        <div class="decorative-elements">
          <div class="deco-circle deco-1"></div>
          <div class="deco-circle deco-2"></div>
          <div class="deco-grid"></div>
        </div>
      </div>

      <!-- Right Side: Skills Grid -->
      <div class="skills-wrapper">
        <div class="skills-grid">
          <div
            v-for="(item, index) in skills"
            :key="index"
            class="skill-card"
            :style="{ animationDelay: `${index * 0.05}s` }"
          >
            <div class="skill-card-inner">
              <div class="skill-icon-wrapper">
                <img :src="item.icon" :alt="item.name" class="skill-icon" />
                <div class="skill-glow"></div>
              </div>
              <div class="skill-tooltip">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// ✅ Static imports — Vite/Nuxt handles optimization and asset hashing automatically
import bootstrapIcon from "~/assets/images/skill-icon/bootstrap.png";
import clickupIcon from "~/assets/images/skill-icon/clickup.png";
import commandIcon from "~/assets/images/skill-icon/command.png";
import css3Icon from "~/assets/images/skill-icon/css3.png";
import gitIcon from "~/assets/images/skill-icon/git.png";
import html5Icon from "~/assets/images/skill-icon/html5.png";
import jsIcon from "~/assets/images/skill-icon/javascript.png";
import jqueryIcon from "~/assets/images/skill-icon/jquery.png";
import npmIcon from "~/assets/images/skill-icon/npm.png";
import sassIcon from "~/assets/images/skill-icon/sass.png";
import vscodeIcon from "~/assets/images/skill-icon/vs-code.png";
import vueIcon from "~/assets/images/skill-icon/vue.png";

// ✅ Typed skill array (use interface for clarity)

const skills = [
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "Click Up", icon: clickupIcon },
  { name: "Command Line", icon: commandIcon },
  { name: "CSS 3", icon: css3Icon },
  { name: "Git Hub", icon: gitIcon },
  { name: "HTML 5", icon: html5Icon },
  { name: "JavaScript", icon: jsIcon },
  { name: "jQuery", icon: jqueryIcon },
  { name: "NPM", icon: npmIcon },
  { name: "SASS", icon: sassIcon },
  { name: "VS Code", icon: vscodeIcon },
  { name: "Vue.js", icon: vueIcon },
];
</script>

<style scoped>
/* CSS Variables */
:root {
  --logo-font-family: "Saira Stencil One", sans-serif;
  --bg-primary-color: #efefef;
  --text-secondary-color: #a19797;
  --text-black-color: #000000;
  --text-white-color: #ffff;
  --box-shadow-color: #a19797;
  --theme-primary-color: rgb(255 90 1);
  --theme-gradient-primary-color: linear-gradient(
    70deg,
    rgb(255, 90, 1) 53%,
    rgb(255 75 0) 61%
  );
  --primary-transparent-color: rgb(255 90 1 / 93%);
  --layout-header-height: 6.3rem;
  --hero-section-height: calc(100vh - var(--layout-header-height));
}

/* Main Section */
.skills-section {
  position: relative;
  min-height: 100vh;
  padding: 8rem 0;
  background: linear-gradient(135deg, #fafafa 0%, #ffffff 50%, #fff8f5 100%);
  overflow: hidden;
}

.skills-container {
  position: relative;
}

/* Description Section */
.description-wrapper {
  animation: slide-in-left 0.8s ease-out;
}

.description-content {
  max-width: 550px;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(
    135deg,
    rgba(255, 90, 1, 0.1) 0%,
    rgba(255, 90, 1, 0.05) 100%
  );
  border: 2px solid rgba(255, 90, 1, 0.2);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--theme-primary-color);
  margin-bottom: 2rem;
  animation: fade-in-down 0.8s ease-out;
}

.section-badge i {
  font-size: 1rem;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 900;
  line-height: 1.2;
  color: var(--text-black-color);
  margin-bottom: 2rem;
  animation: fade-in-up 0.8s ease-out 0.2s backwards;
}

.title-highlight {
  display: block;
  background: var(--theme-gradient-primary-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-secondary-color);
  margin-bottom: 3rem;
  animation: fade-in-up 0.8s ease-out 0.4s backwards;
}

/* Mini Stats */
.stats-mini {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  animation: fade-in-up 0.8s ease-out 0.6s backwards;
}

.stat-item {
  flex: 1;
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--theme-primary-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary-color);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-divider {
  width: 2px;
  height: 50px;
  background: linear-gradient(
    180deg,
    transparent 0%,
    var(--theme-primary-color) 50%,
    transparent 100%
  );
}

/* Skills Grid */
.skills-wrapper {
  animation: slide-in-right 0.8s ease-out 0.2s backwards;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.skill-card {
  animation: scale-in 0.5s ease-out backwards;
}

.skill-card-inner {
  position: relative;
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
}

.skill-card-inner:hover {
  transform: translateY(-12px) scale(1.05);
  box-shadow: 0 20px 50px rgba(255, 90, 1, 0.2);
}

.skill-card-inner:hover .skill-glow {
  opacity: 1;
  transform: scale(1.5);
}

.skill-card-inner:hover .skill-tooltip {
  opacity: 1;
  transform: translateY(-10px);
  pointer-events: auto;
}

.skill-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1;
}

.skill-icon {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.skill-card-inner:hover .skill-icon {
  transform: scale(1.1);
}

.skill-glow {
  position: absolute;
  inset: -20%;
  background: radial-gradient(
    circle,
    rgba(255, 90, 1, 0.3) 0%,
    transparent 70%
  );
  border-radius: 50%;
  opacity: 0;
  transition: all 0.4s ease;
  filter: blur(20px);
}

/* Tooltip */
.skill-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(0);
  background: var(--theme-gradient-primary-color);
  color: var(--text-white-color);
  padding: 0.75rem 1.5rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 700;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 10px 30px rgba(255, 90, 1, 0.4);
  z-index: 100;
}

.skill-tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 8px solid transparent;
  border-top-color: rgb(255, 75, 0);
  z-index: 110;
}

/* Decorative Elements */
.decorative-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 90, 1, 0.08) 0%,
    transparent 70%
  );
  filter: blur(60px);
}

.deco-1 {
  width: 500px;
  height: 500px;
  top: -100px;
  right: -100px;
  animation: float-slow 8s ease-in-out infinite;
}

.deco-2 {
  width: 400px;
  height: 400px;
  bottom: -150px;
  left: -100px;
  animation: float-slow 10s ease-in-out infinite reverse;
}

.deco-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 90, 1, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 90, 1, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.5;
}

/* Animations */
@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes float-slow {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(30px, -30px);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .skills-container {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .description-content {
    max-width: 100%;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .skills-section {
    padding: 5rem 0;
  }

  .skills-container {
    padding: 0 1.5rem;
  }

  .section-badge {
    font-size: 0.8rem;
    padding: 0.625rem 1.25rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .stats-mini {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .stat-divider {
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--theme-primary-color) 50%,
      transparent 100%
    );
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }

  .skill-card-inner {
    padding: 1.5rem;
  }

  .deco-1,
  .deco-2 {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .stat-number {
    font-size: 2rem;
  }

  .skill-card-inner {
    padding: 1.25rem;
  }
}
</style>
