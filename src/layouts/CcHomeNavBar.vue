<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-inner">
        <div class="navbar-logo" style="visibility: hidden;">cc-Identifier</div>
        <div class="navbar-nav">
          <router-link :to="{ name: 'Login' }" class="navbar-link"
            >LOGIN</router-link
          >
          <router-link :to="{ name: 'Signup' }" class="navbar-link">
            <cc-button classes="btn btn-white btn-sm">SIGN UP</cc-button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import CcButton from "@/components/Button/CcButton.vue";
export default {
  name: "navbar",
  components: {
    CcButton,
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  &-inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.2rem;
  }
  &-logo {
    font-family: "Lemon", cursive;
    font-size: var(--font-lg);
    color: var(--black-color);
  }
  &-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: var(--font-sm);
  }
  &-link {
    letter-spacing: var(--letter-spacing-small);
    font-weight: var(--weight-semi-bold);
    color: var(--white-color-1);
    text-decoration: none;
    &:not(:last-child) {
      margin-right: 5rem;
    }
  }
}
</style>
