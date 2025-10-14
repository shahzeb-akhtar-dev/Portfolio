<script setup lang="ts">
defineProps<{
  heading: string
  icon: string
}>()
</script>

<template>
  <div class="header-badge">
    <div class="badge-pulse"></div>
    <i :class="icon"></i>
    <span>{{ heading }}</span>
  </div>
</template>

<style>
.header-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(255, 90, 1, 0.1) 0%,
    rgba(255, 90, 1, 0.05) 100%
  );
  border: 2px solid rgba(255, 90, 1, 0.3);
  border-radius: 100px;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: var(--theme-primary-color);
  overflow: hidden;
}

.badge-pulse {
  position: absolute;
  width: 10px;
  height: 10px;
  background: var(--theme-primary-color);
  border-radius: 50%;
  left: 1.5rem;
  animation: pulse-grow 2s ease-in-out infinite;
}

@keyframes pulse-grow {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(2);
    opacity: 0;
  }
}

.header-badge i {
  font-size: 1.1rem;
  z-index: 1;
}
</style>
