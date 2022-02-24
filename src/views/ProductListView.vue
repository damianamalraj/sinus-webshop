<template>
    <div class="product-list-view">
        <div class="product-list">
            <div class="list" v-for="product in products" :key="product.id">
                <SingleProductSmall :product="product" />
            </div>
        </div>
        <button @click="fetchMore">Load more</button>
    </div>
</template>

<script>
import SingleProductSmall from "../components/Single-Product-Small";
export default {
    data() {
        return {};
    },
    methods: {
        fetchMore() {
            this.$store.dispatch("getMoreData");
        },
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    components: {
        SingleProductSmall,
    },
};
</script>

<style lang="scss" scoped>
.product-list-view {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .product-list {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        margin: auto;
        gap: 1rem;
    }
    button {
        margin: 1rem 0;
        width: fit-content;
    }
}
</style>
