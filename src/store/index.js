import Vue from "vue";
import Vuex from "vuex";
import Actions from "./action.types";
import Mutations from "./mutation.types";
import * as API from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userDetails: null,
        products: [],
        singleProduct: [],
        cartData: [],
        loginError: false,
        cartListItems: [],
        page: 2,
        userOrderHistory: [],
        skateboards: [],
        clothes: [],
        accessories: [],
        userAddress: {},
        loggedIn: false,
        order: [],
    },

    mutations: {
        [Mutations.AUTHENTICATE_LOGIN](state, userData) {
            state.userDetails = userData;
        },
        [Mutations.LOGIN_FAILED](state) {
            state.loginError = true;
        },
        [Mutations.LOGIN_FAILED](state) {
            state.loginError = true;
        },
        clearUserData(state) {
            state.userDetails = {};
            API.clearToken;
        },
        sendCartData(state, data) {
            state.cartListItems.push(data);
        },

        getAllItems(state, res) {
            state.products = res.data;
        },
        saveSingleData(state, data) {
            state.singleProduct = data;
        },
        addToCart(state, product) {
            state.cartData.push(product);
        },
        saveProducts(state, response) {
            state.products = response;
        },
        saveMoreData(state, res) {
            res.forEach((product) => {
                state.products.push(product);
            });
        },
        saveSkateboards(state, res) {
            state.skateboards = res;
        },
        saveMoreSkateboards(state, res) {
            res.forEach((product) => {
                state.skateboards.push(product);
            });
        },
        saveClothes(state, res) {
            state.clothes = res;
        },
        saveMoreClothes(state, res) {
            res.forEach((product) => {
                state.clothes.push(product);
            });
        },
        saveAccessories(state, res) {
            state.accessories = res;
        },
        saveMoreAccessories(state, res) {
            res.forEach((product) => {
                state.accessories.push(product);
            });
        },
        loadMore(state) {
            state.page++;
        },
        resetPageNumber(state) {
            state.page = 2;
        },

        sendToCart(state, product) {
            state.cartData.push(product);
        },

        updateOrderHistory(state, data) {
            state.userOrderHistory = data;
        },

        replaceCartData(state, data) {
            state.cartData = data;
        },

        pushToCart(state, data) {
            state.cartData.push(data);
        },

        removeFromCart(state, id) {
            state.cartData = state.cartData.filter((item) => item.id != id);
        },
        saveUserData(state, res) {
            state.userData = res;
            state.loggedIn = true;
        },
        setOrder(state, id) {
            state.order.push(id);
        },
    },

    actions: {
        async [Actions.AUTHENTICATE](context, credentials) {
            await API.authenticate(credentials.email, credentials.password)
                .then((response) => {
                    context.commit(Mutations.AUTHENTICATE_LOGIN, response);
                })
                .catch((e) => {
                    console.log(
                        "There has been a problem while logging in: " +
                            e.message
                    );
                    context.commit(Mutations.LOGIN_FAILED);
                });
        },

        async [Actions.REGISTER_USER](context, newUserDetails) {
            await API.register(newUserDetails).then((response) => {
                context.commit(
                    Mutations.AUTHENTICATE_LOGIN,
                    response.data.user
                );
                console.log(response.data.user);
            });
        },

        async getItems(context) {
            const res = await API.getData();
            context.commit("saveProducts", res.data);
            console.log(res);
        },

        async getSkateboards(context) {
            const res = await API.getSkateboards();
            context.commit("saveSkateboards", res.data);
            console.log(res);
        },
        async getMoreSkateboards(context) {
            const res = await API.getMoreSkateboards(context.state.page);

            if (context.state.page <= 3) {
                context.commit("loadMore");
                context.commit("saveMoreSkateboards", res.data);
                console.log(res.data);
                console.log(context.state.page);
            }
        },
        async getClothes(context) {
            const res = await API.getClothes();
            context.commit("saveClothes", res.data);
            console.log(res);
        },
        async getMoreClothes(context) {
            const res = await API.getMoreClothes(context.state.page);

            if (context.state.page <= 3) {
                context.commit("loadMore");
                context.commit("saveMoreClothes", res.data);
                console.log(res.data);
                console.log(context.state.page);
            }
        },
        async getAccessories(context) {
            const res = await API.getAccessories();
            context.commit("saveAccessories", res.data);
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

                context.commit("saveMoreData", res.data);
                console.log(res.data);
                console.log(context.state.page);
            }
        },

        async fetchAllOrders(context) {
            const response = await API.OrderHistoryData();
            console.log("Api orderhistory info:", response);
            context.commit("updateOrderHistory", response.data);
        },
        async getUserData(context) {
            const res = await API.getUserData();
            context.commit("saveUserData", res.data);
            console.log("User Data: ", res.data);
        },
        async sendOrder(context, order) {
            const res = await API.sendOrder(order);
            console.log(res);
            console.log("orers that i did" + order);
        },
    },

    getters: {
        getUserDetails(state) {
            return state.userDetails;
        },
        getOrderHistory(state) {
            return state.userOrderHistory;
        },
        allProducts(state) {
            return state.products;
        },

        getAddress(state) {
            return state.userData.address;
        },
        itemsCount(state){
            return state.cartData.reduce((prev, curr) => prev + Number(curr.quantity), 0 )
        }
    },
});

