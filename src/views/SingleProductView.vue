<template>
    <div>
        <div class="product">
            <div>
                <div class="bild">
                    <img
                        :src="'http://localhost:5001/images/' + product.imgFile"
                        alt="product image"
                    />
                </div>
            </div>

            <div class="info">
                <section>
                    <h2>
                        {{ product.title }}
                    </h2>
                    <p>{{ product.price }} kr</p>
                </section>
                <p>
                    {{ product.longDesc }}
                </p>
                <button @click="addToCart">ADD TO CART</button>
            </div>
        </div>

        <div class="product-list-view">
            <div
                v-for="relatedProduct in relatedProducts"
                :key="relatedProduct.id"
            >
                <SingleProductSmall :product="relatedProduct" />
            </div>
        </div>
    </div>
</template>

<script>
import SingleProductSmall from "../components/Single-Product-Small";

export default {
    name: "SingleProductView",
    components: {
        SingleProductSmall,
    },
    data() {
        return {
            relatedProducts: [],
        };
    },
    computed: {
        product() {
            return this.$store.state.singleProduct;
        },
    },

    mounted() {
      // $QUESTION: What if we have already fetched this product?
        this.$store.dispatch("getItem", this.$route.params.id);
        let allProducts = this.$store.state.products;
        allProducts.sort(() => Math.random() - 0.5);
        this.relatedProducts = allProducts.filter((_, index) => index < 5);
    },
    updated() {
      // $QUESTION: What if we have already fetched this product?
        this.$store.dispatch("getItem", this.$route.params.id);
    },

    methods: {
        addToCart() {
            let cartProducts = this.$store.state.cartData;

            let foundProduct = cartProducts.find(
                (item) => item.id == this.product.id
            );
            // $FEEDBACK: This logic is better for the store
            if (foundProduct) {
                cartProducts = cartProducts.map((item) => {
                    if (item.id == this.product.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
                this.$store.commit("replaceCartData", cartProducts);
            } else {
                let product = {
                    ...this.product,
                    quantity: 1,
                };
                this.$store.commit("pushToCart", product);
            }
        },
    },
};
</script>

<style scoped>
.bild {
    margin-bottom: 2rem;
    height: 30rem;
    width: 40rem;
}

.info {
    width: 30%;
}
img {
    border: 1px solid black;
    border-radius: 8px;
    width: 350px;
    height: 350px;
    padding: 0.5rem;
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1rem;
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow: hidden;
}

.product {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.productPicture {
    width: 300px;
    height: 250px;
    background-color: green;
}

.product-list-view {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 1rem;
}

p,
button {
    font-weight: bold;
}
</style>
