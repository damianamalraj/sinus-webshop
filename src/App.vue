<template>
    <div id="app">
        <Header />
        <div id="nav">
            <router-link  to="/productList"><button>All Products</button></router-link> 
            <router-link to="/skateboards"><button>Skateboards</button></router-link> 
            <router-link to="/clothes"><button>Clothes</button></router-link> 
            <router-link to="/accessories"><button>Accessories</button></router-link>
        </div>
        <router-view />
        <Footer class="footer" />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
    components: { Header, Footer },
};
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
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
        padding: 2rem;
       

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

button {
    padding: 1rem;
     font-size: 1.5rem;
     font-weight: bold;
     cursor: pointer;
     border: 3px solid rgb(46, 94, 142);
    
}
button:hover {
    
         background-color: black;
         color:white
     
}

</style>
