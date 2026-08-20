<template>
  <header
    id="main-header-wrapper"
    class="header-wrapper w-full px-4 md:px-6 lg:px-8"
    :class="{ 'is-expanded': isMenuOpen }"
  >
    <div class="header-inner max-w-7xl mx-auto">
      <div class="header-top flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="logo-link flex items-center gap-3">
          <img scr="/images/app-logo.png" class="size-full"  alt="logo"/>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-1">
          <ul class="desktop-nav-list flex items-center gap-1">
            <li v-for="(item, i) in navItems" :key="`desktop-${i}`">
              <a
                :href="item.href"
                class="nav-link relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200"
                :class="{ 'is-active': activeNavHref === item.href }"
                @click="activeNavHref = item.href"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Right Actions -->
        <div class="flex items-center gap-3">
          <a
            href="#contact-info"
            class="lets-connect-btn hidden md:inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
          >
            Let's Connect
            <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
          </a>

          <a-button
            @click="toggleTheme"
            class="theme-toggle-btn"
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
            <i
              :class="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
            ></i>
          </a-button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <section
        id="mobile-nav-inline"
        class="mobile-nav-inline md:hidden"
        :class="{ open: isMenuOpen }"
        :aria-hidden="!isMenuOpen"
      >
        <nav>
          <ul class="mobile-nav-list">
            <li v-for="(item, i) in navItems" :key="`mobile-${i}`">
              <a
                :href="item.href"
                class="mobile-nav-link inline-flex w-full items-center px-3 py-2 font-semibold transition-all duration-300"
                :class="{ 'is-active': activeNavHref === item.href }"
                @click="setActiveAndClose(item.href)"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
          <a
            href="#contact-info"
            class="mobile-connect-btn inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
            @click="closeMenu"
          >
            Let's Connect
            <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
          </a>
        </nav>
      </section>
    </div>
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
  { label: 'Skills', href: '#my-skill' },
  { label: 'Projects', href: '#my-work' },
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
  background-color: var(--bg-primary-color);
  border-bottom: 1px solid var(--border-color);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.header-inner {
  position: relative;
}

/* Logo */
.logo-link {
  text-decoration: none;
}

.logo-mark {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #14b8a6 0%, #3b82f6 50%, #8b5cf6 100%);
  box-shadow: 0 8px 20px -6px rgba(59, 130, 246, 0.35);
}

.logo-text {
  font-family: 'Saira Stencil One', sans-serif;
  font-size: 1.25rem;
  color: #ffffff;
  letter-spacing: 0.02em;
}

.logo-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary-color);
  letter-spacing: -0.01em;
}

/* Desktop Navigation */
.desktop-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: var(--text-secondary-color);
  border-radius: 999px;
}

.nav-link:hover {
  color: var(--text-primary-color);
  background: var(--white-transparent-05);
}

.nav-link.is-active {
  color: var(--text-primary-color);
}

.nav-link.is-active::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--theme-primary-light);
}

/* Let's Connect Button */
.lets-connect-btn {
  color: var(--text-primary-color);
  border-color: var(--border-color);
  background: transparent;
}

.lets-connect-btn:hover {
  border-color: var(--theme-primary-color);
  color: var(--theme-primary-color);
  background: var(--glow-primary);
  transform: translateY(-1px);
}

/* Theme Toggle */
.theme-toggle-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
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

:deep(.theme-toggle-btn.ant-btn),
:deep(.drawer-toggle-btn.ant-btn) {
  padding: 0 !important;
  line-height: 1 !important;
}

/* Mobile Toggle */
.drawer-toggle-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
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

/* Mobile Navigation */
.mobile-nav-inline {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition:
    max-height 0.28s ease,
    opacity 0.2s ease;
}

.mobile-nav-inline.open {
  max-height: 24rem;
  opacity: 1;
  overflow-y: auto;
}

.mobile-nav-list {
  list-style: none;
  margin: 0;
  padding: 0.5rem 0 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.mobile-nav-link {
  min-height: 2.2rem;
  border-radius: 0.5rem;
  background: var(--white-transparent-03);
  color: var(--text-primary-color);
  justify-content: flex-start;
  font-size: 0.9rem;
  letter-spacing: 0.01em;
  line-height: 1.15;
}

.mobile-nav-link:hover {
  background: var(--white-transparent-05);
  color: var(--text-primary-color);
}

.mobile-nav-link.is-active {
  background: var(--theme-primary-color);
  color: var(--text-white-color);
}

.mobile-connect-btn {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary-color);
  border: 1px solid var(--border-color);
  background: transparent;
}

.mobile-connect-btn:hover {
  border-color: var(--theme-primary-color);
  color: var(--theme-primary-color);
  background: var(--glow-primary);
}

@media (min-width: 768px) {
  .mobile-nav-inline {
    display: none;
  }
}
</style>
