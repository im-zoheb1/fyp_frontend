<template>
  <div class="register">
    <cc-left-section>
      <template v-slot:text>Already have an account?</template>
      <template v-slot:btn>
        <cc-button
          @click="$router.push('/login')"
          class="btn btn-outline btn-white btn-md"
          >Sign In</cc-button
        >
      </template>
    </cc-left-section>
    <cc-signup-section></cc-signup-section>
  </div>
</template>

<script>
import CcLeftSection from "@/views/Register/CcLeftSection.vue";
import CcSignupSection from "@/views/Register/CcSignupSection.vue";
import CcButton from "@/components/Button/CcButton.vue";

export default {
  name: "Login",
  components: {
    CcLeftSection,
    CcSignupSection,
    CcButton,
  },
};
</script>

<style>
.register {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
}
</style>

// box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0
1px 5px 0 rgb(0 0 0 / 12%)
