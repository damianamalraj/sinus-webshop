<template>
    <div class="checkout-view">
        <h1>Checkout</h1>
        <div class="checkout">
            <section>
                <div class="total">
                    <h2>Total:</h2>

                    <div>
                        <h3>Your total price is</h3>

                        <h3>{{ total }}kr</h3>
                    </div>
                </div>

                <div class="payment">
                    <h2>Payment method:</h2>
                    <div class="payment-options">
                        <div>
                            <input
                                id="faktura"
                                type="radio"
                                name="payment"
                                value="faktura"
                                checked
                            />
                            <label for="faktora">Invoice</label>
                        </div>

                        <div>
                            <input
                                id="klarna"
                                type="radio"
                                name="payment"
                                value="klarna"
                            />
                            <label for="klarna">Klarna</label>
                        </div>
                        <div>
                            <input
                                id="Swish"
                                type="radio"
                                name="payment"
                                value="Swish"
                            />
                            <label for="Swish">Swish</label>
                        </div>
                    </div>
                </div>
                <div class="address">
                    <h2>Address:</h2>
                    <form @submit.prevent="sendOrder">
                        <input
                            required
                            v-model="getAddress.street"
                            type="text"
                            placeholder="Street"
                        />
                        <input
                            required
                            v-model="getAddress.city"
                            type="text"
                            placeholder="City"
                        />
                        <input
                            required
                            v-model="getAddress.zip"
                            type="text"
                            placeholder="Zipcode"
                        />
                        <div class="button-container">
                            <button>CHECKOUT</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            address: {
                street: "",
                city: "",
                zip: "",
            },
            order: [],
            total: 0,
        };
    },
    mounted() {
        this.$store.dispatch("getUserData");
        this.$store.state.cartData.forEach((product) => {
            this.total = this.total + product.price * product.quantity;
        });
    },

    computed: {
        getAddress: {
            get() {
                if (this.$store.state.loggedIn) {
                    return this.$store.getters.getAddress;
                } else {
                    return this.address;
                }
            },
        },
        getProducts() {
            return this.$store.state.cartData;
        },
    },
    methods: {
        sendOrder() {
            this.$store.state.cartData.forEach((el) => {
                for (let i = 0; i < el.quantity; i++) {
                    this.order.push(el.id);
                }
            });
            this.$store.dispatch("sendOrder", {
                items: this.order,
                shippingAddress: this.getAddress,
            });
            this.$router.push("/tack");
            this.$store.commit("clearCart");
        },
    },
};
</script>

<style lang="scss" scoped>
.payment {
    margin: 2rem 0 1rem 0;
    text-align: start;

    .payment-options {
        div {
            padding: 0.5rem 0;
            input {
                margin-right: 0.5rem;
            }
        }
    }
}
.checkout-view {
    display: flex;
    text-align: start;
    max-width: 200vh;
    flex-direction: column;
    padding: 1rem;
    text-align: center;
    min-height: 100vh;
    .checkout {
        display: flex;
        width: 50%;
        margin: auto;
        margin-top: 0;

        section {
            width: 100%;

            .total {
                text-align: start;
            }
            .total div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding: 3rem 1rem;
                background-color: #f1f1f1;
                border-radius: 8px;
            }

            .address {
                display: flex;
                flex-direction: column;
                text-align: start;
                input {
                    width: 100%;
                    padding: 0.5rem;
                    margin: 0.5rem auto;
                    text-align: start;
                }
                .button-container {
                    display: flex;
                    justify-content: flex-end;
                    padding: 1rem;

                    button {
                        // height: 3rem;
                    }
                }
            }
        }
    }
}
</style>
