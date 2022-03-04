<template>
    <div class="wrapper">
        <div :class="{ fade: showModal }">
            <div v-if="userInfo">
                <section class="details-section">
                    <button @click="showForm = true">EDIT</button>
                    <section v-if="!showForm">
                        <h3>MY DETAILS</h3>
                        <p>{{ userInfo.name }}</p>
                        <p>{{ userInfo.email }}</p>
                        <h3>Shipping Address:</h3>
                        <p>{{ userInfo.address.street }}</p>
                        <p>{{ userInfo.address.city }}</p>
                        <p>{{ userInfo.address.zip }}</p>
                    </section>
                    <section class="form-container" v-else>
                        <BaseForm
                            @sendFormInfo="updateUserDetails"
                            :userCurrentDetails="userInfo"
                        >
                            <template slot="action-name">
                                <p>Update</p>
                            </template>
                        </BaseForm>
                    </section>
                </section>
                <button @click="getAllOrders">Show Order History</button>
                <section class="orders-section" v-if="showOrders">
                    <h2>MY ORDERS</h2>
                    <section class="orders" v-if="allOrders.length && show">
                        <section
                            v-for="order in allOrders"
                            :key="order.id"
                            class="single-order"
                        >
                            <h3>Shipping status:</h3>
                            <p>{{ order.status }}</p>
                            <h3>Shipping Address:</h3>
                            <p>{{ order.shippingStreet }},</p>
                            <p>{{ order.shippingCity }},</p>
                            <p>{{ order.shippingZip }}</p>

                            <h3>Order Details :</h3>
                            <table class="order-items-list">
                                <tr>
                                    <th>Preview</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                                <tr
                                    v-for="item in order.items"
                                    :key="item.ProductId"
                                >
                                    <td>
                                        <div class="bild">
                                            <img
                                                :src="
                                                    'http://localhost:5001/images/' +
                                                    item.product.imgFile
                                                "
                                                alt="preview"
                                            />
                                        </div>
                                    </td>

                                    <td>
                                        {{ item.product.title }}
                                        {{ item.product.category }}
                                        {{ item.product.shortDesc }}
                                    </td>
                                    <td>{{ item.amount }}</td>
                                    <td>{{ item.price }}</td>
                                </tr>
                            </table>
                        </section>
                    </section>
                    <section class="loader" v-else-if="show == false">
                        <img src="@/assets/spinning-circles.svg" alt="loader" />
                    </section>
                    <span v-else>
                        <h3>
                            Currently, there is no order history in your
                            account.
                        </h3>
                    </span>
                </section>
            </div>
            <div v-else>
                <h3>
                    Please login to check your account information and order
                    history
                </h3>
            </div>
        </div>
        <div class="modal" v-if="showModal">
            <h2>Updated successfully!!!</h2>
            <h3>Please continue shopping</h3>
            <button @click="redirect" class="button-bg">Close</button>
        </div>
    </div>
</template>

<script>
import BaseForm from "@/components/BaseForm";

export default {
    data() {
        return {
            showOrders: false,
            showForm: false,
            showModal: false,
            show: false,
        };
    },
    components: { BaseForm },
    created() {
        setTimeout(() => {
            this.show = true;
        }, 3000);
    },
    computed: {
        userInfo() {
            return this.$store.getters.getUserDetails;
        },
        allOrders() {
            return this.$store.getters.getorderedProduct;
        },
        allProducts() {
            return this.$store.getters.allProducts;
        },
        statusUpdated() {
            return this.$store.state.updateStatus;
        },
    },
    methods: {
        async updateUserDetails(userDetails) {
            await this.$store.dispatch("updateUserDetails", userDetails);
            if (this.statusUpdated) {
                this.showModal = true;
            }
        },
        redirect() {
            this.showModal = false;
            this.$router.push({ name: "Home" });
        },
        async getAllOrders() {
            await this.$store.dispatch("fetchAllOrders");
            this.showOrders = true;
        },
    },
};
</script>

<style scoped lang="scss">
.wrapper {
    min-height: 100vh;

    .orders-section {
        background-color: white;
        .orders {
            width: 70%;
            margin: auto;
            .single-order {
                padding: 1rem;
                margin-bottom: 1rem;
                border-radius: 8px;
                background-color: rgb(228, 219, 219);
            }
        }

        .bild {
            height: 5rem;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                overflow: hidden;
                margin-right: 10px;
            }
        }
    }

    .loader {
        margin-top: 10rem;
        width: 10rem;
        margin: auto;
        text-align: center;
    }
}
.form-container {
    width: 100%;
}

img {
    width: 60px;
    height: 60px;
}
table {
    place-items: center;
}
.order-items-list {
    margin: auto;
}
.details-section {
    background-color: rgb(228, 219, 219);
    width: 70%;
    margin: auto;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    button {
        align-self: flex-end;
        width: fit-content;
        margin: auto 10px;
    }
}
.orders-section,
.single-order,
.details-section,
.order-items-list {
    text-align: left;
    h3 {
        margin: 8px 40px;
    }
    p {
        margin: 5px 50px;
    }
}
.orders-section h2 {
    text-align: center;
}
.order-items-list {
    text-align: center;
    margin: 8px 40px;
}

.modal {
    position: absolute;
    top: 30%;
    left: 30%;
    width: 100vh;
    height: 40vh;
    z-index: 5;
    border: solid rgb(67, 54, 144) 1px;
    place-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.fade {
    opacity: 30%;
}
</style>
