<template>
  <header :class="$style.header">
    <div :class="$style.container">
      <div :class="$style.headerInner">
        <div :class="$style.textBox">
          <h1 :class="$style.headingPrimary">
            <div :class="$style.headingPrimaryMain">
              Congenital Cataract Identifier
            </div>
            <div :class="$style.headingPrimarySub">
              Artificial Intelligence platform for the collaborative management
              of congenital cataract
            </div>
          </h1>
          <!-- header search bar -->
          <header-search-bar>
            <cc-button style="btn btn-primary btn-outline">
              Track
            </cc-button>
          </header-search-bar>
        </div>
        <div :class="$style.imageBox">
          <img src="@/assets/images/rafiki.svg" alt="image" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CcButton from "@/components/Button/CcButton.vue";
import HeaderSearchBar from "@/components/SearchBar/HeaderSearchBar.vue";
export default {
  components: {
    HeaderSearchBar,
    CcButton,
  },
};
</script>

<style lang="scss" module>
.header {
  background-color: var(--primary-color);
  height: 100vh;
  &Inner {
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.textBox {
  color: var(--white-color);
}

.headingPrimary {
  max-width: 600px;
  &Main {
    font-size: var(--heading-big);
    font-weight: var(--weight-medium);
    line-height: var(--line-height-sm);
    letter-spacing: var(--letter-spacing-big);
    padding-bottom: 3rem;
  }
  &Sub {
    font-size: var(--font-lg);
    font-weight: var(--weight-regular);
    line-height: var(--line-height-lg);
    letter-spacing: var(--letter-spacing-small);
    padding-bottom: 3rem;
  }
}
</style>
