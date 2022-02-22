<template>
    <div class="product-list-view">
        <div class="list" v-for="product in products" :key="product.id">
            <SingleProductSmall :product="product" />
        </div>
    </div>
</template>

<script>
import SingleProductSmall from "../components/Single-Product-Small";
export default {
    data() {
        return {};
    },
    mounted() {
        this.$store.dispatch("getItems");
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
    display: grid;

    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;

    .list {
        margin: auto;
    }
}
</style>
