<template>
  <div class="skills-section-new">
    <!-- Animated Background with Particles -->
    <div class="particle-bg">
      <div
        class="particle"
        v-for="n in 20"
        :key="n"
        :style="{ '--i': n }"
      ></div>
    </div>

    <div class="skills-content-wrapper">
      <!-- Left: Description with Glassmorphism -->
      <div class="info-panel">
        <div class="glass-card">
          <HeaderBadge
            icon="fa-solid fa-microchip"
            heading="TECHNICAL SKILLS"
          />

          <!-- Big Bold Title -->
          <h1 class="mega-title">
            <span class="line-1">Technologies</span>
            <span class="line-2">I Master</span>
          </h1>

          <!-- Description with Icon -->
          <div class="desc-block">
            <div class="desc-icon">
              <i class="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <p class="desc-text">
              Crafting <span class="highlight">pixel-perfect</span>,
              <span class="highlight">lightning-fast</span>, and
              <span class="highlight">user-centric</span> web experiences using
              modern tech stack and best practices.
            </p>
          </div>

          <!-- Achievement Boxes -->
          <div class="achievement-grid">
            <div class="achievement-box box-1">
              <div class="achievement-number">12+</div>
              <div class="achievement-label">Tech Stack</div>
              <div class="box-gradient"></div>
            </div>
            <div class="achievement-box box-2">
              <div class="achievement-number">5+</div>
              <div class="achievement-label">Years Exp</div>
              <div class="box-gradient"></div>
            </div>
            <div class="achievement-box box-3">
              <div class="achievement-number">50+</div>
              <div class="achievement-label">Projects</div>
              <div class="box-gradient"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Skills with Hexagon Layout -->
      <div class="skills-panel">
        <div class="hexagon-grid">
          <div
            v-for="(skill, index) in skills"
            :key="index"
            class="hex-wrapper"
            :style="{ '--index': index }"
          >
            <div class="hexagon">
              <div class="hex-inner">
                <div class="hex-content">
                  <img :src="skill.icon" :alt="skill.name" class="hex-icon" />
                  <div class="hex-shine"></div>
                </div>
              </div>
              <div class="hex-tooltip">{{ skill.name }}</div>
              <div class="hex-particles">
                <span class="particle-dot" v-for="p in 6" :key="p"></span>
              </div>
            </div>
          </div>
        </div>
        <!-- Circular Progress Indicator -->
        <div class="circular-progress relative mx-auto mt-10">
          <svg class="progress-ring" width="200" height="200">
            <circle
              class="progress-ring-circle"
              cx="100"
              cy="100"
              r="90"
            ></circle>
            <circle
              class="progress-ring-fill"
              cx="100"
              cy="100"
              r="90"
            ></circle>
          </svg>
          <div class="progress-text">
            <div class="progress-number">100%</div>
            <div class="progress-label">Mastery</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bootstrapIcon from '~/assets/images/skill-icon/bootstrap.png'
import clickupIcon from '~/assets/images/skill-icon/clickup.png'
import commandIcon from '~/assets/images/skill-icon/command.png'
import css3Icon from '~/assets/images/skill-icon/css3.png'
import gitIcon from '~/assets/images/skill-icon/git.png'
import html5Icon from '~/assets/images/skill-icon/html5.png'
import jsIcon from '~/assets/images/skill-icon/javascript.png'
import jqueryIcon from '~/assets/images/skill-icon/jquery.png'
import npmIcon from '~/assets/images/skill-icon/npm.png'
import sassIcon from '~/assets/images/skill-icon/sass.png'
import vscodeIcon from '~/assets/images/skill-icon/vs-code.png'
import vueIcon from '~/assets/images/skill-icon/vue.png'
import HeaderBadge from '../BasicComponents/HeaderBadge.vue'

const skills = [
  { name: 'Bootstrap', icon: bootstrapIcon },
  { name: 'Click Up', icon: clickupIcon },
  { name: 'Command', icon: commandIcon },
  { name: 'CSS 3', icon: css3Icon },
  { name: 'Git Hub', icon: gitIcon },
  { name: 'HTML 5', icon: html5Icon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'jQuery', icon: jqueryIcon },
  { name: 'NPM', icon: npmIcon },
  { name: 'SASS', icon: sassIcon },
  { name: 'VS Code', icon: vscodeIcon },
  { name: 'Vue.js', icon: vueIcon },
]
</script>

<style scoped>
/* Variables */
:root {
  --theme-primary-color: rgb(255 90 1);
  --theme-gradient-primary-color: linear-gradient(
    70deg,
    rgb(255, 90, 1) 53%,
    rgb(255 75 0) 61%
  );
  --text-black-color: #000000;
  --text-secondary-color: #a19797;
  --text-white-color: #ffff;
}

/* Main Section - Dramatic Background */
.skills-section-new {
  position: relative;
  min-height: 100vh;
  padding: 8rem 0;
  background: radial-gradient(
      ellipse at top,
      rgba(255, 90, 1, 0.08) 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at bottom right,
      rgba(255, 140, 50, 0.08) 0%,
      transparent 50%
    ),
    linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a1510 100%);
  overflow: hidden;
}

/* Animated Particles */
.particle-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--theme-primary-color);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--theme-primary-color);
  animation: float-particle 15s ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.7s);
  left: calc(var(--i) * 5%);
  top: 100%;
  opacity: 0;
}

@keyframes float-particle {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) translateX(calc(var(--i) * 20px - 100px));
    opacity: 0;
  }
}

/* Content Wrapper */
.skills-content-wrapper {
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: center;
}

/* Info Panel - Glassmorphism */
.info-panel {
  animation: slide-left 1s ease-out;
}

.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 90, 1, 0.2);
  border-radius: 2rem;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

/* Animated Badge */
.tech-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 90, 1, 0.1);
  border: 2px solid var(--theme-primary-color);
  border-radius: 50px;
  margin-bottom: 2rem;
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 2px;
  color: var(--theme-primary-color);
  animation: badge-glow 2s ease-in-out infinite;
}

.badge-dot {
  width: 10px;
  height: 10px;
  background: var(--theme-primary-color);
  border-radius: 50%;
  box-shadow: 0 0 20px var(--theme-primary-color);
  animation: pulse-dot 1.5s ease-in-out infinite;
}

.pulse-ring {
  position: absolute;
  left: 1rem;
  width: 10px;
  height: 10px;
  border: 2px solid var(--theme-primary-color);
  border-radius: 50%;
  animation: pulse-expand 1.5s ease-out infinite;
}

@keyframes badge-glow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(255, 90, 1, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(255, 90, 1, 0.6);
  }
}

@keyframes pulse-dot {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
}

@keyframes pulse-expand {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}

/* Mega Title */
.mega-title {
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 900;
  line-height: 1;
  margin-bottom: 2rem;
}

.line-1 {
  display: block;
  color: #ffffff;
  text-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
  animation: title-glow 3s ease-in-out infinite;
}

.line-2 {
  display: block;
  background: var(--theme-gradient-primary-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% auto;
  animation: gradient-shift 3s linear infinite;
  text-shadow: 0 0 60px rgba(255, 90, 1, 0.5);
}

@keyframes title-glow {
  0%,
  100% {
    text-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
  }
  50% {
    text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);
  }
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

/* Description Block */
.desc-block {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: rgba(255, 90, 1, 0.05);
  border-left: 4px solid var(--theme-primary-color);
  border-radius: 1rem;
}

.desc-icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--theme-gradient-primary-color);
  border-radius: 12px;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 10px 30px rgba(255, 90, 1, 0.4);
  animation: icon-float 3s ease-in-out infinite;
}

@keyframes icon-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.desc-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #cccccc;
  margin: 0;
}

.highlight {
  color: var(--theme-primary-color);
  font-weight: 700;
  text-shadow: 0 0 20px rgba(255, 90, 1, 0.5);
}

/* Achievement Grid */
.achievement-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.achievement-box {
  position: relative;
  padding: 2rem 1rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(255, 90, 1, 0.2);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.4s ease;
  cursor: pointer;
}

.achievement-box:hover {
  transform: translateY(-10px) scale(1.05);
  border-color: var(--theme-primary-color);
  box-shadow: 0 20px 60px rgba(255, 90, 1, 0.4);
}

.achievement-number {
  font-size: 2.5rem;
  font-weight: 900;
  background: var(--theme-gradient-primary-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.achievement-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.box-gradient {
  position: absolute;
  inset: 0;
  background: var(--theme-gradient-primary-color);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.achievement-box:hover .box-gradient {
  opacity: 0.1;
}

/* Skills Panel - Hexagon Grid */
.skills-panel {
  position: relative;
  animation: slide-right 1s ease-out 0.3s backwards;
}

.hexagon-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem;
}

.hex-wrapper {
  animation: pop-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) backwards;
  animation-delay: calc(var(--index) * 0.05s);
}

.hexagon {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  cursor: pointer;
}

.hex-inner {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  border: 3px solid rgba(255, 90, 1, 0.3);
  border-radius: 20% 20% 20% 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.hexagon:hover .hex-inner {
  transform: rotate(180deg) scale(1.1);
  border-color: var(--theme-primary-color);
  background: linear-gradient(
    135deg,
    rgba(255, 90, 1, 0.2) 0%,
    rgba(255, 90, 1, 0.1) 100%
  );
  box-shadow: 0 20px 60px rgba(255, 90, 1, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.hex-content {
  position: relative;
  width: 70%;
  height: 70%;
}

.hex-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 20px rgba(255, 90, 1, 0.5));
  transition: all 0.5s ease;
  transform: rotate(0deg);
}

.hexagon:hover .hex-icon {
  transform: rotate(-180deg) scale(1.2);
  filter: drop-shadow(0 0 40px rgba(255, 90, 1, 0.8));
}

.hex-shine {
  position: absolute;
  inset: -50%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    rgba(255, 90, 1, 0.4) 90deg,
    transparent 180deg
  );
  animation: hex-rotate 3s linear infinite;
  opacity: 0;
}

.hexagon:hover .hex-shine {
  opacity: 1;
}

@keyframes hex-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Tooltip */
.hex-tooltip {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%) scale(0);
  background: var(--theme-gradient-primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 10px 30px rgba(255, 90, 1, 0.5);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  pointer-events: none;
  z-index: 100;
}

.hexagon:hover .hex-tooltip {
  transform: translateX(-50%) scale(1);
}

/* Hex Particles */
.hex-particles {
  position: absolute;
  inset: -20%;
  pointer-events: none;
}

.particle-dot {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--theme-primary-color);
  border-radius: 50%;
  opacity: 0;
  transition: all 0.5s ease;
}

.particle-dot:nth-child(1) {
  top: 0%;
  left: 50%;
}
.particle-dot:nth-child(2) {
  top: 25%;
  right: 0%;
}
.particle-dot:nth-child(3) {
  bottom: 25%;
  right: 0%;
}
.particle-dot:nth-child(4) {
  bottom: 0%;
  left: 50%;
}
.particle-dot:nth-child(5) {
  bottom: 25%;
  left: 0%;
}
.particle-dot:nth-child(6) {
  top: 25%;
  left: 0%;
}

.hexagon:hover .particle-dot {
  opacity: 1;
  animation: particle-burst 0.6s ease-out;
}

@keyframes particle-burst {
  0% {
    transform: scale(1) translate(0, 0);
  }
  100% {
    transform: scale(0) translate(var(--x, 0), var(--y, 0));
  }
}

/* Circular Progress */
.circular-progress {
  width: 200px;
  height: 200px;
}

.progress-ring {
  transform: rotate(-90deg);
}

.progress-ring-circle {
  fill: none;
  stroke: rgba(255, 90, 1, 0.1);
  stroke-width: 8;
}

.progress-ring-fill {
  fill: none;
  stroke: var(--theme-primary-color);
  stroke-width: 8;
  stroke-dasharray: 565;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: progress-fill 3s ease-out forwards;
  filter: drop-shadow(0 0 20px var(--theme-primary-color));
}

@keyframes progress-fill {
  from {
    stroke-dashoffset: 565;
  }
  to {
    stroke-dashoffset: 0;
  }
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
}

.progress-number {
  font-size: 2.5rem;
  font-weight: 900;
  background: var(--theme-gradient-primary-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.progress-label {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--theme-primary-color);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Slide Animations */
@keyframes slide-left {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-right {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pop-in {
  from {
    opacity: 0;
    transform: scale(0) rotate(-180deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

/* Responsive */
@media (max-width: 1200px) {
  .hexagon-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .skills-content-wrapper {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .circular-progress {
  }
}

@media (max-width: 768px) {
  .skills-section-new {
    padding: 5rem 0;
  }

  .glass-card {
    padding: 2rem;
  }

  .mega-title {
    font-size: 3rem;
  }

  .achievement-grid {
    grid-template-columns: 1fr;
  }

  .hexagon-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hexagon-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .desc-block {
    flex-direction: column;
  }
}
</style>
