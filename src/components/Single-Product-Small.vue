<template>
    <div class="single-product">
        <router-link :to="'/singleproduct/' + product.id">
            <div class="bild">
                <img src="../assets/fake-img.png" alt="product image" />
            </div>
            <section>
                <h3>
                    {{ product.title }}
                </h3>
                <p>{{ product.price }} kr</p>
            </section>
            <span>
                {{ product.shortDesc }}
            </span>
            <p>
                {{ product.longDesc }}
            </p>
        </router-link>
        <section>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button @click="addToCart">
                <img src="../assets/add_shopping_cart.svg" alt="" />
            </button>
        </section>
    </div>
</template>

<script>
export default {
    props: ["product"],

    methods: {  
        addToCart(){  
            this.$store.dispatch("addToCart", {title: this.product.title, price: this.product.price})
        }
    }

};
</script>

<style lang="scss" scoped>
* {
    text-decoration: none;
    color: #333;
}
.single-product {
    border: 1px solid black;
    border-radius: 8px;
    width: 200px;
    max-height: 350px;
    padding: 0.5rem;
    text-align: start;

    span {
        font-size: 0.7rem;
    }
    h3,
    p {
        margin: 0;
    }
    .bild img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
    }
    section:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
    }
    section:nth-of-type(2) {
        display: flex;
        justify-content: space-between;

        select,
        button {
            width: 2.5rem;
        }
    }
}
</style>
