import Vue from "vue";
import Vuex from "vuex";
import Actions from "./action.types";
import Mutations from "./mutation.types";
import * as API from "@/api";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {

        user:{},
        products: [],
        singleProduct:[],
        cartData: []

                              
    },
    mutations: {
    [Mutations.AUTHENTICATE_LOGIN](state,credentials){
      state.user = credentials
    },

    getAllItems(state, res){
        state.products = res.data.products
    },
    saveSingleData(state, data){
      state.singleProduct = data

    },
    singleProduct(state, data){
      state.cartData.push(data)

    }
    saveProducts(state, response) {
            state.products = response;
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
        async fetchProducts(context) {
            const response = await API.getProducts();
            context.commit("saveProducts", response.data.products);
            console.log(response.data.products);
        },
    },
      
    async [Actions.REGISTER_USER](context, newUserDetails){
      const response = await API.register(newUserDetails)
      context.commit(Mutations.AUTHENTICATE_LOGIN, response.data)      
      console.log("Register working!!",context,newUserDetails)
    },

    async getItems(context){
        const response = await API.getData()
        context.commit('getAllItems', response)
        console.log(response);
    },
    async getItem(context, id){
      const res = await API.fetchData(id)
      context.commit("saveSingleData", res.data.post)
      console.log(res);

    }
    
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
    },
});
