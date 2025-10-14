<template>
  <div id="footer" class="container !h-10 max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
    <div class="logo">Portfolio</div>
    <div class="copyright">@2023 Powered by Shahzeb Akhtar</div>

  </div>
</template>

<script setup lang="ts">

</script>

<style>
#footer {
  display: flex;
  justify-content: space-between;
}

#footer .logo {
  float: left;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 2rem;
  font-family: var(--logo-font-family);
  color: var(--text-black-color) !important;
}
</style>
