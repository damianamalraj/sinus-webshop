<template>
    <div class="accessories-list-view">
        <div class="accessories-list">
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
            this.$store.dispatch("getMoreAccessories");
        },
    },
    computed: {
        products() {
            return this.$store.state.accessories;
        },
    },
    components: {
        SingleProductSmall,
    },
    created() {
        this.$store.dispatch("getAccessories");
        this.$store.commit("resetPageNumber");
    },
};
</script>

<style lang="scss" scoped>
.accessories-list-view {
    max-width: 80vw;
    margin: auto;

    .accessories-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin: auto;
    }
    .list {
        margin: auto;
    }
    button {
        margin: 1rem 0;
    }
}
</style>
