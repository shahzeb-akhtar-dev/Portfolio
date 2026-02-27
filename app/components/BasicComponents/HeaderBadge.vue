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
  @apply relative flex items-center mx-auto md:mx-0 w-fit gap-3 px-8 py-3 rounded-full mb-8 text-sm font-extrabold tracking-widest text-[var(--theme-primary-color)] overflow-hidden;
 
  background: var(--hero-badge-bg);
  border: 2px solid var(--hero-badge-border);
  
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
