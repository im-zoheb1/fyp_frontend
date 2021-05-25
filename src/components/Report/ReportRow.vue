<template>
  <div class="report-row">
    <span class="report-row-title">{{ title }}</span>
    <span class="report-row-text"><slot></slot></span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.report-row {
  display: flex;
  flex-direction: row;
  font-size: var(--font-lg);
  padding-bottom: 1rem;
  &-title {
    font-weight: var(--weight-medium);
    flex: 1;
    justify-self: flex-end;
    text-align: right;
    margin-right: 4rem;
  }
  &-text {
    flex: 1;
  }
}
</style>
