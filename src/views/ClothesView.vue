<template>
    <div class="clothes-list-view">
        <div class="clothes-list">
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
            this.$store.dispatch("getMoreClothes");
        },
    },
    computed: {
        products() {
            return this.$store.state.clothes;
        },
    },
    components: {
        SingleProductSmall,
    },
    created() {
        this.$store.dispatch("getClothes");
        this.$store.commit("resetPageNumber");
    },
};
</script>

<style lang="scss" scoped>
.clothes-list-view {
    width: 100%;

    .clothes-list {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
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
