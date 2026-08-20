<script setup lang="ts">
import { computed } from 'vue'
import { ArrowRightOutlined } from '@ant-design/icons-vue'

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
  background: var(--surface-glass);
  transition:
    border-color 300ms ease,
    background 300ms ease,
    box-shadow 300ms ease;
}

.contact-card:hover {
  border-color: color-mix(in srgb, var(--card-accent) 35%, transparent);
  background: var(--white-transparent-05);
  box-shadow: 0 4px 20px -6px color-mix(in srgb, var(--card-accent) 15%, transparent);
}

.card-title {
  color: var(--text-primary-color);
  font-weight: 700;
  font-size: 0.95rem;
}

.card-text {
  color: var(--text-muted-color);
  word-break: break-word;
  line-height: 1.4;
  font-size: 0.85rem;
}

.card-icon {
  border: 1px solid var(--glass-border);
  background: var(--glow-primary);
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
  color: var(--theme-primary-color);
}

.contact-card:hover .card-icon i {
  transform: scale(1.1);
}

.card-icon-blue,
.card-icon-green,
.card-icon-purple,
.card-icon-pink,
.card-icon-orange {
  color: var(--theme-primary-color);
}

.contact-card--blue,
.contact-card--green,
.contact-card--purple,
.contact-card--pink,
.contact-card--orange {
  --card-accent: var(--theme-primary-color);
}

.card-link {
  text-underline-offset: 4px;
}

.card-link:hover {
  color: var(--theme-primary-color);
}

.card-arrow {
  color: var(--theme-primary-color);
  transition: transform 220ms ease;
}

.contact-card:hover .card-arrow {
  transform: translateX(3px);
}
</style>

<template>
  <div class="contact-card group rounded-2xl p-5" :class="cardClass">
    <div class="flex items-center gap-4">
      <div
        class="card-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
        :class="iconClass"
      >
        <i :class="`${props.icon} text-[1.4rem]`" />
      </div>

      <div class="min-w-0 flex-1">
        <h4 class="card-title mb-0.5">
          {{ props.title }}
        </h4>

        <a
          v-if="props.link"
          :href="props.link"
          target="_blank"
          rel="noopener noreferrer"
          class="card-text card-link block transition-colors duration-200"
        >
          {{ props.text }}
        </a>
        <p v-else class="card-text">{{ props.text }}</p>
      </div>

      <ArrowRightOutlined v-if="props.link" class="card-arrow text-base" />
    </div>
  </div>
</template>
