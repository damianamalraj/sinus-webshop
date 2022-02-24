import Vue from "vue";
import Vuex from "vuex";
import Actions from "./action.types";
import Mutations from "./mutation.types";
import * as API from "@/api";


Vue.use(Vuex);

export default new Vuex.Store({
   state: {
        userDetails: {},
        products: [],
        singleProduct: [],
        cartData: [],
        loginError: false,
        cartListItems: [],
        page: 2,
    },
  
  mutations: {
    [Mutations.AUTHENTICATE_LOGIN](state, userData) {
      state.userDetails = userData
    },
    [Mutations.LOGIN_FAILED](state) {
      state.loginError = true
    },
    
    clearUserData(state) {
      state.userDetails = {}
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
        getAllItems(state, res) {
          state.products = res.data;
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
          await API.authenticate(credentials.email, credentials.password)
          .then(response => {
          context.commit(Mutations.AUTHENTICATE_LOGIN, response)
        })
        .catch(e => {
          console.log('There has been a problem while logging in: ' + e.message)
          context.commit(Mutations.LOGIN_FAILED)
        });
    },

         async[Actions.REGISTER_USER](context, newUserDetails) {
      await API.register(newUserDetails)
        .then(response => {
          context.commit(Mutations.AUTHENTICATE_LOGIN, response.data.user)
          console.log("after registering:", response.data.user)
        })
    },

        async getItems(context) {
            const res = await API.getData();
            context.commit("saveProducts", res.data.products);
            console.log(res);

        },
        async [Actions.REGISTER_USER](context, newUserDetails){
            const response = await API.register(newUserDetails)
            context.commit(Mutations.AUTHENTICATE_LOGIN, response.data)      
            console.log("Register working!!",context,newUserDetails)
          },
          async getItem(context, id){
            const res = await API.fetchData(id)
            context.commit("saveSingleData", res.data.post)
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
        getUserDetails(state){
          return state.userDetails
        }
    },

    
});

