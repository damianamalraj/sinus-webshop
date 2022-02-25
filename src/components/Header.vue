<template>
  <div class="header">
      <div class="headerLeft">
        <div >
          <router-link to="/" class="logo">
             Sinus
          </router-link> 
        </div>
        
        <div>
          <router-link to="/">
            <img src="../assets/home.svg" alt="">
          </router-link> 
        </div>
      </div>

      <div class="headerRight">
        <div>
          <input placeholder="SEARCH YOUR PRODUCT" type="text">
        </div>
        <div>Contact us</div>

        <div >
          <router-link ref="login-element" v-if="!userInfo" to="/login" class="login">
             {{loginStatus}}
          </router-link> 
          <button ref="login-element" v-else @click="logout" class="login">
             {{loginStatus}}
          </button> 
        </div>

       <div>
          <router-link to="/wishList">
            <img src="../assets/heart.svg" alt="">
          </router-link> 
        </div>

       <div>
          <router-link to="/myaccount">
          <p v-if="userInfo">{{userInfo.name}}</p>
          <img v-else src="../assets/profile.svg" alt="prpic">
          </router-link> 
        </div>

      <div>
          <router-link to="/cart">
            <img src="../assets/cart.svg" alt="">
          </router-link> 
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){return{
  }},
  computed:{
    userInfo(){
      return this.$store.getters.getUserDetails
    },
    loginStatus(){
      if(this.userInfo){
        return "Logout"
      }
      return "Login"
    }
  },
  
  methods:{
    logout(){
      this.$store.commit('clearUserData')
      this.$router.push({ name: "Home" });
    }
  }
}
</script>

<style >

  .logo, .login{
    text-decoration: none;
    
  }

  input{
    width: 15rem;
    text-align: center;
  }

  .header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color:lightgray;
    padding: 1rem;
    height: 2rem;
    align-items: center;
  }

  .headerLeft{
    display: flex;
    flex-direction: row;
    gap: 1rem;

  }

  .headerRight{
    display: flex;
    flex-direction: row;
    gap: 1rem;
    
  }

</style>