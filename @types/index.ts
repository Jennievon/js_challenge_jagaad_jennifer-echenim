import { NuxtAxiosInstance } from "@nuxtjs/axios";

declare module "vue/types/vue" {
    interface Vue {
        $axios: NuxtAxiosInstance;
    }
}

declare module "@nuxt/types" {
    interface NuxtAppOptions {
        $axios: NuxtAxiosInstance;
    }

    interface Context {
        $axios: NuxtAxiosInstance;
    }
}

declare module "vuex/types/index" {
    interface Store<S> {
        $axios: NuxtAxiosInstance;
    }
}

export interface PRODUCT_ITEM {
    cover_image_url: String;
    description: String;
    uuid: String;
    formatted_value: String;
    value: number;
    discount: Number,
    title: String;
    retail_price: { formatted_value: String, value: Number }
    original_retail_price: { formatted_value: String, value: Number }
}

export interface STATE {
    products: Array<PRODUCT_ITEM>;
    cart: Array<PRODUCT_ITEM>;
    wishlist: Array<String>;
}

export interface FETCH_PARAMS {
    limit: number
    offset: number
}