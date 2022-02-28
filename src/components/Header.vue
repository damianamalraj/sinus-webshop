<template>
  <div class="header">
    <div class="headerLeft">
      <div>
        <router-link to="/" class="logo"> Sinus </router-link>
      </div>

      <div>
        <router-link to="/">
          <img class="contact" src="../assets/home.svg" alt="" />
        </router-link>
      </div>
    </div>

    <div class="headerRight">
      <div>
        <input placeholder="SEARCH YOUR PRODUCT" type="text" />
      </div>

      <div class="contact">Contact us</div>

      <div>
        <button v-if="hasUserDetails" @click="logout" class="login">Logout</button>
        <router-link v-else to="/login" class="login">
          Login
        </router-link>
      </div>

      <div>
        <router-link to="/wishList">
          <img class="contact" src="../assets/heart.svg" alt="" />
        </router-link>
      </div>

      <div>
        <router-link to="/myaccount">
          <p v-if="hasUserDetails">{{ userInfo.name }}</p>
          <img v-else src="../assets/profile.svg" alt="profile" />
        </router-link>
      </div>

      <div>
        <router-link to="/cart">
          <img src="../assets/cart.svg" alt="" />
          <span class="quantity"> {{ cartItemsQuantity }} </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 0,
    };
  },

  computed: {
    userInfo() {
      return this.$store.getters.getUserDetails;
    },

    cartItemsQuantity() {
      return this.$store.state.cartListItems.length;
    },

    hasUserDetails() {
      if (this.$store.getters.getUserDetails) {
        return Object.keys(this.$store.getters.getUserDetails).length !== 0;
      }
      return false;
    },
  },

  mounted(){
    this.total = JSON.parse( window.localStorage.getItem('products')).length
    
    return this.$store.getters.getUserDetails
    },
  
  methods:{
    logout(){
      this.$store.commit('clearUserData')
      this.$router.push({ name: "Home" });
      this.loginStatus = "Login"
    }


  }

}
</script>

<style >

  img{
    font-size: 1.5rem;
  }

  methods: {
    logout() {
      this.$store.commit("clearUserData");
      this.$router.push({ name: "Home" });
    },
  }
};
</script>

<style>
img {
  font-size: 1.5rem;
}

.logo,
.login,
.contact {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
}

input {
  width: 17rem;
  height: 1rem;
  text-align: center;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(180, 224, 180);
  padding: 1rem;
  height: 3rem;
  padding: 1.2rem;
}

.headerLeft {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.headerRight {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.quantity {
  position: absolute;
  top: 8px;
  color: rgb(158, 35, 35);
  font-weight: bold;
}
</style>
