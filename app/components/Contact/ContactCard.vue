<script setup lang="ts">
interface Props {
  icon: string
  title: string
  text: string
  link?: string
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'blue',
})

const colorClasses = {
  blue: {
    gradient: 'from-blue-500/20 to-blue-500/5',
    border: 'hover:border-blue-500/50',
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-700 shadow-blue-500/50',
  },
  green: {
    gradient: 'from-green-500/20 to-green-500/5',
    border: 'hover:border-green-500/50',
    iconBg: 'bg-gradient-to-br from-green-500 to-green-700 shadow-green-500/50',
  },
  purple: {
    gradient: 'from-purple-500/20 to-purple-500/5',
    border: 'hover:border-purple-500/50',
    iconBg:
      'bg-gradient-to-br from-purple-500 to-purple-700 shadow-purple-500/50',
  },
  pink: {
    gradient: 'from-pink-500/20 to-pink-500/5',
    border: 'hover:border-pink-500/50',
    iconBg: 'bg-gradient-to-br from-pink-500 to-pink-700 shadow-pink-500/50',
  },
  orange: {
    gradient: 'from-orange-500/20 to-orange-500/5',
    border: 'hover:border-orange-500/50',
    iconBg:
      'bg-gradient-to-br from-orange-500 to-orange-700 shadow-orange-500/50',
  },
}

const currentColor =
  colorClasses[props.color as keyof typeof colorClasses] || colorClasses.blue
</script>

<template>
  <div
    class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
    :class="[currentColor.gradient, currentColor.border]"
  >
    <!-- Animated gradient overlay on hover -->
    <div
      class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"
    />

    <div class="flex items-center gap-4 relative z-10">
      <div
        class="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
        :class="currentColor.iconBg"
      >
        <i :class="props.icon + ' text-2xl'" />
      </div>

      <div class="min-w-0 flex-1">
        <h4
          class="mb-1 text-xs font-semibold uppercase tracking-wider text-white/70 transition-colors duration-300 group-hover:text-white/90"
        >
          {{ props.title }}
        </h4>

        <a
          v-if="props.link"
          :href="props.link"
          target="_blank"
          rel="noopener noreferrer"
          class="block text-lg font-bold text-white hover:underline decoration-2 underline-offset-2 transition-all duration-200"
        >
          {{ props.text }}
          <i class="fas fa-external-link-alt ml-1 text-xs opacity-70" />
        </a>
        <p v-else class="text-lg font-bold text-white">{{ props.text }}</p>
      </div>
    </div>
  </div>
</template>
