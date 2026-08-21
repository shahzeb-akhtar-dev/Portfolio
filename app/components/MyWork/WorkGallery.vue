<template>
  <section class="work-gallery-wrapper">
    <div ref="galleryContainer" class="gallery-container">
      <article
        v-for="(project, index) in projects"
        :key="project.id"
        ref="cardRefs"
        class="project-card"
      >
        <div class="card-inner">
          <!-- Left: Number + Category -->
          <div class="card-number-col">
            <div class="number-group">
              <span class="project-number">{{ String(index + 1).padStart(2, '0') }}</span>
              <span class="project-total">/{{ String(projects.length).padStart(2, '0') }}</span>
            </div>
            <span class="project-category">{{ project.category || 'Web Application' }}</span>
          </div>

          <!-- Center: Content -->
          <div class="card-content-col">
            <div class="featured-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4l2 2"/>
              </svg>
              <span>Featured Project</span>
            </div>

            <h2 class="project-title">{{ project.name }}</h2>
            <p class="project-description">{{ project.description }}</p>

            <!-- Feature badges -->
            <div v-if="project.features?.length" class="feature-badges">
              <div
                v-for="feature in project.features"
                :key="feature.label"
                class="feature-badge"
              >
                <i :class="feature.icon"></i>
                <span>{{ feature.label }}</span>
              </div>
            </div>

            <!-- Tech tags -->
            <div v-if="project.skills?.length" class="tech-tags">
              <span
                v-for="tech in project.skills.slice(0, 5)"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>

            <!-- CTA Buttons -->
            <!-- <div class="cta-group">
              <button class="cta-btn primary">
                <span>View Project</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button class="cta-btn secondary">
                <span>Live Demo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </button>
            </div> -->
          </div>

          <!-- Right: Preview Image -->
          <div class="card-preview-col">
            <div class="preview-wrapper">
              <img
                :src="project.image"
                :alt="project.name"
                loading="lazy"
                class="preview-image"
              />
              <div class="preview-overlay"></div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

interface ProjectFeature {
  icon: string
  label: string
}

interface Project {
  id: number | string
  name: string
  description: string
  skills?: string[]
  image: string
  category?: string
  features?: ProjectFeature[]
}

const props = defineProps<{
  projects: Project[]
}>()

const galleryContainer = ref<HTMLElement | null>(null)
const cardRefs = ref<HTMLElement[]>([])

const STICKY_TOP = 80
const STICKY_OFFSET = 24

onMounted(() => {
  nextTick(() => {
    const cards = cardRefs.value.filter(Boolean)
    cards.forEach((card, i) => {
      const topValue = STICKY_TOP + i * STICKY_OFFSET
      card.style.position = 'sticky'
      card.style.top = `${topValue}px`
      card.style.zIndex = `${i + 1}`
    })
  })
})
</script>

<style scoped>
.work-gallery-wrapper {
  position: relative;
  width: 100%;
  padding: 4rem 0 6rem;
}

.gallery-container {
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.project-card {
  position: sticky;
  margin-bottom: 4rem;
}

.card-inner {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr 1.2fr;
  gap: 2.5rem;
  align-items: start;
  background: var(--bg-card-color);
  border-radius: 1.5rem;
  padding: 3rem;
  border: 1px solid var(--border-color);
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: box-shadow 0.4s ease;
}

.card-inner:hover {
  box-shadow: 0 20px 60px -15px rgba(59, 130, 246, 0.15);
}

/* Number Column */
.card-number-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  min-width: 80px;
}

.number-group {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}

.project-number {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
  background: linear-gradient(135deg, var(--theme-primary-color), var(--theme-primary-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.project-total {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-muted-color);
}

.project-category {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--theme-primary-color);
}

/* Content Column */
.card-content-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.featured-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--theme-primary-color);
  background: var(--glow-primary);
  border: 1px solid rgba(59, 130, 246, 0.15);
  width: fit-content;
}

.project-title {
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1.2;
  color: var(--text-primary-color);
  margin: 0;
}

.project-description {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--text-secondary-color);
  margin: 0;
  max-width: 420px;
}

/* Feature Badges */
.feature-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.25rem;
}

.feature-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.85rem;
  border-radius: 0.6rem;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--text-secondary-color);
  background: var(--bg-elevated-color);
  border: 1px solid var(--border-color);
}

.feature-badge i {
  font-size: 0.85rem;
  color: var(--theme-primary-color);
}

/* Tech Tags */
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tech-tag {
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--text-muted-color);
  background: var(--white-transparent-05);
  border: 1px solid var(--border-color);
}

/* CTA Buttons */
.cta-group {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.4rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  outline: none;
}

.cta-btn.primary {
  color: #fff;
  background: linear-gradient(135deg, var(--theme-primary-color), var(--theme-primary-dark));
  box-shadow: 0 6px 20px -6px rgba(59, 130, 246, 0.4);
}

.cta-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px -6px rgba(59, 130, 246, 0.5);
}

.cta-btn.secondary {
  color: var(--text-primary-color);
  background: transparent;
  border: 1.5px solid var(--border-color);
}

.cta-btn.secondary:hover {
  border-color: var(--theme-primary-color);
  color: var(--theme-primary-color);
  background: var(--glow-primary);
}

/* Preview Column */
.card-preview-col {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-wrapper {
  position: relative;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 40px -10px rgba(15, 23, 42, 0.12);
}

.preview-image {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.card-inner:hover .preview-image {
  transform: scale(1.03);
}

.preview-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.04), rgba(139, 92, 246, 0.06));
  pointer-events: none;
}

/* Responsive */
@media (max-width: 1024px) {
  .card-inner {
    grid-template-columns: auto 1fr;
    gap: 2rem;
    padding: 2rem;
  }

  .card-preview-col {
    grid-column: 1 / -1;
    margin-top: 1rem;
  }

  .preview-image {
    height: 260px;
  }
}

@media (max-width: 768px) {
  .card-inner {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .card-number-col {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    min-width: auto;
  }

  .project-number {
    font-size: 2.25rem;
  }

  .project-title {
    font-size: 1.4rem;
  }

  .preview-image {
    height: 200px;
  }

  .cta-group {
    flex-wrap: wrap;
  }
}
</style>
