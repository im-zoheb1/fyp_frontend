<template>
  <div class="instructions">
    <div class="instructions-img">
      <img src="@/assets/images/register-img.png" />
    </div>
    <p class="instructions-text">
      <slot name="text"></slot>
    </p>
    <cc-button class="btn btn-outline btn-white btn-md">
      <slot name="btn"></slot>
    </cc-button>
  </div>
</template>

<script>
import CcButton from "@/components/Button/CcButton.vue";
export default {
  name: "Instructions",
  components: {
    CcButton,
  },
  props: ["path"],
};
</script>

<style scoped lang="scss">
.instructions {
  background: linear-gradient(
    to right,
    var(--primary-color),
    var(--primary-dark-color)
  );
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &-img {
    margin-bottom: 3rem;
    img {
      max-width: 30rem;
      width: auto;
    }
  }
  &-text {
    margin-bottom: 3rem;
    font-size: var(--font-lg);
    font-weight: var(--weight-regular);
    color: var(--white-color-1);
  }
}
</style>
