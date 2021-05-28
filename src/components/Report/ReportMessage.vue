<template>
  <div class="message">{{ message }}</div>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.message {
  text-align: center;
  font-size: var(--font-lg);
}
</style>
