<template>
    <div class="product-list-view">

        <div class="product-list">
            <div class="list" v-for="product in products" :key="product.id">
                <SingleProductSmall :product="product" />
            </div>
        <button @click="fetchMore">Load more</button>
        </div>
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

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;


    .product-list {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
    }
    .list {
        margin: auto;
    }
}
</style>
