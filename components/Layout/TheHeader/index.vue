<template>
  <div id="main-header-wrapper" class="container">
    <div class="Header-title">
      <div class="logo">Portfolio</div>
    </div>
    <div class="menu">
      <ul>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Skill</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <div class="actions">
      <a-switch default-checked>
        <a-icon slot="checkedChildren" type="check" />
        <a-icon slot="unCheckedChildren" type="close" />
      </a-switch>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#main-header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .Header-title {
    .logo {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 4rem;
      font-family: var(--logo-font-family);
      color: black !important;
    }
  }
  .menu {
    ul {
      margin: 0%;
      display: flex;
      align-items: center;
      li {
        padding: 0rem 0.5rem;
        list-style: none;
        a {
          padding: 1rem;
          color: black !important;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
