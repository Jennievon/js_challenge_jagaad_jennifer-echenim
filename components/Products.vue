<template>
    <section>
        <ul class="container product-list">
            <li v-for="product in products" :key="product.id" class="product-list__item">
                <div class="product-list__item--cover-image">
                    <img :src="product.cover_image_url" alt="cover image">
                </div>
                <div>
                    <h4 class="product-list__item--title">{{product.title}}</h4>
                    <p class="product-list__item--description">{{product.description}}</p>
                </div>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import { Prop, Vue } from 'nuxt-property-decorator'
import { PRODUCT_ITEM } from '~/@types'

export default class Products extends Vue {
    @Prop() products!: Array<PRODUCT_ITEM>
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

            &--cover-image {
                padding: 10px;
                overflow: hidden;
                img {
                    width: 100%;
                }
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
        }
    }
</style>