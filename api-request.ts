import { Context } from "@nuxt/types"
import { FETCH_PARAMS } from "./@types"

export default (ctx: Context) => ({
    getProducts(payload: FETCH_PARAMS) {
        return ctx.$axios.get('', {
            params: payload
        })
    }
})