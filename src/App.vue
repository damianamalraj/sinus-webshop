<template>
  <div id="app">
    <Header/>
    <div id="nav">
      <router-link to="/skateboards">Skateboards</router-link>  |
      <router-link to="/clothes">Clothes</router-link> |
      <router-link to="/shoes">Shoes</router-link>   |
      <router-link to="/accessories">Accessories</router-link> |
      <router-link to="/singleProduct">Single product view</router-link>
    </div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  components:{Header, Footer}
  
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
