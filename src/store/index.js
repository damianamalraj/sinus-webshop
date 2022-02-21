import Vue from 'vue'
import Vuex from 'vuex'
import Actions from './action.types'
import Mutations from './mutation.types'
import * as API from '@/api'



Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:{//name:"hjnkjk"
    },
    loginError:false
  },
  mutations: {

    state: {
        user:{},
        products: [
            {
                id: 1337,
                title: "Gretas Fury",
                price: 999,
                specialEdition: true,
                shortDesc: "Unisex",
                longDesc: "Skate ipsum dolor sit amet...",
                imgFile: "skateboard-greta.png",
            },
            {
                id: 1332,
                title: "Gretas Fury",
                price: 999,
                specialEdition: true,
                shortDesc: "Unisex",
                longDesc: "Skate ipsum dolor sit amet...",
                imgFile: "skateboard-greta.png",
            },
            {
                id: 1437,
                title: "Gretas Fury",
                price: 999,
                specialEdition: true,
                shortDesc: "Unisex",
                longDesc: "Skate ipsum dolor sit amet...",
                imgFile: "skateboard-greta.png",
            },
            {
                id: 2337,
                title: "Gretas Fury",
                price: 999,
                specialEdition: true,
                shortDesc: "Unisex",
                longDesc: "Skate ipsum dolor sit amet...",
                imgFile: "skateboard-greta.png",
            },
            {
                id: 1397,
                title: "Gretas Fury",
                price: 999,
                specialEdition: true,
                shortDesc: "Unisex",
                longDesc: "Skate ipsum dolor sit amet...",
                imgFile: "skateboard-greta.png",
            },
            {
                id: 1330,
                title: "Gretas Fury",
                price: 999,
                specialEdition: true,
                shortDesc: "Unisex",
                longDesc: "Skate ipsum dolor sit amet...",
                imgFile: "skateboard-greta.png",
            },
            {
                id: 1637,
                title: "Gretas Fury",
                price: 999,
                specialEdition: true,
                shortDesc: "Unisex",
                longDesc: "Skate ipsum dolor sit amet...",
                imgFile: "skateboard-greta.png",
            },
            {
                id: 1387,
                title: "Gretas Fury",
                price: 999,
                specialEdition: true,
                shortDesc: "Unisex",
                longDesc: "Skate ipsum dolor sit amet...",
                imgFile: "skateboard-greta.png",
            },
            {
                id: 13337,
                title: "Gretas Fury",
                price: 999,
                specialEdition: true,
                shortDesc: "Unisex",
                longDesc: "Skate ipsum dolor sit amet...",
                imgFile: "skateboard-greta.png",
            },
            {
                id: 13237,
                title: "Gretas Fury",
                price: 999,
                specialEdition: true,
                shortDesc: "Unisex",
                longDesc: "Skate ipsum dolor sit amet...",
                imgFile: "skateboard-greta.png",
            },
            {
                id: 133700,
                title: "Gretas Fury",
                price: 999,
                specialEdition: true,
                shortDesc: "Unisex",
                longDesc: "Skate ipsum dolor sit amet...",
                imgFile: "skateboard-greta.png",
            },
        ],
                              
    },
    mutations: {
    [Mutations.AUTHENTICATE_LOGIN](state,credentials){
      state.user = credentials
    },
    [Mutations.LOGIN_FAILED](state){
      state.loginError = true
    }
  },
    actions: {
    async [Actions.AUTHENTICATE](context, credentials){
      try{
        // console.log("authenticate working")
        // const response = await API.login(
        //   credentials.email, credentials.password
        // )
        // API.saveToken(response.data.token)
        // context.commit(Mutations.AUTHENTICATE_LOGIN, response.data)
        // context.commit(Mutations.AUTHENTICATE_LOGIN,{name:"jgjkgjg"})
      }
      catch{
        context.commit(Mutations.LOGIN_FAILED)
      }
      
      console.log(context,credentials,API)
    },
    async [Actions.REGISTER_USER](context, newUserDetails){
      const response = await API.register(newUserDetails)
      context.commit(Mutations.AUTHENTICATE_LOGIN, response.data)      
      console.log("Register working!!",context,newUserDetails)
    }
  },
    modules: {},
}});

