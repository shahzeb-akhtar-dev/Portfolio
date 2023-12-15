<template>
  <div>
    <button class="primary-btm" :disabled="loading" @click="$emit('click')">
      <i
        v-if="loading"
        aria-label="icon: loading"
        class="anticon anticon-loading"
        ><svg
          viewBox="0 0 1024 1024"
          data-icon="loading"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          class="anticon-spin"
        >
          <path
            d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
          ></path></svg
      ></i>
      <slot> </slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.primary-btm {
  --gradient-color: linear-gradient(
    40deg,
    var(--theme-primary-color) 20%,
    var(--bg-primary-color) 53%
  );

  outline: none;
  border: 0.1rem solid #fff;
  text-shadow: 0rem 0rem 1.2rem black;
  color: var(--text-white-color);
  height: 4rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: var(--gradient-color);
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
  &:disabled:hover {
    cursor: no-drop;
    background-position: right;
    box-shadow: 0rem 0rem 1rem -0.3rem var(--box-shadow-color);
    text-shadow: 0rem 0rem 1.2rem black;
  }

  i {
    color: #beb6b6;
    font-size: 3rem;
    margin-right: 0.7rem;
    vertical-align: 0;
  }
}
// .ant-btn:not([disabled]):hover
</style>
