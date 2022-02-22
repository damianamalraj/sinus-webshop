import Vue from 'vue'
import Vuex from 'vuex'
import Actions from './action.types'
import Mutations from './mutation.types'
import * as API from '@/api'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name:""
     },
    loginError: false,
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
    [Mutations.AUTHENTICATE_LOGIN](state, userData) {
      state.user.name = userData.name
    },
    [Mutations.LOGIN_FAILED](state) {
      state.loginError = true
    }
  },
  actions: {
   async [Actions.AUTHENTICATE](context, credentials) {
        await API.login(credentials.email, credentials.password)
        .then(response => {
          console.log(response.data.token)
          API.saveToken(response.data.token)
          API.getUserData()
        } )
        .then(response=>{
          console.log("getuserdata",response)
          context.commit(Mutations.AUTHENTICATE_LOGIN,response.data)
        })
        .catch(e => {
          console.log('There has been a problem with your fetch operation: ' + e.message)
          context.commit(Mutations.LOGIN_FAILED)
        });
    },
    async [Actions.REGISTER_USER](context, newUserDetails) {
      const response = await API.register(newUserDetails)
      context.commit(Mutations.AUTHENTICATE_LOGIN, response.data)
      console.log("Register working!!", context, newUserDetails)
    },
  }
});

