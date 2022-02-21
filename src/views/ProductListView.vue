<template>
    <div class="product-list-view">
        <div v-for="product in products" :key="product.id">
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

    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
}
</style>

