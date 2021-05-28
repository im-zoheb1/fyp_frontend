<template>
  <div class="verification">
    <cc-navbar logo></cc-navbar>
    <div class="verification-inner">
      <div class="verification-box">
        <cc-loader v-if="loadingStatus"></cc-loader>
        <div class="verification-text" v-if="message">{{ message }}</div>
        <cc-button
          class="btn btn-secondary btn-sm"
          @click="sendConfirmation($route.params.username)"
          v-if="message.startsWith('C') && message"
        >
          Resend
        </cc-button>
      </div>
    </div>
  </div>
</template>

<script>
import CcButton from "@/components/Button/CcButton.vue";
import CcNavbar from "@/layouts/CcHomeNavBar.vue";
import CcLoader from "@/components/CcLoader.vue";

import { mapActions } from "vuex";

export default {
  components: {
    ccButton: CcButton,
    ccNavbar: CcNavbar,
    ccLoader: CcLoader,
  },
  computed: {
    message() {
      return this.$store.getters["verification/message"];
    },
    loadingStatus() {
      return this.$store.getters["verification/loadingStatus"];
    },
  },
  methods: {
    ...mapActions("verification", ["sendConfirmation"]),
  },
  mounted() {
    this.sendConfirmation(this.$route.params.username);
  },
};
</script>

<style lang="scss" scoped>
.verification {
  background: linear-gradient(
    to right bottom,
    var(--primary-color),
    var(--primary-dark-color)
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  &-inner {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-box {
    margin-top: -10rem;
    background-color: var(--white-color-1);
    width: 100%;
    max-width: 60rem;
    text-align: center;
    padding: 4rem;
    border-radius: 5px;
  }
  &-text {
    margin-bottom: 2rem;
    font-size: var(--font-md);
  }
}
</style>
