<template>
  <div id="footer" class="!h-10 px-4 py-2 ">
    <div class="max-w-7xl w-full mx-auto flex items-center justify-between">
      <div class="logo">
        <img
          :src="isDark ? '/images/dark-logo.png' : '/images/light-logo.png'"
          class="h-[3rem] py-1"
          alt="logo"
        />
      </div>
      <div class="copyright">
        @{{ new Date().getFullYear() }} Powered by Shahzeb Akhtar
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { isDark } = useTheme()
</script>

<style>
#footer {
  display: flex;
  justify-content: space-between;
}

#footer {
  background-color: var(--bg-secondary-color);
  border-top: 1px solid var(--border-color);
}

#footer .logo {
  float: left;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 2rem;
  font-family: var(--logo-font-family);
  color: var(--text-primary-color) !important;
}

#footer .copyright {
  color: var(--text-muted-color);
}
</style>
