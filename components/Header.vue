<template>
  <header>
    <nav class="container">
      <div class="brand">
        <h3 class="brand-title">BRAND</h3>
      </div>
      <aside class="header-bag">
        <div class="header-bag__item header-bag__count">
          <div class="header-bag__price">{{ price }}</div>
          <img src="~/assets/svg/bag-icon.svg" alt="bag-icon" />
          <span class="bag__item-counter">{{ countItemsInCart }}</span>
        </div>
        <div class="header-bag__item header-bag__wishlist-count">
          <img src="~/assets/svg/wishlist-icon.svg" alt="wishlist-icon" />
          <span class="bag__item-counter">{{ countWishlist }}</span>
        </div>
      </aside>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['priceInCart', 'countItemsInCart', 'countWishlist', 'cart']),

    price() {
      return new Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'EUR',
      }).format(this.priceInCart)
    },
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