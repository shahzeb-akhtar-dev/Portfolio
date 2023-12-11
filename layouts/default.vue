<template>
  <div>
    <a-layout>
      <a-layout-header>
        <the-header />
      </a-layout-header>
      <a-layout-content>
        <div class="body-wrapper container">
          <Nuxt />
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script>
import theHeader from "@/components/Layout/TheHeader";
export default {
  components: {
    theHeader,
  },
};
</script>

<style lang="scss">
.ant-layout {
  .ant-layout-header {
    padding: 0;
    height:fit-content;
    background-color: var(--bg-primary-color) !important;
  }
  .ant-layout-content {
    background-color: var(--bg-primary-color) !important;
  }
}
</style>
