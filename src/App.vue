<template>
    <div id="app">
        <Header />
        <div id="nav">
            <router-link to="/productList"
                ><button>All Products</button></router-link
            >
            <router-link to="/skateboards"
                ><button>Skateboards</button></router-link
            >
            <router-link to="/clothes"><button>Clothes</button></router-link>
            <router-link to="/accessories"
                ><button>Accessories</button></router-link
            >
        </div>
        <router-view  class="main-class"/>
        <Footer />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
    components: { Header, Footer },
    created() {
        this.$store.dispatch("getItems");
        this.$store.commit("resetPageNumber");
        this.$store.state.loggedIn == false;
    },
};
</script>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    background-color: #333;
}
.main-class{
    min-height: 55vh;
}
</style>
