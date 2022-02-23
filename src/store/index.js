import Vue from 'vue'
import Vuex from 'vuex'
import Actions from './action.types'
import Mutations from './mutation.types'
import * as API from '@/api'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
    },
    loginError: false,
    products: [],

  },
  mutations: {
    [Mutations.AUTHENTICATE_LOGIN](state, userData) {
      state.user = userData
    },
    [Mutations.LOGIN_FAILED](state) {
      state.loginError = true
    },
    clearUserData(state){
      state.user={}
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
          console.log("after registering:", response.data.user)
        })
    },
  }
});

