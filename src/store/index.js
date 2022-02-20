import Vue from 'vue'
import Vuex from 'vuex'
import Actions from './action.types'
import Mutations from './mutation.types'
import * as API from '@/api'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{//name:"hjnkjk"
    },
    loginError:false
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
  modules: {
  }
})
