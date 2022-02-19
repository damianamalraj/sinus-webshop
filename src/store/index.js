import Vue from 'vue'
import Vuex from 'vuex'
import Actions from './action.types'
import Mutations from './mutation.types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{}
  },
  mutations: {
    [Mutations.AUTHENTICATE_LOGIN](state,credentials){
      state.user = credentials
    }
  },
  actions: {
    async [Actions.AUTHENTICATE](context, credentials){
      console.log("authenticate working")
      // const response = await API.login(
      //   credentials.email, credentials.password
      // )
      // API.saveToken(response.data.token)
      // context.commit('saveAuthData', response.data)  
      context.commit(Mutations.AUTHENTICATE_LOGIN, credentials)
    },
    async [Actions.REGISTER_USER](context, newUserDetails){
      console.log("Register working!!",context,newUserDetails)
      // context.commit(Mutations.)
    }
  },
  modules: {
  }
})
