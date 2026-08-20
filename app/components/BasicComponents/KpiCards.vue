<template>
  <div
    class="kpi-wrapper rounded-2xl border overflow-hidden"
    :class="wrapperClass"
  >
    <div class="flex flex-col md:flex-row">
      <div
        v-for="(item, index) in items"
        :key="item.id ?? `${item.label || item.title}-${index}`"
        class="flex items-center gap-5 px-8 py-7 flex-1 kpi-item"
        :class="{
          'kpi-divider': index < items.length - 1,
        }"
      >
        <div
          class="flex items-center justify-center w-14 h-14 rounded-xl shrink-0 kpi-icon-bg"
          :class="item.iconBgClass"
        >
          <component
            v-if="item.iconComponent"
            :is="item.iconComponent"
            class="text-[1.4rem] kpi-icon"
          />
          <i
            v-else-if="item.icon"
            class="text-[1.4rem]"
            :class="`${item.icon} ${item.iconClass} text-[var(--theme-primary-color)]`"
          ></i>
          <span
            v-else-if="item.iconHtml"
            class="text-[1.4rem] text-[var(--theme-primary-color)]"
            :class="item.iconClass"
            v-html="item.iconHtml"
          ></span>
        </div>
        <div class="text-left min-w-0">
          <div
            class="text-[1.2rem] font-bold text-[var(--text-primary-color)] mb-1"
          >
            {{ item.title || item.value }}
          </div>
          <div
            class="text-[0.88rem] leading-relaxed text-[var(--text-muted-color)]"
          >
            {{ item.description || item.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

export interface KpiItem {
  id?: number | string
  value?: string | number
  label?: string
  title?: string
  description?: string
  icon?: string
  iconHtml?: string
  iconComponent?: Component
  iconBgClass?: string
  iconClass?: string
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
.kpi-wrapper {
  border-color: var(--glass-border);
  background: var(--surface-glass);
}

.kpi-item {
  border-color: var(--glass-border);
}

.kpi-divider {
  border-right: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
}

@media (min-width: 768px) {
  .kpi-divider {
    border-bottom: none;
  }
}

.kpi-icon-bg {
  background: var(--glow-primary);
}

.kpi-icon {
  color: var(--theme-primary-color);
}
</style>
