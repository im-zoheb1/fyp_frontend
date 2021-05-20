<template>
  <form class="search-bar">
    <slot></slot>
  </form>
</template>

<script></script>

<style lang="scss" scoped>
.search-bar {
  background-color: var(--white-color-2);
  display: inline-block;
  padding: 0.5rem;
  border-radius: 4px;
  max-width: 42rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  // box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.1);
}
</style>
