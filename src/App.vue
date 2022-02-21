<template>
    <div id="app">
        <Header />
        <div id="nav">
            <router-link to="/productList">All</router-link> |
            <router-link to="/skateboards">Skateboards</router-link> |
            <router-link to="/clothes">Clothes</router-link> |
            <router-link to="/shoes">Shoes</router-link> |
            <router-link to="/accessories">Accessories</router-link>
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

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
