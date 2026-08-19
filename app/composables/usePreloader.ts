import { ref, readonly } from 'vue'

const showPreloader = ref(true)

export function usePreloader() {
  const hide = () => {
    showPreloader.value = false
  }

  return {
    showPreloader: readonly(showPreloader),
    hide
  }
}
