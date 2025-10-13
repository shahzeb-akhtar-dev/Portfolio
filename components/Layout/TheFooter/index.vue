<template>
  <div id="footer" class="container">
    <div class="logo">Portfolio</div>
    <div class="copyright">@2023 Powered by Shahzeb Akhtar</div>

  </div>
</template>

<script>
export default {

 
}
</script>

<style lang="scss">
#footer {
  display: flex;
  justify-content: space-between;
  .logo {
    float: left;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2rem;
    font-family: var(--logo-font-family);
    color: var(--text-black-color) !important;
  }

}
</style>
