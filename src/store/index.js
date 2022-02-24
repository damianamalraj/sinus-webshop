import Vue from "vue";
import Vuex from "vuex";
import Actions from "./action.types";
import Mutations from "./mutation.types";
import * as API from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
        products: [],
        singleProduct: [],
        cartData: [],
        cartListItems: [],
        page: 2,
    },
    mutations: {
        [Mutations.AUTHENTICATE_LOGIN](state, credentials) {
            state.user = credentials;
        },

        sendCartData(state, data) {
            state.cartListItems.push(data);
        },

        saveSingleData(state, data) {
            state.singleProduct = data;
        },
        singleProduct(state, data) {
            state.cartData.push(data);
        },
        saveProducts(state, response) {
            state.products = response;
        },
        saveMoreData(state, res) {
            res.forEach((product) => {
                state.products.push(product);
            });
        },
        loadMore(state) {
            state.page++;
        },
        resetPageNumber(state) {
            state.page = 2;
        },
    },

    actions: {
        async [Actions.AUTHENTICATE](context, credentials) {
            // console.log("authenticate working")
            // const response = await API.login(
            //   credentials.email, credentials.password
            // )
            // API.saveToken(response.data.token)
            // context.commit(Mutations.AUTHENTICATE_LOGIN, response.data)

            console.log(context, credentials, API);
        },

        async [Actions.REGISTER_USER](context, newUserDetails) {
            const response = await API.register(newUserDetails);
            context.commit(Mutations.AUTHENTICATE_LOGIN, response.data);
            console.log("Register working!!", context, newUserDetails);
        },

        async getItems(context) {
            const res = await API.getData();
            context.commit("saveProducts", res.data.products);
            console.log(res);
        },
        async getItem(context, id) {
            const res = await API.fetchData(id);
            context.commit("saveSingleData", res.data.post);
            console.log(res);
        },
        async getMoreData(context) {
            const res = await API.fetchMore(context.state.page);

            if (context.state.page <= 4) {
                context.commit("loadMore");
                context.commit("saveMoreData", res.data.products);
                console.log(res.data.products);
                console.log(context.state.page);
            }
        },
    },

    modules: {},
    getters: {
        skateboards(state) {
            return state.products.filter((product) => {
                return product.category == "skateboard";
            });
        },
        clothes(state) {
            return state.products.filter((product) => {
                return product.category == "hoodie";
            });
        },
        accessories(state) {
            return state.products.filter((product) => {
                return product.category == "cap";
            });
        },

        addToCart(context, data) {
            context.commit("sendCartData", data);
        },
    },
});
