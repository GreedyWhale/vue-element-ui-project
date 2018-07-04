<template>
  <svg
    class="base-icon"
    aria-hidden="true"
    :data-is-loading="config.isLoading"
    :data-position="config.position"
  >
    <use :xlink:href="`#i-${config.isLoading ? 'loading' : config.iconName}`"></use>
  </svg>
</template>
<script>
export default {
  computed: {
    
  },
  props: {
    config: {
      type: Object,
      default() {
        return {
          iconName: '',
          isLoading: false,
          position: 'left'
        }
      }
    }
  }
}
</script>
<style lang="scss">
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .base-icon {
    height: 1em;
    width: 1em;
    margin-right: 10px;
    &[data-is-loading='true'] {
      animation: loading 1s infinite linear;
    }
    &[data-position='right'] {
      order: 1;
      margin-left: 10px;
      margin-right: 0;
    }
  }
</style>
