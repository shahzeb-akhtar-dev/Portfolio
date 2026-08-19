<script setup lang="ts">
defineProps<{
  heading: string
  icon?: string
}>()
</script>

<template>
  <div class="header-badge">
    <span v-if="icon" class="badge-icon">
      <i :class="icon"></i>
    </span>
    <span v-else class="badge-dot"></span>
    <span class="badge-text">{{ heading }}</span>
  </div>
</template>

<style>
.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary-color);
  background: var(--hero-badge-bg);
  border: 1px solid var(--hero-badge-border);
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(8px);
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);
}

.badge-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--theme-primary-color);
  font-size: 0.9rem;
}

.badge-text {
  line-height: 1;
}
</style>
