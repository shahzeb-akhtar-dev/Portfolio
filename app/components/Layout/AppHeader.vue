<template>
  <header
    id="main-header-wrapper"
    class="header-wrapper w-full px-4 md:px-6 lg:px-8"
  >
    <div class="header-inner max-w-7xl px-2 md:px-6 mx-auto">
      <div class="header-top flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="logo-link flex items-center">
          <img :src="isDark ? '/images/dark-logo.png' : '/images/light-logo.png'" class="h-[4rem] md:h-[5rem] py-1" alt="logo"/>
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
            class="lets-connect-btn hidden lg:inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
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
        </div>
      </div>
    </div>

    <!-- Mobile Bottom Navigation -->
    <nav
      class="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-[28rem] -translate-x-1/2 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card-color)] px-3 py-2 shadow-[0_8px_32px_var(--box-shadow-color)] backdrop-blur-xl md:hidden max-[360px]:bottom-2 max-[360px]:w-[calc(100%-1rem)] max-[360px]:px-2 max-[360px]:py-1.5"
    >
      <ul class="m-0 flex list-none items-center justify-around gap-1 p-0">
        <li v-for="(item, i) in navItems" :key="`bottom-${i}`">
          <a
            :href="item.href"
            class="group flex min-w-[3.5rem] flex-col items-center justify-center gap-1 rounded-xl px-3 py-2 no-underline transition-all duration-200 hover:bg-[var(--white-transparent-05)] max-[360px]:min-w-[2.8rem] max-[360px]:px-1.5 max-[360px]:py-1.5"
            :class="activeNavHref === item.href ? 'bg-primary/10' : ''"
            @click="activeNavHref = item.href"
          >
            <i
              :class="[item.icon, 'text-xl text-[var(--text-secondary-color)] transition-colors duration-200 group-hover:text-[var(--text-primary-color)] max-[360px]:text-[1.1rem]', activeNavHref === item.href ? '!text-primary' : '']"
            ></i>
            <span
              :class="['text-[0.7rem] font-medium text-[var(--text-secondary-color)] transition-colors duration-200 group-hover:text-[var(--text-primary-color)] max-[360px]:text-[0.6rem]', activeNavHref === item.href ? '!text-primary font-semibold' : '']"
            >
              {{ item.label }}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()

interface NavItem {
  label: string
  href: string
  icon: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#hero-section', icon: 'fa-solid fa-house' },
  { label: 'About', href: '#about-me', icon: 'fa-regular fa-user' },
  { label: 'Skills', href: '#my-skill', icon: 'fa-solid fa-code' },
  { label: 'Projects', href: '#my-work', icon: 'fa-regular fa-folder' },
  { label: 'Contact', href: '#contact-info', icon: 'fa-regular fa-envelope' },
]

const activeNavHref = ref(navItems[0]?.href ?? '#hero-section')

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

:deep(.theme-toggle-btn.ant-btn) {
  padding: 0 !important;
  line-height: 1 !important;
}

</style>
