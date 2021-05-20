<template>
  <div class="form-input">
    <div class="form-input-label">
      <label>{{ label }}</label>
      <div
        v-if="type == 'password'"
        style="visibility: hidden"
        class="form-forgot-password"
      >
        Forgot password?
      </div>
    </div>
    <input
      class="form-input-field"
      :type="type"
      :placeholder="label"
      :required="required"
    />
    <div class="form-input-error" style="visibility: hidden;">something</div>
  </div>
</template>
<script>
export default {
  name: "FormInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
    },
  },
};
</script>
<style lang="scss" scoped>
.form-input {
  display: flex;
  flex-direction: column;
  &-label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;
    font-size: var(--font-xs);
    font-weight: var(--weight-medium);
    // letter-spacing: var(--letter-spacing-small);
    color: var(--black-color-light-3);
  }
}
.form-input-field {
  border: none;
  outline: none;
  font-size: var(--font-sm);
  padding: 1.2rem 1.6rem;
  font-family: inherit;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  letter-spacing: var(--letter-spacing-small);
  &::placeholder {
    color: #999;
  }
}
.form-forgot-password {
  color: var(--primary-dark-color);
}
</style>
