<template>
  <header
    id="main-header-wrapper"
    class="header-wrapper max-w-7xl mx-auto px-3 md:px-4 mb-0"
    :class="{ 'is-expanded': isMenuOpen }"
  >
    <div class="header-top flex items-center justify-between">
      <div
        class="logo text-3xl md:text-4xl font-semibold uppercase transition-colors duration-300 logo-font-family"
        :style="{ color: 'var(--text-primary-color)' }"
      >
        Portfolio
      </div>

      <nav class="hidden md:flex justify-center">
        <ul class="desktop-nav-list flex flex-wrap justify-center gap-1.5 max-h-fit items-center mb-0">
          <li v-for="(item, i) in navItems" :key="`desktop-${i}`">
            <a
              :href="item.href"
              class="nav-link inline-flex items-center justify-center px-3 py-1.5 font-semibold transition-all duration-300"
              :class="{ 'is-active': activeNavHref === item.href }"
              @click="activeNavHref = item.href"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-2">
        <a-button
          @click="toggleTheme"
          class="theme-toggle-btn hidden md:inline-flex"
          :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          aria-label="Toggle theme"
          type="text"
        >
          <i
            :class="isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"
            class="theme-toggle-icon"
          ></i>
        </a-button>

        <a-button
          class="drawer-toggle-btn md:!hidden"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-nav-inline"
          aria-label="Toggle navigation menu"
          @click="toggleMenu"
          type="text"
        >
          <i :class="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </a-button>
      </div>
    </div>

    <section
      id="mobile-nav-inline"
      class="mobile-nav-inline md:hidden"
      :class="{ open: isMenuOpen }"
      :aria-hidden="!isMenuOpen"
    >
      <nav>
        <ul class="flex flex-col gap-2 pt-3 pb-2">
          <li v-for="(item, i) in navItems" :key="`mobile-${i}`">
            <a
              :href="item.href"
              class="mobile-nav-link inline-flex w-full items-center px-3 py-2.5 font-semibold transition-all duration-300"
              :class="{ 'is-active': activeNavHref === item.href }"
              @click="setActiveAndClose(item.href)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
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

const isMenuOpen = ref(false)
const activeNavHref = ref(navItems[0]?.href ?? '#hero-section')

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const setActiveAndClose = (href: string) => {
  activeNavHref.value = href
  closeMenu()
}

const syncActiveSection = () => {
  if (typeof window === 'undefined') {
    return
  }

  const currentHash = window.location.hash
  if (currentHash) {
    activeNavHref.value = currentHash
  }
}

onMounted(() => {
  syncActiveSection()
  if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', syncActiveSection)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('hashchange', syncActiveSection)
  }
})
</script>

<style scoped>
.header-wrapper {
  height: auto;
  min-height: 3rem;
  overflow: visible;
  border-radius: 0.9rem;
}

.header-top {
  min-height: 3.2rem;
}

.desktop-nav-list {
  padding: 0.2rem;
  border-radius: 999px;
}

.nav-link {
  min-height: 2rem;
  border-radius: 999px;
  border: 1px solid transparent;
  color: var(--text-primary-color);
  background: transparent;
  letter-spacing: 0.01em;
  font-size: 0.9rem;
  line-height: 1;
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--theme-primary-color);
  background: var(--white-transparent-05);
  border-color: var(--theme-primary-color);
}

.nav-link.is-active {
  background: var(--theme-primary-color);
  color: var(--text-white-color);
  border-color: var(--theme-primary-color);
  box-shadow: var(--shadow-sm);
}

.nav-link:focus-visible {
  outline: 2px solid var(--theme-primary-color);
  outline-offset: 2px;
}

.theme-toggle-btn {
  display: inline-flex;
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

.drawer-toggle-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: var(--surface-glass);
  backdrop-filter: blur(10px);
  color: var(--theme-primary-color);
  cursor: pointer;
  transition: all 0.3s ease;
}

.drawer-toggle-btn:hover {
  border-color: var(--theme-primary-color);
  background: var(--glow-primary);
  transform: scale(1.05);
}

.mobile-nav-inline {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.28s ease, opacity 0.2s ease;
}

.mobile-nav-inline.open {
  max-height: 70vh;
  opacity: 1;
  overflow-y: auto;
}

.mobile-nav-link {
  min-height: 2.5rem;
  border-radius: 0.5rem;
 
  background: var(--white-transparent-03);
  color: var(--text-primary-color);
  justify-content: flex-start;
  font-size: 0.9rem;
  letter-spacing: 0.01em;
  line-height: 1.3;
}

.mobile-nav-link:hover {
  background: var(--white-transparent-05);
  border-color: var(--theme-primary-color);
  color: var(--text-primary-color);
}

.mobile-nav-link.is-active {
  background: var(--theme-primary-color);
  color: var(--text-white-color);
}

.mobile-nav-link:focus-visible {
  outline: 2px solid var(--theme-primary-color);
  outline-offset: 2px;
}

@media (min-width: 768px) {
  .mobile-nav-inline {
    display: none;
  }
}
</style>
