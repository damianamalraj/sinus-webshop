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
        <router-view />
        <Footer class="footer" />
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
    padding: 0.5rem 1.7rem;
    font-size: 1rem;
    border-radius: 3px;
    cursor: pointer;
    border: 2px solid rgb(22, 23, 24);
    margin: 10px 0px;
    background-color: #333;
    color: white;
}
button:hover {
    background-color: #7cc5a4;
    color: #222;
}
</style>
