import { GetterTree, ActionTree, MutationTree } from 'vuex'
import  { PRODUCT_ITEM, STATE } from '~/@types/index'

export const state = (): STATE => ({
    products: [] as Array<PRODUCT_ITEM>,
    // cart: {},
})

export type RootState = ReturnType<typeof state>
export const mutations: MutationTree<RootState> = {
    'SET_PRODUCTS'(state, products) {
        state.products.push(products)
    },
    // 'SET_CART'(state: STATE, payload: SET_PRODUCTS_PAYLOAD) {
    //     if (state.cart[payload.id.]) {
    //         state.cart[payload.id].quantity = state.cart[payload.id].quantity + 1
    //     } else {
    //         state.cart[payload.id] = {
    //             ...payload,
    //             quantity: 1
    //         }
    //     }
    // }

}

export const actions: ActionTree<RootState, RootState> = {
    async getProducts({ commit }, payload) {
        const request = await this.$axios.get('venues/164/activities', payload);
        return request;

        // const products = request.map((product: PRODUCT_ITEM) => {
        //     return {
        //         cover_image_url: product.cover_image_url,
        //         title: product.title,
        //         description: product.description,
        //         net_price: product.retail_price.formatted_value,
        //         id: product.uuid,
        //     };
        // });
        // commit('SET_PRODUCTS', products)
    },
    // setCart({ commit }, payload) {
    //     commit('SET_CART', payload)
    // }
}

export const getters: GetterTree<RootState, RootState> = {

}