<template>
  <section class="section">
    <div class="section-nav">
      <div class="section-nav-text">Already have an account?</div>
      <router-link :to="{ name: 'Login' }" tag="span">
        <cc-button class="btn btn-primary btn-xs">Sign In</cc-button>
      </router-link>
    </div>
    <div class="section-form">
      <h2 class="section-form-title">Welcome,</h2>
      <cc-form @submit.prevent="registerUser">
        <cc-form-group>
          <cc-form-input
            v-model="username"
            class="section-form-input"
            type="text"
            label="Username"
            required
          ></cc-form-input>
        </cc-form-group>
        <cc-form-group>
          <cc-form-input
            v-model="email"
            type="email"
            class="section-form-input"
            label="Email address"
            required
          ></cc-form-input>
        </cc-form-group>
        <cc-form-group>
          <cc-form-input
            v-model="organization"
            class="section-form-input"
            type="text"
            label="Organization"
            required
          ></cc-form-input>
        </cc-form-group>
        <cc-form-group>
          <cc-form-input
            v-model="address"
            class="section-form-input"
            type="text"
            label="Address"
            required
          ></cc-form-input>
        </cc-form-group>
        <cc-form-group>
          <cc-form-input
            v-model="password"
            class="section-form-input"
            type="password"
            label="Password"
            required
          ></cc-form-input>
        </cc-form-group>
        <cc-form-group>
          <cc-form-input
            v-model="confirmPassword"
            class="section-form-input"
            :pattern="password"
            type="password"
            label="Confirm password"
            required
          ></cc-form-input>
        </cc-form-group>
        <cc-form-error v-if="failedMessage">{{ failedMessage }}</cc-form-error>
        <cc-button
          :disabled="validateForm || !comparePassword || !validateEmail"
          :loadingStatus="loadingStatus"
          class="section-form-btn btn btn-primary btn-sm btn-100"
          >Sign Up</cc-button
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
        return this.$store.state.signUp.username;
      },
      set(value) {
        this.$store.commit("signUp/username", value);
      },
    },
    email: {
      get() {
        return this.$store.state.signUp.email;
      },
      set(value) {
        this.$store.commit("signUp/email", value);
      },
    },
    organization: {
      get() {
        return this.$store.state.signUp.organization;
      },
      set(value) {
        this.$store.commit("signUp/organization", value);
      },
    },
    address: {
      get() {
        return this.$store.state.signUp.address;
      },
      set(value) {
        this.$store.commit("signUp/address", value);
      },
    },
    password: {
      get() {
        return this.$store.state.signUp.password;
      },
      set(value) {
        this.$store.commit("signUp/password", value);
      },
    },
    confirmPassword: {
      get() {
        return this.$store.state.signUp.confirmPassword;
      },
      set(value) {
        this.$store.commit("signUp/confirmPassword", value);
      },
    },
    loadingStatus() {
      return this.$store.getters["signUp/loadingStatus"];
    },
    failedMessage() {
      return this.$store.getters["signUp/failedMessage"];
    },
    validateForm() {
      if (
        this.username &&
        this.email &&
        this.organization &&
        this.address &&
        this.password &&
        this.confirmPassword
      ) {
        return false;
      }
      return true;
    },
    comparePassword() {
      if (this.password == this.confirmPassword) return true;
      return false;
    },
    validateEmail() {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          this.email
        )
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    ...mapActions("signUp", ["registerUser"]),
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
  overflow-y: scroll;
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
    margin-top: 2rem;
    max-width: 42rem;
    width: 100%;
    align-self: center;
    height: 100%;
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
      margin-bottom: 5rem;
    }
  }
}
</style>
