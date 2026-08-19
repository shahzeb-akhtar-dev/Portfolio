<template>
  <div
    class="rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
    style="background: linear-gradient(to right, rgba(20, 184, 166, 0.06), rgba(255, 255, 255, 0.9), rgba(139, 92, 246, 0.06));"
    :class="wrapperClass"
  >
    <div class="flex flex-col md:flex-row">
      <div
        v-for="(item, index) in items"
        :key="item.id ?? `${item.label || item.title}-${index}`"
        class="flex items-center gap-5 px-8 py-7 flex-1"
        :class="{
          'md:border-r border-gray-200/70': index < items.length - 1,
          'border-b md:border-b-0 border-gray-200/70': index < items.length - 1,
        }"
      >
        <div
          class="flex items-center justify-center w-16 h-16 rounded-full shrink-0"
          :class="item.iconBgClass || 'bg-teal-100'"
        >
          <i
            v-if="item.icon"
            class="text-xl"
            :class="`${item.icon} ${item.iconClass} text-teal-600`"
          ></i>
          <span
            v-else-if="item.iconHtml"
            class="text-xl"
            :class="item.iconClass || 'text-teal-600'"
            v-html="item.iconHtml"
          ></span>
        </div>
        <div class="text-left min-w-0">
          <div
            class="text-[1.05rem] font-bold text-[var(--text-primary-color)] mb-1"
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
export interface KpiItem {
  id?: number | string
  value?: string | number
  label?: string
  title?: string
  description?: string
  icon?: string
  iconHtml?: string
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
