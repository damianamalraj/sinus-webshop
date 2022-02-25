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
        userOrderHistory: []
    },

    mutations: {
        [Mutations.AUTHENTICATE_LOGIN](state, userData) {
            state.userDetails = userData
        },

        getAllItems(state, res) {
            state.products = res.data;
},

        [Mutations.LOGIN_FAILED](state) {
            state.loginError = true
        },

        clearUserData(state) {
            state.userDetails = {}
            API.clearToken
        },
        sendCartData(state, data) {
            state.cartListItems.push(data);

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


         sendToCart(state, product){
           state.cartData.push(product)
        
        },

        updateOrderHistory(state, data) {
            state.userOrderHistory = data
        }

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
                    console.log(response.data.user)
                })

        },

        async getItems(context) {
            const res = await API.getData();
            context.commit("saveProducts", res.data);
            console.log(res);

        },

        async getItem(context, id) {

            const res = await API.fetchData(id)
            context.commit("saveSingleData", res.data.post)
            console.log(res);
        },
        
        addToCart(){
          let products = window.localStorage.getItem('products')
          if(products){
            let productsArray = JSON.parse(products)
            let matchedProduct = productsArray.find(item => item.id == this.product.id)
            if(matchedProduct){
              matchedProduct.quantity++
              console.log(matchedProduct);
              
            }else{
              productsArray.push({...this.product, quantity: 1})
  
            }
  
            window.localStorage.setItem('products', JSON.stringify(productsArray))
          }else{
            const productsArray = []
            productsArray.push({...this.product, quantity: 1})
            window.localStorage.setItem('products', JSON.stringify(productsArray))
          }
         
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
            console.log("Api orderhistory info:", response)
            context.commit('updateOrderHistory', response.data)
        }
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
        getUserDetails(state) {
            return state.userDetails
        },
        getOrderHistory(state) {
            return state.userOrderHistory
        }
    },

});

