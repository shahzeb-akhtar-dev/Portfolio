<template>
  <div class="tech-strip">
    <div class="tech-strip-inner">
      <div class="tech-strip-label">
        <span class="label-title">Technologies</span>
        <span class="label-subtitle">I work with</span>
      </div>
      <div class="tech-strip-divider"></div>
      <div class="tech-items">
        <div v-for="tech in technologies" :key="tech.name" class="tech-item">
          <div class="tech-icon" v-html="tech.icon"></div>
          <span class="tech-name">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const technologies = [
  {
    name: 'Vue 3',
    icon: `<svg viewBox="0 0 128 128" width="28" height="28"><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110H78.8z"/><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"/></svg>`
  },
  {
    name: 'Nuxt.js',
    icon: `<svg viewBox="0 0 128 128" width="28" height="28"><path fill="#00c58e" d="M65.6,28.3L81.6,56l16-27.7H65.6z"/><path fill="#108775" d="M46.4,28.3L81.6,89.1l35.2-60.8H97.6L81.6,56L65.6,28.3H46.4z"/><path fill="#2f495e" d="M30.4,28.3l51.2,88.6l51.2-88.6h-19.2L81.6,89.1L50.8,35.7L30.4,28.3z"/></svg>`
  },
  {
    name: 'JavaScript',
    icon: `<svg viewBox="0 0 128 128" width="28" height="28"><path fill="#f0db4f" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.354 7.97-3.052 2.686 1.091 5.136 3.543 6.676 6.014 2.119-1.389 2.119-1.389 3.574-2.323 1.683-1.109 2.901-2.268 2.901-4.678 0-2.261-1.567-4.38-4.205-5.689-4.24-2.123-9.91-1.112-13.115 1.46-5.189 4.166-5.532 11.294-1.134 15.945 3.729 4.213 9.267 5.688 13.115 8.069 1.877 1.116 3.106 2.901 2.686 5.802-.403 2.754-2.869 4.488-6.817 4.055-3.185-.359-6.105-1.771-8.372-4.85-2.119 1.465-2.119 1.465-4.425 3.039-1.109.75-2.226 1.699-2.226 3.348 0 1.715 1.109 2.943 2.335 3.911 3.668 2.938 10.509 3.631 15.113 1.859 6.793-2.469 10.101-9.511 7.226-16.379zM69.477 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.354 7.97-3.052 2.686 1.091 5.136 3.543 6.676 6.014 2.119-1.389 2.119-1.389 3.574-2.323 1.683-1.109 2.901-2.268 2.901-4.678 0-2.261-1.567-4.38-4.205-5.689-4.24-2.123-9.91-1.112-13.115 1.46-5.189 4.166-5.532 11.294-1.134 15.945 3.729 4.213 9.267 5.688 13.115 8.069 1.877 1.116 3.106 2.901 2.686 5.802-.403 2.754-2.869 4.488-6.817 4.055-3.185-.359-6.105-1.771-8.372-4.85-2.119 1.465-2.119 1.465-4.425 3.039-1.109.75-2.226 1.699-2.226 3.348 0 1.715 1.109 2.943 2.335 3.911 3.668 2.938 10.509 3.631 15.113 1.859 6.793-2.469 10.101-9.511 7.226-16.379z"/></svg>`
  },
  {
    name: 'Tailwind CSS',
    icon: `<svg viewBox="0 0 128 128" width="28" height="28"><path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.86-11.73 22.398-9.597 4.87 1.214 8.352 4.746 12.207 8.66C69.27 56.746 74.4 64 84.004 64c17.067 0 27.73-8.53 32-25.602-6.398 8.535-13.867 11.734-22.398 9.602-4.87-1.215-8.347-4.746-12.207-8.66-2.625-2.883-7.754-10.137-17.398-10.137zM32.004 64c-17.067 0-27.73 8.53-32 25.597 6.398-8.535 13.867-11.734 22.398-9.602 4.87 1.215 8.347 4.746 12.207 8.66 2.625 2.883 7.754 10.137 17.398 10.137 17.067 0 27.73-8.53 32-25.597-6.398 8.531-13.86 11.73-22.398 9.597-4.87-1.214-8.352-4.746-12.207-8.66C58.738 71.254 53.604 64 44.004 64z"/></svg>`
  },
  {
    name: 'Firebase',
    icon: `<svg viewBox="0 0 128 128" width="28" height="28"><path fill="#ffa000" d="M40.4 102.3L8.2 34.9c-2.1-4.6 1.6-9.8 6.7-9.8h16.2c3.4 0 6.5 2.1 7.7 5.3l17.6 47.6-16 24.3z"/><path fill="#f57c00" d="M86.8 34.9l-12.6 22.6-8-21.3c-1.2-3.2-4.3-5.3-7.7-5.3H42.1l44.7 71.4 16.2-67.4c.9-4.4-3.4-8.1-7.6-6.7l-8.6 2.7z"/><path fill="#ffca28" d="M40.4 102.3l20.4-21.7 18.7 31.4c1.7 2.8.1 6.4-3.1 6.8l-30.9 3.9c-4.2.5-8-2.7-8.2-6.9l3.1-13.5z"/></svg>`
  },
  {
    name: 'Mapbox',
    icon: `<svg viewBox="0 0 128 128" width="28" height="28"><path fill="#4264fb" d="M64 4C32 4 8 28 8 56c0 48 56 72 56 72s56-24 56-72c0-28-24-52-56-52zm0 72c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z"/></svg>`
  }
]
</script>

<style scoped>
.tech-strip {
  width: 100%;
  padding: 0 0.75rem;
}

.tech-strip-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--bg-secondary-color);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  box-shadow: var(--shadow-sm);
}

.tech-strip-label {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: max-content;
}

.label-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary-color);
  line-height: 1.2;
}

.label-subtitle {
  font-size: 0.85rem;
  color: var(--text-muted-color);
  line-height: 1.2;
}

.tech-strip-divider {
  width: 1px;
  height: 2.5rem;
  background: var(--border-color);
  flex-shrink: 0;
}

.tech-items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  width: 100%;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.tech-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
}

.tech-icon :deep(svg) {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.tech-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-secondary-color);
}

@media screen and (max-width: 768px) {
  .tech-strip-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 0.875rem;
  }

  .tech-strip-divider {
    width: 100%;
    height: 1px;
  }

  .tech-items {
    justify-content: flex-start;
    gap: 0.75rem 1rem;
  }

  .tech-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .tech-name {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 380px) {
  .tech-strip-inner {
    padding: 0.875rem;
  }

  .tech-items {
    gap: 0.6rem 0.75rem;
  }

  .label-title {
    font-size: 0.85rem;
  }

  .label-subtitle {
    font-size: 0.75rem;
  }

  .tech-icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  .tech-name {
    font-size: 0.75rem;
  }
}
</style>
