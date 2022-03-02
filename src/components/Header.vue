<template>
    <div class="header">
        <div class="headerLeft">
            <div class="logo-container">
                <router-link to="/" class="logo">
                    <img
                        src="http://localhost:5001/images/sinus-logo-landscape.svg"
                        alt="product image"
                    />
                </router-link>
            </div>

            <div>
                <router-link to="/">
                    <img class="contact" src="../assets/home.svg" alt="" />
                </router-link>
            </div>
        </div>

        <div class="headerRight">
            <div>
                <input
                    placeholder="Search products"
                    type="text"
                    v-on:keyup.enter="handleSearch"
                />

                <div
                    class="search-list"
                    style="position: relative"
                    v-if="showSearchList"
                >
                    <div style="position: absolute; width: 100%">
                        <ul style="color: white; position: relative">
                            <li
                                v-for="product in searchProducts"
                                :key="product.id"
                                class="search"
                            >
                                <router-link
                                    :to="'/singleproduct/' + product.id"
                                    class="searchList"
                                    >{{ product.title }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div
                        style="
                            position: absolute;
                            top: -5px;
                            right: -5px;
                            background-color: white;
                            border-radius: 50%;
                            border: 1px solid black;
                            padding: 5px;
                        "
                        @click="showSearchList = false"
                    >
                        X
                    </div>
                </div>
            </div>
            <div>
                <router-link class="contact" to="/contact"
                    >Contact Us</router-link
                >
            </div>
            <div>
                <button v-if="hasUserDetails" @click="logout" class="login">
                    Logout
                </button>
                <router-link v-else to="/login" class="login">
                    <button>Login</button>
                </router-link>
            </div>
            <div>
                <router-link to="/myaccount">
                    <p class="user" v-if="hasUserDetails">
                        {{ userInfo.name }}
                    </p>
                    <img v-else src="../assets/profile.svg" alt="profile" />
                </router-link>
            </div>
            <div>
                <router-link to="/">
                    <img class="contact" src="../assets/heart.svg" alt="" />
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
            searchProducts: [],
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
                return (
                    Object.keys(this.$store.getters.getUserDetails).length !== 0
                );
            }
            return false;
        },
    },

    mounted() {
        this.total = JSON.parse(window.localStorage.getItem("products")).length;

        return this.$store.getters.getUserDetails;
    },

    methods: {
        logout() {
            this.$store.commit("clearUserData");
            this.$router.push({ name: "Home" });
            this.loginStatus = "Login";
        },
        handleSearch(e) {
            this.showSearchList = true;

            const allProducts = this.$store.state.products;
            this.searchProducts = allProducts.filter(
                (item) =>
                    item.title.toLowerCase() == e.target.value.toLowerCase()
            );
        },
    },
};
</script>

<style lang="scss">
* {
    text-decoration: none;
}
.contact {
    color: black;
    margin: 0 1rem;
    font-weight: bold;
}
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: teal;
    height: 4rem;
    width: 100%;
    overflow: hidden;

    .headerLeft {
        display: flex;
        flex-direction: row;
        padding-left: 1rem;
        gap: 1rem;
        img {
            height: 2rem;
        }
    }

    .headerRight {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-right: 1rem;
        img {
            padding-right: 0.5rem;
        }
        input {
            width: 20rem;
            height: 1.5rem;
            text-align: start;
            border: 3px solid white;
            font-size: 20px;
            border-radius: 8px;
            margin-right: 1rem;
            padding: 0 1rem;
            font-size: 1rem;
        }

        ::placeholder {
            font-family: 🇦🇫;
        }

        button {
            height: 2rem;
            padding: 0 1rem;
            margin-right: 1rem;
        }

        .user {
            padding: 0 0.5rem;
            color: black;
            font-size: 1.1rem;
            font-weight: bold;
        }
    }

    .searchList {
        text-decoration: none;
        color: black;
    }

    .quantity {
        position: absolute;
        top: 12px;
        right: 20px;
        color: white;
        font-weight: bold;
        font-size: 0.8rem;
    }
}
</style>
