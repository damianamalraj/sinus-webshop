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
    created() {
        this.$store.commit("resetPageNumber");
    },
};
</script>

<style lang="scss" scoped>
.product-list-view {
    width: 100%;

    .product-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
       /*  margin: auto; */
    }
    .list {
        margin: auto;
    }
    button {
        margin: 1rem 0;
    }
}
</style>
