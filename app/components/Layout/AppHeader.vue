<template>
  <header
    id="main-header-wrapper"
    class="header-wrapper max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-4 py-0 text-center mb-0 md:text-left"
  >
    <!-- Logo -->
    <div
      class="order-1 md:order-1 logo text-3xl md:text-4xl font-semibold uppercase transition-colors duration-300 logo-font-family"
      :style="{ color: 'var(--text-primary-color)' }"
    >
      Portfolio
    </div>

    <!-- Navigation Menu -->
    <nav
      class="order-3 md:order-2 w-full md:w-auto mt-4 md:mt-0 flex justify-center md:justify-center"
    >
      <ul
        class="flex flex-wrap justify-center gap-3 md:gap-4 max-h-fit items-center mb-0"
      >
        <li v-for="(item, i) in navItems">
          <a
            :href="item.href"
            class="nav-link inline-flex items-center justify-center px-4 py-1.5 font-semibold transition-all duration-300 rounded-xl"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>

    <!-- Theme Toggle -->
    <div class="order-2 md:order-3 flex justify-center md:justify-end">
      <button
        @click="toggleTheme"
        class="theme-toggle-btn"
        :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        aria-label="Toggle theme"
      >
        <i
          :class="isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"
          class="theme-toggle-icon"
        ></i>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#hero-section' },
  { label: 'About', href: '#about-me' },
  { label: 'Skill', href: '#my-skill' },
  { label: 'Portfolio', href: '#my-work' },
  { label: 'Contact', href: '#contact-info' },
]
</script>

<style scoped>
.header-wrapper {
  height: 3rem;
  min-height: 3rem;
  overflow-x: clip;
}

.nav-link {

  --secondary-gradient: linear-gradient(
    40deg,
    var(--theme-primary-color) 20%,
    transparent 53%
  );
  border-radius: 0;
  max-height: 3rem;
  position: relative;
  min-height: 2.35rem;
  border: 1px solid transparent;
  /* box-shadow: 0rem 0rem 1rem -0.3rem var(--box-shadow-color); */
  border: 0;
  color: var(--text-primary-color);
  background: var(--secondary-gradient);
  background-size: 300% 200%;
  background-position: right;
  text-shadow: none;
}

.nav-link:hover {
  color: var(--text-white-color);
  border-color: var(--theme-primary-color);
  box-shadow: none;
  background-position: left;
}

.nav-link:focus-visible {
  outline: 2px solid var(--theme-primary-color);
  outline-offset: 2px;
}

.theme-toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: var(--surface-glass);
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-toggle-btn:hover {
  border-color: var(--theme-primary-color);
  background: var(--glow-primary);
  transform: scale(1.05);
}

.theme-toggle-icon {
  font-size: 1rem;
  color: var(--theme-primary-color);
  transition: transform 0.4s ease;
}

.theme-toggle-btn:hover .theme-toggle-icon {
  transform: rotate(30deg);
}
</style>
