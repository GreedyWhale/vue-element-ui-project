<template>
  <button class="base-button">
    <BaseIcon :config="config" />
    <slot></slot>
  </button>
</template>
<script>
export default {
  data () {
    return {}
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
<style lang="scss" scoped>
.base-button {
  padding: .5em 1em;
  font-size: inherit;
  border-radius: 4px;
  border: 1px solid #dcdfdc;
  color: #606256;
  display: inline-flex;
  vertical-align: middle;
  cursor: pointer;
  align-items: center;
  &:hover {
    border: 1px solid #c7e3fe;
    background: #ecf5ff;
    color: #46a0fc;
  }
  &:focus {
    outline: none;
  }
  &:active {
    border-color: #486f96;
    color: #486f96;
  }
}
</style>
