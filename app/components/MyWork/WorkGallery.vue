<template>
  <div
    ref="sectionRef"
    class="relative bg-slate-50 dark:bg-[#0a0a0f] transition-colors duration-500"
    :style="{ minHeight: `${sectionHeight}px` }"
  >
    <div ref="stickyRef" class="sticky top-0 w-full h-screen overflow-hidden">
      <canvas
        ref="canvasRef"
        class="block w-full h-full touch-none"
        :class="isDragging ? 'cursor-grabbing' : 'cursor-grab'"
        @mousedown.prevent="onPointerDown"
        @mousemove.prevent="onPointerMove"
        @mouseup.prevent="onPointerUp"
        @mouseleave="onPointerUp"
        @touchstart.prevent="onPointerDown"
        @touchmove.prevent="onPointerMove"
        @touchend.prevent="onPointerUp"
      />
      <div
        class="pointer-events-none select-none absolute left-1/2 bottom-6 sm:bottom-8 -translate-x-1/2 flex items-center gap-2 text-xs sm:text-[13px] tracking-wide text-slate-500/70 dark:text-slate-300/50 animate-[hintPulse_3s_ease-in-out_infinite]"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        <span>Scroll &amp; drag to explore</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGallery3D } from '@/composables/useGallery3D'
import type { Project } from '@/utils/cardTexture'

const props = defineProps<{ projects: Project[] }>()
const projects = computed(() => props.projects)

const {
  sectionRef,
  stickyRef,
  canvasRef,
  sectionHeight,
  isDragging,
  onPointerDown,
  onPointerMove,
  onPointerUp,
} = useGallery3D(projects)
</script>

<style scoped>
@keyframes hintPulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.85; }
}
</style>