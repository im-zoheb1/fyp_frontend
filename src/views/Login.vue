<template>
  <div class="register">
    <cc-left-section>
      <template v-slot:text>Don't have an account?</template>
      <template v-slot:btn>Sign Up</template>
    </cc-left-section>
    <cc-login-section></cc-login-section>
  </div>
</template>

<script>
import CcLeftSection from "@/views/Register/CcLeftSection.vue";
import CcLoginSection from "@/views/Register/CcLoginSection.vue";

export default {
  name: "Login",
  components: {
    CcLeftSection,
    CcLoginSection,
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
