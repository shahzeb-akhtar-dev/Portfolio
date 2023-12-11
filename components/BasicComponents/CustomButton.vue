<template>
  <div>
    <button class="primary-btm" @click="$emit('click')">
      <slot> </slot>
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.primary-btm {
    --gradient-color:linear-gradient(40deg, var(--theme-primary-color) 20%, var(--bg-primary-color) 53%);

    outline: none;
    border: 0.1rem solid #fff;
    text-shadow: 0rem 0rem 1.2rem black;
    color: var(--text-white-color);
    height: 4rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background:var(--gradient-color) ;
    background-size: 240% 200%;
    font-size: 1.8rem;
    font-weight: 500;
    box-shadow: 0rem 0rem 1rem -0.3rem var(--box-shadow-color);
    background-position: right;
    transition: all 0.3s ease-out;
    text-transform: uppercase;
  &:hover {
    border: 0.1rem solid var(--gradient-color);
    box-shadow: none;
    text-shadow: none;
    background-position: left;
    color: var(--text-white-color);
  }
}
// .ant-btn:not([disabled]):hover
</style>
