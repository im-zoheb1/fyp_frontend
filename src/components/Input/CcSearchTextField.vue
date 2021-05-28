<template>
  <div class="input">
    <input
      class="input-field"
      type="text"
      placeholder="Track your results"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="required"
    />
  </div>
</template>

<script>
export default {
  props: {
    required: {
      type: Boolean,
    },
    modelValue: {
      type: String,
    },
  },
  methods: {
    updateValue: function(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  display: flex;
}
.input-field {
  flex: 1;
  max-width: 100%;
  width: 100%;
  margin-right: 1rem;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0 1.5rem 0 2rem;
  font-size: var(--font-md);
  letter-spacing: var(--letter-spacing-small);
  color: var(--black-color-light-3);
  font-family: inherit;
  &::placeholder {
    color: var(--black-color-light-3);
    font-weight: var(--weight-regular);
  }
}
</style>
