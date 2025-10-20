<template>
  <header
    id="main-header-wrapper"
    class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-4 py-2 text-center mb-0 md:text-left max-h-12"
  >
    <!-- Logo -->
    <div
      class="order-1 md:order-1 logo text-4xl md:text-5xl font-semibold uppercase transition-colors duration-300 logo-font-family"
      :style="{ color: 'var(--text-black-color)' }"
    >
      Portfolio
    </div>

    <!-- Actions (Theme Switch) -->
    <div class="order-2 md:order-3 flex justify-center md:justify-end">
      <a-switch
        :default-checked="isLightMode"
        @change="handleThemeChange"
        class="text-xl"
      >
        <template #checkedChildren>
          <i class="fa-regular fa-moon"></i>
        </template>
        <template #unCheckedChildren>
          <i class="fa-regular fa-sun"></i>
        </template>
      </a-switch>
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
            class="inline-block px-5 py-2 font-semibold transition-all duration-300 rounded-xl h-full hover:bg-[var(--theme-primary-color)] hover:text-white"
            :style="{
              color: 'var(--text-black-color)',
              background:
                'linear-gradient(0deg, var(--theme-primary-color, #00bcd4) 1%, transparent 48%)',
              backgroundSize: '102% 200%',
              backgroundPosition: 'center top',
            }"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

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

const isLightMode = ref(false)

const applyTheme = (light: boolean) => {
  debugger
  const root = document.documentElement
  if (light) {
    root.style.setProperty('--bg-primary-color', '#efefef')
    root.style.setProperty('--text-black-color', '#000000')
  } else {
    root.style.setProperty('--bg-primary-color', '#000000')
    root.style.setProperty('--text-black-color', '#ffffff')
  }
}

const handleThemeChange = (checked: boolean) => {
  isLightMode.value = checked
  applyTheme(checked)
  console.log(`[Theme] Mode changed to: ${checked ? 'Light' : 'Dark'}`)
}


onMounted(() => {
  applyTheme(isLightMode.value)
})
</script>
