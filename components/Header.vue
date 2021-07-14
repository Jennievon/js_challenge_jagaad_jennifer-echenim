<template>
  <header>
    <nav class="container">
      <div class="brand">
        <h3 class="brand-title">BRAND</h3>
      </div>
      <aside class="header-bag">
        <div class="header-bag__item header-bag__count">
          <div class="header-bag__price">&euro;0</div>
          <img src="~/assets/images/bag-icon.svg" alt="bag-icon" />
          <span class="bag__item-counter">0</span>
        </div>
        <div class="header-bag__item header-bag__wishlist-count">
          <img src="~/assets/images/wishlist-icon.svg" alt="wishlist-icon" />
          <span class="bag__item-counter">5</span>
        </div>
      </aside>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {}
  },
})
</script>


<style lang="scss" scoped>
header {
  height: 60px;
}
nav {
  background: var(--color-white);
  padding: 0 40px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    &-title {
      font-size: 20px;
    }
  }
  .icons {
    display: flex;
  }
}

.header-bag {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  &__item {
    height: 25px;

    display: flex;
    & .icon {
      height: auto;
      fill: #444a59;
    }
  }

  &__price {
    margin-right: 5px;
    font-size: 12px;
    line-height: 12px;
  }

  &__count {
    margin-left: 10px;
  }

  &__count .icon {
    width: 17px;
  }

  &__wishlist-count {
    margin-left: 10px;
  }
}

.bag__item-counter {
  width: 13px;
  height: 13px;
  margin-left: -1px;

  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  text-align: center;

  border-radius: 50%;
  color: #ffffff;
  background-color: #358ed7;
}
</style>