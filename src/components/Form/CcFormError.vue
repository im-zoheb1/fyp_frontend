<template>
  <div class="error-msg">
    <span class="iconify" data-icon="bx:bx-error" data-inline="false"></span>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.error-msg {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-size: var(--font-sm);
  color: var(--error-color);
}
.iconify {
  margin-right: 1rem;
  width: 2.2rem;
  height: 2.2rem;
}
</style>
