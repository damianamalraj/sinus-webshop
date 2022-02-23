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
    loginError: false,
    cartListItems: [],
  },

  mutations: {
    [Mutations.AUTHENTICATE_LOGIN](state, userData) {
      state.user = userData
    },
    [Mutations.LOGIN_FAILED](state) {
      state.loginError = true
    },
    clearUserData(state) {
      state.user = {}
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
    singleProduct(state, data) {
      state.cartData.push(data);
    },
    saveProducts(state, response) {
      state.products = response;
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
      const response = await API.getData();
      context.commit("getAllItems", response);
      console.log(response);
    },
    async [Actions.REGISTER_USER](context, newUserDetails) {
      const response = await API.register(newUserDetails)
      context.commit(Mutations.AUTHENTICATE_LOGIN, response.data)
      console.log("Register working!!", context, newUserDetails)
    },
    async getItem(context, id) {
      const res = await API.fetchData(id)
      context.commit("saveSingleData", res.data.post)
      console.log(res);
    },
    /*  addToCart(){
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
      
     } */
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
      if (state.products)
        return state.products.filter((product) => {
          return product.category == "cap";
        });
      else
        return state.products
    }
  },
});

