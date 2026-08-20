<template>
  <div
    class="rounded-2xl border border-gray-100 shadow-sm overflow-hidden bg-gradient-to-r from-[#3b83f62c] to-[#3b83f610]"
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
          class="flex items-center justify-center w-16 h-16 rounded-full shrink-0 bg-[var(--theme-primary-light)]"
          :class="item.iconBgClass"
        >
          <i
            v-if="item.icon"
            class="text-xl"
            :class="`${item.icon} ${item.iconClass} text-[var(--theme-primary-color)]`"
          ></i>
          <span
            v-else-if="item.iconHtml"
            class="text-xl text-[var(--theme-primary-color)]"
            :class="item.iconClass"
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
