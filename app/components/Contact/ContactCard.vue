<script setup lang="ts">
import { computed } from 'vue'

type CardColor = 'blue' | 'green' | 'purple' | 'pink' | 'orange'

interface Props {
  icon: string
  title: string
  text: string
  link?: string
  color?: CardColor
}

const props = withDefaults(defineProps<Props>(), {
  color: 'blue',
})

const iconClass = computed(() => `card-icon-${props.color}`)
const cardClass = computed(() => `contact-card--${props.color}`)
</script>

<style scoped>
.contact-card {
  --card-accent: var(--theme-primary-color);
  position: relative;
  border: 1px solid var(--glass-border);
  background: var(--white-transparent-03);
  transition:
    border-color 300ms ease,
    background 300ms ease,
    box-shadow 300ms ease;
}

.contact-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 0;
  border-radius: 0 2px 2px 0;
  background: var(--card-accent);
  transition: height 300ms ease;
}

.contact-card:hover {
  border-color: color-mix(in srgb, var(--card-accent) 35%, transparent);
  background: var(--white-transparent-05);
  box-shadow: 0 4px 20px -6px color-mix(in srgb, var(--card-accent) 15%, transparent);
}

.contact-card:hover::before {
  height: 55%;
}

.card-subtitle {
  color: var(--text-muted-color);
  letter-spacing: 0.1em;
  transition: color 300ms ease;
}

.contact-card:hover .card-subtitle {
  color: var(--card-accent);
}

.card-text {
  color: var(--text-primary-color);
  word-break: break-word;
  line-height: 1.4;
}

.card-icon {
  border: 1px solid var(--glass-border);
  background: color-mix(in srgb, var(--card-accent) 10%, transparent);
  transition:
    background 300ms ease,
    border-color 300ms ease;
}

.contact-card:hover .card-icon {
  background: color-mix(in srgb, var(--card-accent) 18%, transparent);
  border-color: color-mix(in srgb, var(--card-accent) 30%, transparent);
}

.card-icon i {
  transition: transform 300ms ease;
}

.contact-card:hover .card-icon i {
  transform: scale(1.1);
}

.card-icon-blue {
  color: var(--text-secondary-color);
}

.card-icon-green {
  color: var(--theme-primary-color);
}

.card-icon-purple {
  color: var(--theme-secondary-color);
}

.card-icon-pink {
  color: var(--theme-secondary-color);
}

.card-icon-orange {
  color: var(--theme-primary-color);
}

.contact-card--blue {
  --card-accent: var(--text-secondary-color);
}

.contact-card--green {
  --card-accent: var(--theme-primary-color);
}

.contact-card--purple {
  --card-accent: var(--theme-secondary-color);
}

.contact-card--pink {
  --card-accent: var(--theme-secondary-color);
}

.contact-card--orange {
  --card-accent: var(--theme-primary-color);
}

.card-link {
  text-underline-offset: 4px;
}

.card-link i {
  transition: transform 220ms ease;
}

.card-link:hover i {
  transform: translateX(3px);
}
</style>

<template>
  <div class="contact-card group rounded-2xl p-5" :class="cardClass">
    <div class="flex items-center gap-4">
      <div
        class="card-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
        :class="iconClass"
      >
        <i :class="props.icon + ' text-[15px]'" />
      </div>

      <div class="min-w-0 flex-1">
        <h4
          class="card-subtitle mb-1 text-[10px] font-bold uppercase"
        >
          {{ props.title }}
        </h4>

        <a
          v-if="props.link"
          :href="props.link"
          target="_blank"
          rel="noopener noreferrer"
          class="card-text card-link block text-sm font-semibold transition-colors duration-200 hover:underline"
        >
          {{ props.text }}
          <i class="fas fa-arrow-right ml-1.5 text-[10px] opacity-60" />
        </a>
        <p v-else class="card-text text-sm font-semibold">{{ props.text }}</p>
      </div>
    </div>
  </div>
</template>
