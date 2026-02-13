<template>
  <header
    id="main-header-wrapper"
    class="header-wrapper max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-4 py-2 text-center mb-0 md:text-left max-h-12"
  >
    <!-- Logo -->
    <div
      class="order-1 md:order-1 logo text-4xl md:text-5xl font-semibold uppercase transition-colors duration-300 logo-font-family"
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
        <li v-for="(item, i) in navItems" :key="i" class="max-h-full">
          <a
            :href="item.href"
            class="nav-link inline-block px-5 py-2 font-semibold transition-all duration-300 rounded-xl h-full"
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
.nav-link {
  color: var(--text-primary-color);
  background: linear-gradient(0deg, var(--theme-primary-color) 1%, transparent 48%);
  background-size: 102% 200%;
  background-position: center top;
}

.nav-link:hover {
  background-color: var(--theme-primary-color);
  color: #fff;
}

.theme-toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
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
  font-size: 1.2rem;
  color: var(--theme-primary-color);
  transition: transform 0.4s ease;
}

.theme-toggle-btn:hover .theme-toggle-icon {
  transform: rotate(30deg);
}
</style>
