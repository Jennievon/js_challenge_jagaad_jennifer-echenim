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
    net_price: String;
    title: String;
    retail_price: {formatted_value: Number}
}

export interface STATE {
    products: Array<PRODUCT_ITEM>;
    // cart: {
    //     id: String
    // };
}

export interface SET_PRODUCTS_PAYLOAD {
    id: String
}

export interface FETCH_PARAMS {
  limit: number
  offset: number
}