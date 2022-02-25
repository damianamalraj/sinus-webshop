<template>
    <div class="accessories-view">
        <div class="list" v-for="product in products" :key="product.id">
            <SingleProductSmall :product="product" />
        </div>
    </div>
</template>

<script>
import SingleProductSmall from "../components/Single-Product-Small";

export default {
    computed: {
        products() {
            return this.$store.getters.accessories;
        },
    },

    components: {
        SingleProductSmall,
    },
};
</script>

<style lang="scss" scoped>
.accessories-view {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;

    .list {
        margin: auto;
    }
}
</style>
