import { reactive } from 'vue'

export interface Palette {
  isDark: boolean
  bg: string
  lights: {
    ambient: { color: string; intensity: number }
    key: { color: string; intensity: number }
    rim: { color: string; intensity: number }
    accent: { color: string; intensity: number }
    back: { color: string; intensity: number }
  }
  grid: { color: string; alpha: number }
  particles: { color: string; opacity: number }
  ground: { opacity: number }
  card: { back: string; edge: string; border: string }
  text: { primary: string; secondary: string }
  glow: { from: string; to: string }
  canvas: { imgTop: string; imgMid: string; imgBottom: string; infoTop: string; infoBottom: string }
  tag: { bgAlpha: string; text: string }
}

function readBrandColors() {
  const style = getComputedStyle(document.documentElement)
  return {
    primary: style.getPropertyValue('--theme-primary-color').trim() || '#3b82f6',
    primaryDark: style.getPropertyValue('--theme-primary-dark').trim() || '#6366f1',
    secondary: style.getPropertyValue('--theme-secondary-color').trim() || '#8b5cf6',
  }
}

function isDarkMode(): boolean {
  const { theme } = document.documentElement.dataset
  if (theme) return theme === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function buildPalette(): Palette {
  const { primary, primaryDark, secondary } = readBrandColors()
  const dark = isDarkMode()

  return {
    isDark: dark,
    bg: dark ? '#0a0a0f' : '#f8fafc',
    lights: {
      ambient: { color: dark ? '#334466' : '#c7d2fe', intensity: dark ? 0.6 : 0.85 },
      key: { color: '#ffffff', intensity: dark ? 3.5 : 3.1 },
      rim: { color: primaryDark, intensity: dark ? 0.6 : 0.45 },
      accent: { color: primary, intensity: dark ? 12 : 9 },
      back: { color: secondary, intensity: dark ? 3 : 1.4 },
    },
    grid: { color: dark ? '#ffffff' : '#0f172a', alpha: dark ? 0.035 : 0.05 },
    particles: { color: secondary, opacity: dark ? 0.35 : 0.28 },
    ground: { opacity: dark ? 0.85 : 0.9 },
    card: {
      back: dark ? '#0f0f1a' : '#e2e8f0',
      edge: dark ? '#1a1a28' : '#cbd5e1',
      border: dark ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.08)',
    },
    text: {
      primary: dark ? '#ffffff' : '#0f172a',
      secondary: dark ? 'rgba(180,180,200,0.78)' : 'rgba(51,65,85,0.75)',
    },
    glow: { from: primary, to: secondary },
    canvas: dark
      ? {
          imgTop: 'rgba(10,10,18,0)',
          imgMid: 'rgba(10,10,18,0.04)',
          imgBottom: 'rgba(10,10,18,0.92)',
          infoTop: 'rgba(12,12,20,0.93)',
          infoBottom: 'rgba(10,10,16,1)',
        }
      : {
          imgTop: 'rgba(248,250,252,0)',
          imgMid: 'rgba(248,250,252,0.05)',
          imgBottom: 'rgba(248,250,252,0.94)',
          infoTop: 'rgba(255,255,255,0.96)',
          infoBottom: 'rgba(248,250,252,1)',
        },
    tag: { bgAlpha: dark ? '26' : '1F', text: dark ? primary : primaryDark },
  }
}

/**
 * Reactive theme palette. Re-reads brand colors + light/dark mode whenever
 * `data-theme` on <html> changes, or (if that attribute isn't set at all)
 * whenever the OS color-scheme changes. `onChange` fires with the fresh
 * palette so the caller can push it into Three.js.
 */
export function useGalleryTheme(onChange: (palette: Palette) => void) {
  const palette = reactive(buildPalette()) as Palette

  function refresh() {
    Object.assign(palette, buildPalette())
    onChange(palette)
  }

  const observer = new MutationObserver(refresh)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

  const media = window.matchMedia('(prefers-color-scheme: dark)')
  media.addEventListener('change', refresh)

  function dispose() {
    observer.disconnect()
    media.removeEventListener('change', refresh)
  }

  return { palette, dispose }
}
