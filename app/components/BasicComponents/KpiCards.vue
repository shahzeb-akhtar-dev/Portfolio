<template>
  <div class="flex flex-wrap justify-center gap-6 pt-8">
    <div
      v-for="(item, index) in items"
      :key="item.id ?? `${item.label}-${index}`"
      class="work-stat-card group relative backdrop-blur-xl rounded-2xl p-6 transition-all duration-300  hover:shadow-2xl border hover:border-[var(--theme-primary-color)]"
    >
      <div
        class="absolute inset-0 rounded-2xl transition-all duration-300"
      ></div>
      <div class="relative flex items-center gap-4">
        <div
          class="kpi-icon-3d flex items-center justify-center w-16 h-16 rounded-full"
        >
          <i :class="item.icon" class="text-white text-xl"></i>
        </div>
        <div class="text-left text-[var(--text-primary-color)]">
          <div class="work-stat-value text-3xl font-black">{{ item.value }}</div>
          <div class="work-stat-label text-sm font-semibold text-primary uppercase tracking-wide">
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface KpiItem {
  id?: number | string
  value: string | number
  label: string
  icon: string
  cardClass?: string
  overlayClass?: string
  iconWrapperClass?: string
}

withDefaults(
  defineProps<{
    items: KpiItem[]
    wrapperClass?: string
  }>(),
  {
    wrapperClass: '',
  },
)
</script>

<style scoped>
.kpi-icon-3d {
  position: relative;
  isolation: isolate;
  background: var(--theme-primary-color);
  border: 1px solid color-mix(in srgb, var(--theme-primary-color) 70%, white 30%);
  box-shadow:
    inset 0 2px 3px rgba(255, 255, 255, 0.28),
    inset 0 -5px 10px rgba(0, 0, 0, 0.28),
    0 8px 16px -10px var(--box-shadow-color),
    0 0 0 1px color-mix(in srgb, var(--theme-primary-color) 75%, black 25%);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.kpi-icon-3d::before {
  content: '';
  position: absolute;
  inset: 6px;
  border-radius: 999px;
  background: var(--bg-secondary-color);
  box-shadow:
    inset 0 6px 10px rgba(0, 0, 0, 0.18),
    inset 0 -4px 8px rgba(255, 255, 255, 0.35);
  pointer-events: none;
  z-index: 0;
}

.kpi-icon-3d::after {
  content: '';
  position: absolute;
  inset: 6px;
  border-radius: inherit;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.22),
    rgba(255, 255, 255, 0)
  );
  pointer-events: none;
  z-index: 0;
}

.group:hover .kpi-icon-3d {
  transform: translateY(-1px);
  box-shadow:
    inset 0 2px 3px rgba(255, 255, 255, 0.32),
    inset 0 -6px 12px rgba(0, 0, 0, 0.32),
    0 10px 20px -10px var(--box-shadow-color),
    0 0 0 1px color-mix(in srgb, var(--theme-primary-color) 70%, black 30%);
}

.kpi-icon-3d i {
  position: relative;
  z-index: 1;
  color: var(--text-primary-color);
  text-shadow:
    0 1px 0 rgba(255, 255, 255, 0.18),
    0 -1px 1px rgba(0, 0, 0, 0.28);
}
</style>