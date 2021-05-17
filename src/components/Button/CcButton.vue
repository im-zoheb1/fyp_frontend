<template>
  <button type="submit" class="btn">
    <slot>Submit</slot>
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style lang="scss" scoped>
.btn {
  background-color: var(--primary-color);
}
// .btn {
//   padding: 0.8rem 2.2rem;
//   outline: none;
//   border: none;
//   border-radius: 3px;
//   font-size: var(--font-md);
// }
// .btn-primary {
// }
// .btn-outline {
// }
// .btn-lg {
// }
</style>
