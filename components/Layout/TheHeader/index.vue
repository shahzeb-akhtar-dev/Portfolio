<template>
  <div id="main-header-wrapper" class="container">
    <div class="Header-title">
      <div class="logo">Portfolio</div>

      <div class="actions">
        <a-switch default-checked>
          <a-icon slot="checkedChildren" type="check" />
          <a-icon slot="unCheckedChildren" type="close" />
        </a-switch>
      </div>
    </div>
    <div class="menu">
      <ul>
        <li><a href="#hero-section">Home</a></li>
        <li><a href="#about-me">About</a></li>
        <li><a href="#my-skill">Skill</a></li>
        <li><a href="#my-work">Portfolio</a></li>
        <li><a href="#contact-info">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#main-header-wrapper {
  // position: relative;
  text-align: center;
  .Header-title {
    .logo {
      float: left;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 4rem;
      font-family: var(--logo-font-family);
      color: var(--text-black-color) !important;
    }
    .actions {
      float: right;
    }
  }
  .menu {
    display: inline-block;
    // position: absolute;
    ul {
      padding: 0%;
      margin: 0%;
      display: flex;
      align-items: center;
      li {
        padding: 0rem 0.5rem;
        list-style: none;
        a {
          padding: 1rem;
          color: var(--text-black-color) !important;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
