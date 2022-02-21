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
        <div> Contact us </div>

        <div >
          <router-link to="/login" class="login">
             Login
          </router-link> 
        </div>

       <div>
          <router-link to="/wishList">
            <img src="../assets/heart.svg" alt="">
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