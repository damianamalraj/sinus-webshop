<template>
    <div class="base-form">
        <div class="form-container">
            <form @submit.prevent="validateAndSend" class="form-styling">
                <div>
                    <label for="username">NAME</label>
                    <br />
                    <input
                        type="text"
                        name="username"
                        id="username"
                        v-model="showUserInfo.name"
                        required
                        
                    />
                </div>
                <div>
                    <label for="newemail">E-mail</label>
                    <br />

                    <input
                        type="email"
                        name="newemail"
                        id="newemail"
                        v-model="showUserInfo.email"
                        required
                    />
                </div>
                <div>
                    <label for="newpassword">Password</label>
                    <br />

                    <input
                        type="password"
                        name="newpassword"
                        id="newpassword"
                        v-model="showUserInfo.password"
                        required
                    />
                </div>
                <br />
                <h3>Shipping Address</h3>
                <div>
                    <label for="street">Street</label>
                    <br />

                    <input
                        type="text"
                        name="street"
                        id="street"
                        v-model="showUserInfo.address.street"
                        required
                    />
                </div>
                <div>
                    <label for="city">City</label>
                    <br />

                    <input
                        type="text"
                        name="city"
                        id="city"
                        v-model="showUserInfo.address.city"
                        required
                    />
                </div>
                <div>
                    <label for="zip">Zipcode</label>
                    <br />

                    <input
                        type="number"
                        name="zip"
                        id="zip"
                        v-model="showUserInfo.address.zip"
                        required
                    />
                </div>
                <p v-if="!noError">{{ errorsList }}</p>
                <button>
                    <slot name="action-name">Done</slot>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showUserInfo: {
                email: "",
                password: "",
                name: "",
                address: {
                    city: "",
                    street: "",
                    zip: "",
                },
            },
            validatedLogin: false,
            errorsList: [],
            noError: true,
        };
    },
    props: {
        userCurrentDetails: {},
    },
    created() {
        if (this.userCurrentDetails) {
            this.showUserInfo = this.userCurrentDetails;
        }
    },
  
    methods: {
        validateAndSend() {
            this.validate();
            if (this.validatedLogin) {
                this.$emit("sendFormInfo", this.showUserInfo);
            }
        },
        validate() {
            this.errorsList = [];
            if (
                !/^[a-zA-Z]+$/.test(
                    this.showUserInfo.username ||
                        this.showUserInfo.street ||
                        this.showUserInfo.city
                )
            ) {
                this.errorsList.push(
                    "Name, Street, City should contain only characters"
                );
                this.noError = false;
            }
            if (this.noError) {
                this.validatedLogin = true;
            }
        },
    },
};
</script>

<style scoped lang="scss">
.base-form {
    min-height: 100vh;
}
.form-container {
    display: flex;
    justify-content: center;
}
.form-styling {
    background-color: #f1f1f1;
    border-radius: 8px;
    width: 50%;
    text-align: start;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
        color: rgb(102, 68, 5);
    }

    input {
        padding: 0.2rem;
        place-items: center;
        height: 40px;
        width: 22rem;
        border: solid 2px rgb(71, 71, 71);
    }
}
</style>
