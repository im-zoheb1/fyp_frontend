<template>
  <header class="header">
    <cc-home-nav-bar></cc-home-nav-bar>
    <div class="container">
      <div class="header-inner">
        <div class="text-box">
          <h1 class="heading-primary">
            <div class="heading-primary-main">
              Congenital Cataract Identifier
            </div>
            <div class="heading-primary-sub">
              Artificial Intelligence platform for the collaborative management
              of congenital cataract
            </div>
          </h1>
          <!-- header search bar -->
          <header-search-bar>
            <cc-search-text-field></cc-search-text-field>
            <cc-button classes="btn btn-secondary btn-md">
              Track
            </cc-button>
          </header-search-bar>
        </div>
        <div class="image-box">
          <img src="@/assets/images/amico.png" alt="image" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CcButton from "@/components/Button/CcButton.vue";
import CcSearchTextField from "@/components/Input/CcSearchTextField.vue";
import CcHomeNavBar from "@/layouts/CcHomeNavBar.vue";

import HeaderSearchBar from "@/components/SearchBar/HeaderSearchBar.vue";
export default {
  components: {
    HeaderSearchBar,
    CcButton,
    CcSearchTextField,
    CcHomeNavBar,
  },
};
</script>

<style lang="scss" scoped>
.header {
  // background-color: var(--primary-color);
  height: 100vh;
  background-image: linear-gradient(
    75deg,
    var(--white-color-1) 70%,
    var(--primary-color) 50%
  );
  &-inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    margin-top: 6rem;
  }
}

.text-box {
  color: var(--black-color);
  width: 100%;
}

.heading-primary {
  &-main {
    font-size: var(--heading-big);
    font-weight: var(--weight-bold);
    line-height: var(--line-height-sm);
    letter-spacing: var(--letter-spacing-big);
    font-family: "Poppins", sans-serif;
    padding-bottom: 2.5rem;
    max-width: 55rem;
  }
  &-sub {
    font-size: var(--font-md);
    font-weight: var(--weight-medium);
    line-height: var(--line-height-lg);
    letter-spacing: var(--letter-spacing-small);
    padding-bottom: 3.5rem;
    max-width: 66rem;
  }
}
.image-box {
  img {
    min-width: 37rem;
    width: 100%;
  }
}
</style>
