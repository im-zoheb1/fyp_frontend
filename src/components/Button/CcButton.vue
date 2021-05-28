<template>
  <button type="submit" :disabled="disabled || loadingStatus" :class="classes">
    <span v-if="!loadingStatus"><slot>Submit</slot></span>
    <cc-loader-row v-if="loadingStatus"></cc-loader-row>
  </button>
</template>

<script>
import CcLoaderRow from "@/components/CcLoaderRow.vue";
export default {
  name: "Button",
  props: {
    classes: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loadingStatus: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ccLoaderRow: CcLoaderRow,
  },
};
</script>

<style lang="scss" scoped>
.btn {
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: var(--weight-semi-bold);
  letter-spacing: var(--letter-spacing-small);
  font-family: inherit;
  &:disabled {
    background: var(--disabled-color);
    cursor: not-allowed;
  }
  &-primary {
    background: linear-gradient(
      to right,
      var(--primary-color),
      var(--primary-dark-color)
    );
    color: var(--white-color-1);
  }
  &-secondary {
    background-color: var(--accent-color);
    color: var(--white-color-1);
  }
  &-white {
    background-color: var(--white-color-1);
    color: var(--primary-color);
  }
  &-md {
    padding: 0.8rem 2.5rem;
    font-size: var(--font-md);
  }
  &-sm {
    padding: 1rem 2rem;
    font-size: var(--font-sm);
  }
  &-xs {
    padding: 1rem 1.6rem;
    font-size: var(-font-xs);
  }
  &-100 {
    width: 100%;
  }
}
.btn-primary {
}
.btn-outline {
}
.btn-lg {
}
</style>
