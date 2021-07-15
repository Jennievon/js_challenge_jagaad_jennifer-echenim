<template>
  <div>
    <Header />
    <Products :products="productList" @add-product="addProduct" />
    <Pagination
      :product-list="productList"
      :current-page="currentPage"
      :total-items="totalItems"
      :number-of-pages="numberOfPages"
      :number-per-page="numberPerPage"
      @previousPage="previousPage"
      @firstPage="firstPage"
      @goToPage="goToPage"
      @lastPage="lastPage"
      @nextPage="nextPage"
    />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Products from '~/components/Products.vue'
import Pagination from '~/components/Pagination.vue'
import { FETCH_PARAMS, PRODUCT_ITEM, SET_PRODUCTS_PAYLOAD } from '~/@types'

@Component({ components: { Products, Pagination } })
export default class Home extends Vue {
  loading: Boolean = false
  products: Array<PRODUCT_ITEM> = []
  productList: Array<PRODUCT_ITEM> = []
  currentPage: number = 1
  totalItems: number = 0
  numberOfPages: number = 0
  numberPerPage: number = 6

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
          discount: product.discount,
          description: product.description,
          formatted_value: product.retail_price.formatted_value,
          value: product.retail_price.value,
          original_retail_price: product.original_retail_price,
          uuid: product.uuid,
        }
      })
      this.numberOfPages = this.getNumberOfPages(this.products)
      this.loadProducts()
      this.loading = false
    } catch (error) {
      this.loading = false
      console.log(error)
    } finally {
      this.loading = false
    }
  }

  loadProducts() {
    const begin = (this.currentPage - 1) * this.numberPerPage
    const end = begin + this.numberPerPage
    this.productList = this.products.slice(begin, end)
    this.totalItems = this.products.length
  }

  getNumberOfPages(data: Array<PRODUCT_ITEM>) {
    return Math.ceil(data.length / this.numberPerPage)
  }

  nextPage() {
    this.currentPage += 1
    this.loadProducts()
  }

  previousPage() {
    this.currentPage -= 1
    this.loadProducts()
  }

  firstPage() {
    this.currentPage = 1
    this.loadProducts()
  }

  goToPage(page: number) {
    this.currentPage = page
    this.loadProducts()
  }

  lastPage() {
    this.currentPage = this.numberOfPages
    this.loadProducts()
  }

  addProduct(item: PRODUCT_ITEM, type: String | Number) {
    console.log(item)
  }
}
</script>
