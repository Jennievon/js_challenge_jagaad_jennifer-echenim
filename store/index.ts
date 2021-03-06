import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { PRODUCT_ITEM, STATE } from '~/@types/index'

export const state = (): STATE => ({
    products: [] as Array<PRODUCT_ITEM>,
    cart: [] as Array<PRODUCT_ITEM>,
    wishlist: [] as Array<String>
})

export type RootState = ReturnType<typeof state>
export const mutations: MutationTree<RootState> = {
    'SET_PRODUCTS'(state, products) {
        state.products.push(products)
    },

    addToCart(state: STATE, payload: PRODUCT_ITEM) {
        state.cart.push(payload)
    },

    removeFromCart(state: STATE, payload: PRODUCT_ITEM) {
        state.cart = state.cart.filter((item) => item.uuid !== payload.uuid)
    },

    addToWishlist(state: STATE, payload: String) {
        state.wishlist.push(payload)
    },

    removeFromWishlist(state: STATE, payload: String) {
        state.wishlist = state.wishlist.filter((item) => item !== payload)
    },

}

export const actions: ActionTree<RootState, RootState> = {
    async getProducts({ commit }, payload) {
        try {
            const request = await this.$axios.get('venues/164/activities', payload);
            commit('SET_PRODUCTS', request.data)
            return request;
        } catch (error) {
            throw new Error(error);
        }
    },
}

export const getters: GetterTree<RootState, RootState> = {
    ag: (state: STATE) => state.cart,

    priceInCart: (state: STATE) =>
        state.cart.reduce((s, item) => s + Number(item.value), 0),

    isInWishlist: (state: STATE) => (uuid: String) =>
        state.wishlist.includes(uuid),

    isInCart: (state: STATE) => (uuid: String) =>
        state.cart.some((item) => item.uuid === uuid),

    countItemsInCart: (state: STATE) => state.cart.length,

    countWishlist: (state: STATE) => state.wishlist.length,
}