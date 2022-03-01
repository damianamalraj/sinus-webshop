<template>
    <div class="checkout-view">
        <h1>KASSA</h1>
        <div class="checkout">
            <section>
                <div class="total">
                    <h2>Totalt</h2>
                    <hr />
                    <div>
                        <h3>Your total is</h3>

                        <h3>1000kr</h3>
                    </div>
                    <hr />
                </div>
                <div class="address">
                    <h2>Address</h2>
                    <input
                        v-model="getAddress.street"
                        type="text"
                        placeholder="Street"
                    />
                    <input
                        v-model="getAddress.city"
                        type="text"
                        placeholder="City"
                    />
                    <input
                        v-model="getAddress.zip"
                        type="text"
                        placeholder="Zipcode"
                    />
                    {{ getAddress }}
                </div>
            </section>
            <hr />
            <section>
                <div>
                    <h2>Paymet method</h2>
                    <section class="paymet-options">
                        <div>
                            <label for="faktora">Faktura</label>
                            <input
                                id="faktura"
                                type="radio"
                                name="payment"
                                value="faktura"
                            />
                        </div>

                        <div>
                            <label for="klarna">Klarna</label>
                            <input
                                id="klarna"
                                type="radio"
                                name="payment"
                                value="klarna"
                            />
                        </div>
                    </section>
                    <button @click="sendOrder">CHECKOUT</button>
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
        };
    },
    created() {
        this.$store.dispatch("getUserData");
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
        },
    },
};
</script>

<style lang="scss" scoped>
.checkout-view {
    display: flex;
    text-align: start;
    max-width: 200vh;
    flex-direction: column;
    padding: 1rem;
    height: 75vh;
    .checkout {
        display: flex;
        width: 80%;
        margin: auto;
        margin-top: 0;

        section {
            width: 50%;
        }
        section:nth-of-type(1) {
            div {
                height: 50%;
            }
            .total div {
                display: flex;
                justify-content: space-between;
                margin: 0 0.5rem;
                padding: 0 0.5rem;
                background-color: #f1f1f1;
            }

            .address {
                display: flex;
                flex-direction: column;
                input {
                    width: 70%;
                    padding: 0.5rem;
                    margin: 0.5rem auto;
                    text-align: start;
                }
            }
        }

        section:nth-of-type(2) {
            display: flex;
            flex-direction: column;
            align-items: center;

            button {
                font-size: 1rem;
                padding: 0.5rem;
                border: 2px solid #333;
                letter-spacing: 0.1rem;
            }
            button:hover {
                background-color: #333;
                color: white;
                border: 2px solid #333;
            }
            .paymet-options div {
                display: flex;
                justify-content: space-between;

                input {
                    width: 100%;
                }
            }
        }
    }
}
</style>
