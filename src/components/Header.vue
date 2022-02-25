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
            <img class="contact" src="../assets/home.svg" alt="">
          </router-link> 
        </div>
      </div>

      <div class="headerRight">
        <div>
          <input placeholder="SEARCH YOUR PRODUCT" type="text">
        </div>

        <div class="contact">
          Contact us
        </div>

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
            <img class="contact" src="../assets/heart.svg" alt="">
          </router-link> 
        </div>

       <div>
          <router-link to="/myaccount">
          <p v-if="userInfo">{{userInfo.name}}</p>
          <img  v-else src="../assets/profile.svg" alt="prpic">
          </router-link> 
        </div>

      <div>
          <router-link to="/cart">
            <img src="../assets/cart.svg" alt="">
            <span class="quantity"> {{ total }} </span>
          </router-link> 
      </div>

    </div>
  </div>
</template>

<script>
export default {

  data(){return{
    total: 0
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

  img{
    font-size: 1.5rem;
  }

  .logo, .login, .contact{
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    
  }

  input{
    width: 17rem;
    height: 1rem;
    text-align: center;
  }

  .header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color:lightgreen;
    padding: 1rem;
    height: 3rem;
    padding: 1.2rem;
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

  .quantity{
    position: absolute;
    top: 8px;
    color: red;
    font-weight: bold;
  }

</style>