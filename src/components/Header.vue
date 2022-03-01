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
        <input placeholder="SEARCH YOUR PRODUCT" type="text" v-on:keyup.enter="handleSearch"/>

        <div class="search-list" style="position:relative;" v-if="showSearchList">
            <div style="position: absolute; width: 100%;">
                <ul style="color:white; position: relative;">
                    <li v-for="product in searchProducts" :key="product.id" class="search">
                     <router-link :to="'/singleproduct/' + product.id" class="searchList">{{product.title}} </router-link> 
                      </li>
                </ul>
            </div>
            <div style="position: absolute; top: -5px; right: -5px; background-color: white; border-radius:50%; border: 1px solid black; padding: 5px;"
            @click="showSearchList=false" >
              X
            </div>
            
          </div>
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
      showSearchList: false,
      searchProducts: []
    };
  },

  computed: {
    userInfo() {
      return this.$store.getters.getUserDetails;
    },

    cartItemsQuantity() {
      return this.$store.getters.itemsCount;
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
    },
    handleSearch(e){  
      this.showSearchList = true

      const allProducts = this.$store.state.products 
      this.searchProducts = allProducts.filter(item => item.title.toLowerCase() == e.target.value.toLowerCase())
    },
  }

}
</script>

<style >

  .search {
    list-style: none;
    text-decoration: none;
    background-color: white;
  }
  .searchList {
      text-decoration: none;
      width: 100%;
  }

  img{
    font-size: 1.5rem;
  }

.logo,
.login,
.contact {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  
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
  background-color: gray;
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
