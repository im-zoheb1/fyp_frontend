<template>
  <section class="section">
    <div class="section-nav">
      <div class="section-nav-text">Don't have an account?</div>
      <router-link :to="{ name: 'Signup' }" tag="span">
        <cc-button class="btn btn-primary btn-xs">Sign Up</cc-button>
      </router-link>
    </div>
    <div class="section-form">
      <h2 class="section-form-title">Welcome back,</h2>
      <p class="section-form-text">
        Login with data you entered during registration.
      </p>
      <cc-form @submit.prevent="login">
        <cc-form-group>
          <cc-form-input
            class="section-form-input"
            type="text"
            label="Username"
            v-model="username"
            required
          ></cc-form-input>
        </cc-form-group>
        <cc-form-group>
          <cc-form-input
            class="section-form-input"
            type="password"
            label="Password"
            v-model="password"
            required
          ></cc-form-input>
        </cc-form-group>
        <cc-form-error v-if="failedMessage">{{ failedMessage }}</cc-form-error>
        <cc-button
          class="section-form-btn btn btn-primary btn-sm btn-100"
          :disabled="validateForm"
          :loadingStatus="loadingStatus"
          >Log In</cc-button
        >
      </cc-form>
    </div>
  </section>
</template>

<script>
import CcButton from "@/components/Button/CcButton.vue";
import CcForm from "@/components/Form/CcForm.vue";
import CcFormGroup from "@/components/Form/CcFormGroup.vue";
import CcFormInput from "@/components/Form/CcFormInput.vue";
import CcFormError from "@/components/Form/CcFormError.vue";

import { mapActions } from "vuex";

export default {
  name: "RightSection",
  components: {
    CcButton,
    CcForm,
    CcFormGroup,
    CcFormInput,
    CcFormError,
  },
  computed: {
    username: {
      get() {
        return this.$store.state.login.username;
      },
      set(value) {
        this.$store.commit("login/username", value);
      },
    },
    password: {
      get() {
        return this.$store.state.login.password;
      },
      set(value) {
        this.$store.commit("login/password", value);
      },
    },
    loadingStatus() {
      return this.$store.getters["login/loadingStatus"];
    },
    failedMessage() {
      return this.$store.getters["login/failedMessage"];
    },
    validateForm() {
      if (this.username && this.password) {
        return false;
      }
      return true;
    },
  },
  methods: {
    ...mapActions("login", ["login"]),
  },
};
</script>

<style lang="scss">
.section {
  flex: 6;
  padding: 2rem;
  height: 100%;
  background-color: var(--white-color-1);
  display: flex;
  flex-direction: column;
  &-nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    &-text {
      padding-right: 1rem;
      color: var(--black-color-light-3);
      font-size: var(--font-sm);
    }
  }

  // formm  section
  &-form {
    margin-top: 4rem;
    max-width: 42rem;
    width: 100%;
    align-self: center;
    &-title {
      font-size: var(--heading-medium);
      font-weight: var(--weight-medium);
      margin-bottom: 1rem;
    }
    &-text {
      font-size: var(--font-md);
      margin-bottom: 3rem;
      color: var(--black-color-light-3);
    }
    &-btn {
      margin-top: 2.2rem;
    }
  }
}
</style>
