import { ref, watch, onMounted } from 'vue'

type Theme = 'dark' | 'light'

const theme = ref<Theme>('dark')

export function useTheme() {
  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', newTheme)
      localStorage.setItem('portfolio-theme', newTheme)
    }
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  const initTheme = () => {
    if (typeof window === 'undefined') return
    const saved = localStorage.getItem('portfolio-theme') as Theme | null
    if (saved) {
      setTheme(saved)
    } else {
      // Default to dark
      setTheme('dark')
    }
  }

  const isDark = computed(() => theme.value === 'dark')

  return {
    theme,
    isDark,
    setTheme,
    toggleTheme,
    initTheme,
  }
}
