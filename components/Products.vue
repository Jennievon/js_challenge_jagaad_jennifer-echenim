<template>
  <section>
    <ul class="container product-list">
      <li
        v-for="product in products"
        :key="product.uuid"
        class="product-list__item"
      >
        <div class="product-list__item--cover-image">
          <img :src="product.cover_image_url" alt="cover image" />
        </div>
        <div class="product-list__item--body">
          <h4 class="product-list__item--title">{{ product.title }}</h4>
          <p class="product-list__item--description">
            {{ product.description }}
          </p>
          <div class="product-list__item--price">
            <span
              v-if="isDiscount(product)"
              :class="isDiscount(product) ? 'strike-through' : ''"
            >
              {{ product.original_retail_price.formatted_value }}
            </span>
            <span
              class="price"
              :class="isDiscount(product) ? 'discounted-price' : ''"
            >
              {{ product.formatted_value }}
            </span>
          </div>
          <button
            class="product-list__item__add-to-cart button button--primary"
            :class="inCart(product) ? 'button--in-cart ' : ''"
            @click="addProductToCart(product)"
            data-id="item__add-to-cart"
          >
            {{ inCart(product) ? 'In Cart' : 'Add to Cart' }}
          </button>
        </div>
        <button
          class="
            product-list__item__wishlist-button
            button button--round button--wishlist
          "
          @click="toggleWishlist(product)"
          data-id="item__add-to-wishlist"
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 6 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="icon"
            :class="{ icon__active: inWishlist(product) }"
          >
            <title>Wishlist Icon</title>
            <polygon
              id="Wishlist-Icon"
              stroke="none"
              fill-rule="evenodd"
              points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"
            ></polygon>
          </svg>
        </button>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Getter, Mutation, Prop, Vue } from 'nuxt-property-decorator'
import { PRODUCT_ITEM } from '~/@types'

@Component
export default class Products extends Vue {
  @Prop() products!: Array<PRODUCT_ITEM>
  @Getter isInWishlist!: Function
  @Getter isInCart!: Function

  @Mutation addToCart!: Function
  @Mutation addToWishlist!: Function
  @Mutation removeFromWishlist!: Function

  inWishlist(product: PRODUCT_ITEM) {
    return product && this.isInWishlist(product.uuid)
  }

  inCart(product: PRODUCT_ITEM) {
    return product && this.isInCart(product.uuid)
  }

  isDiscount(product: PRODUCT_ITEM) {
    return product && product.discount > 0
  }

  toggleWishlist(product: PRODUCT_ITEM) {
    if (product) {
      this.inWishlist(product)
        ? this.removeFromWishlist(product.uuid)
        : this.addToWishlist(product.uuid)
    }
  }

  addProductToCart(item: PRODUCT_ITEM) {
    item &&
      this.addToCart({
        uuid: item.uuid,
        value: item.value,
        title: item.title,
        image: item.cover_image_url,
      })
  }
}
</script>

<style lang="scss" scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, auto));
  gap: 20px;
  &__item {
    background: var(--color-white);
    padding: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    &--cover-image {
      padding: 10px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    &--body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    &--title {
      text-transform: uppercase;
      margin: 10px 0;
      font-size: 14px;
      letter-spacing: 1.37px;
    }
    &--description {
      margin-bottom: 10px;
      font-size: 12px;
      line-height: 19px;
      letter-spacing: 0.43px;
      color: #808080;
    }
    &--price {
      margin-bottom: 10px;
      .discounted-price {
        color: #f54b5e;
        margin-left: 10px;
      }
    }
    &__wishlist-button {
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 10px;
      right: 10px;
    }

    &__add-to-cart {
      width: 100%;
    }
  }
}
</style>