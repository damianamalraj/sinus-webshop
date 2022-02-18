<template>
  <div class="header">
      <div class="headerLeft">
        <div>
          LOGO
        </div>
        
        <div>
          <router-link to="/"> <Home/> </router-link> 
        </div>

      </div>

      <div class="headerRight">
        <div> Search </div>
        <div> Contact us </div>
        <div> Log in</div>
        <div> Heart</div>
        <div> Cart</div>
      </div>
  </div>
</template>

<script>
import Home from '../views/Home'
export default {
  components: {
    Home
  }
}
</script>

<style>

  .header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color:lightgray;
    height: 2rem;
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