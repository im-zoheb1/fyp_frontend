<template>
  <div class="report">
    <div class="report-title" v-if="title">{{ title }}</div>
    <div class="report-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Report",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.report {
  padding: 5rem;
  flex: 1;
  background-color: var(--white-color-2);
  max-width: 70rem;
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  overflow-y: scroll;
  box-shadow: var(--box-shadow);
  border-radius: 3px;
  &::-webkit-scrollbar {
    width: 0;
  }
  &-title {
    font-size: var(--heading-medium);
    font-weight: var(--weight-medium);
    letter-spacing: var(--letter-spacing-small);
    margin-bottom: 3rem;
    text-align: center;
  }
}
</style>
