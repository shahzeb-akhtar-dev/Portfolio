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
    stripe: 'card-stripe-blue',
    iconBg: 'card-icon-blue',
  },
  green: {
    stripe: 'card-stripe-green',
    iconBg: 'card-icon-green',
  },
  purple: {
    stripe: 'card-stripe-purple',
    iconBg: 'card-icon-purple',
  },
  pink: {
    stripe: 'card-stripe-pink',
    iconBg: 'card-icon-pink',
  },
  orange: {
    stripe: 'card-stripe-orange',
    iconBg: 'card-icon-orange',
  },
}

const currentColor =
  colorClasses[props.color as keyof typeof colorClasses] || colorClasses.blue
</script>

<style scoped>
.contact-card {
  border: 1px solid var(--glass-border);
  background: var(--surface-glass);
  transition: transform 250ms ease, border-color 250ms ease;
}

.contact-card:hover {
  transform: translateY(-3px);
  border-color: var(--theme-primary-color);
}

.card-subtitle {
  color: var(--text-muted-color);
  letter-spacing: 0.08em;
}

.contact-card:hover .card-subtitle {
  color: var(--text-primary-color);
}

.card-text {
  color: var(--text-primary-color);
}

.card-stripe {
  border-left: 3px solid transparent;
}

.card-stripe-blue {
  border-left-color: var(--text-secondary-color);
}

.card-stripe-green {
  border-left-color: var(--theme-primary-color);
}

.card-stripe-purple {
  border-left-color: var(--theme-secondary-color);
}

.card-stripe-pink {
  border-left-color: var(--theme-secondary-color);
}

.card-stripe-orange {
  border-left-color: var(--theme-primary-color);
}

.card-icon {
  border: 1px solid var(--glass-border);
}

.card-icon-blue {
  color: var(--text-primary-color);
  background: var(--white-transparent-10);
}

.card-icon-green {
  color: var(--theme-primary-color);
  background: var(--glow-primary);
}

.card-icon-purple {
  color: var(--theme-secondary-color);
  background: var(--white-transparent-10);
}

.card-icon-pink {
  color: var(--theme-secondary-color);
  background: var(--white-transparent-10);
}

.card-icon-orange {
  color: var(--theme-primary-color);
  background: var(--glow-primary);
}
</style>

<template>
  <div
    class="contact-card card-stripe group relative overflow-hidden rounded-2xl p-5"
    :class="currentColor.stripe"
  >
    <div class="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/5 blur-2xl" />

    <div class="relative z-10 flex items-center gap-4">
      <div
        class="card-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
        :class="currentColor.iconBg"
      >
        <i :class="props.icon + ' text-lg'" />
      </div>

      <div class="min-w-0 flex-1">
        <h4 class="card-subtitle mb-1 text-[11px] font-semibold uppercase transition-colors duration-300">
          {{ props.title }}
        </h4>

        <a
          v-if="props.link"
          :href="props.link"
          target="_blank"
          rel="noopener noreferrer"
          class="card-text block text-base font-bold transition-all duration-200 hover:underline"
        >
          {{ props.text }}
          <i class="fas fa-external-link-alt ml-1 text-xs opacity-70" />
        </a>
        <p v-else class="card-text text-base font-bold">{{ props.text }}</p>
      </div>
    </div>
  </div>
</template>
