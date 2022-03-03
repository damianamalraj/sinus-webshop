<template>
    <div class="wrapper">
        <div :class="{ fade: showErrorModal }" class="main-div">
            <div class="form-container">
                <form @submit.prevent="authenticate" class="form-styling">
                    <h1>Welcome Back!</h1>

                    <div>
                        <label for="email">E-mail</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            v-model="email"
                            required
                        />
                    </div>

                    <div>
                        <label for="password">Password</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            v-model="password"
                            required
                        />
                    </div>

                    <a href="#">Forgot Password?</a>
                    <button>LogIn</button>
                </form>
            </div>
            <div>
                <h1>I'm new here!</h1>
                <router-link to="/signup"><button>SignUp</button></router-link>
            </div>
        </div>
        <div class="modal" v-if="showErrorModal">
            <h2>Login Failed!!!</h2>
            <h3>Please try again</h3>
            <button @click="reset" class="button-bg">Close</button>
        </div>
    </div>
</template>

<script>
import Actions from "@/store/action.types";

export default {
    data() {
        return {
            email: "",
            password: "",
            showErrorModal: false,
        };
    },
    methods: {
        async authenticate() {
            await this.$store.dispatch(Actions.AUTHENTICATE, {
                email: this.email,
                password: this.password,
            });
            if (!this.loginError) {
                this.$router.push({ name: "Home" });
            } else {
                this.showErrorModal = true;
            }
        },
        reset() {
            (this.email = ""),
                (this.password = ""),
                (this.showErrorModal = false);
        },
    },
    computed: {
        loginError() {
            return this.$store.state.loginError;
        },
    },
};
</script>

<style scoped lang="scss">
.wrapper {
    min-height: 100vh;
}
.main-div {
    display: flex;
    flex-direction: column;

    .form-container {
        display: flex;
        justify-content: center;
        height: 50vh;
        form {
            background-color: #f1f1f1;
            border-radius: 8px;
            max-width: 50%;
            text-align: start;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            input {
                padding: 0.2rem;
                place-items: center;
                height: 40px;
                width: 22rem;
                border: solid 2px rgb(71, 71, 71);
            }

            a {
                text-decoration: none;
                color: rgb(102, 68, 5);
            }
        }
    }
}
.modal {
    position: absolute;
    top: 30%;
    left: 30%;
    width: 100vh;
    height: 40vh;
    z-index: 5;
    border: solid rgb(163, 12, 12) 3px;
    place-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.fade {
    opacity: 30%;
}
</style>
