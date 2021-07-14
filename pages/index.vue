<template>
  <div>
    <Header />
    <Products :products="products" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { FETCH_PARAMS, PRODUCT_ITEM } from '~/@types'

@Component({ components: { Products } })
export default class Products extends Vue {
  loading: Boolean = false
  products: Array<PRODUCT_ITEM> = []

  async fetch() {
    await this.getProducts({ limit: 6, offset: 0 })
  }

  async getProducts(params: FETCH_PARAMS) {
    this.loading = true
    try {
      const request = await this.$store.dispatch('getProducts', params)
      console.log(request)
      this.products = request.data.map((product: PRODUCT_ITEM) => {
        return {
          cover_image_url: product.cover_image_url,
          title: product.title,
          description: product.description,
          net_price: product.retail_price.formatted_value,
          id: product.uuid,
        }
      })
      this.loading = false
    } catch (error) {
      this.loading = false
      console.log(error)
    } finally {
      this.loading = false
    }
  }
}
</script>
