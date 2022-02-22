<template>
    <div>
      <div class="product">
          <div>
            <div class="bild">
                <img src="../assets/fake-img.png" alt="product image" />
            </div>
           
        </div>
        <div>
           <section>
                <h3>
                    {{ product.title }}
                </h3>
                <p>{{ product.price }} kr</p>
            </section>
            <p>
                {{ product.longDesc }}
            </p>
            <button @click="saveToCart">
                ADD TO CART
            </button>
        </div>

      </div>
      <div class="product-list-view">
            <SingleProductSmall :product="product" />
            <SingleProductSmall :product="product" />
            <SingleProductSmall :product="product" />
            <SingleProductSmall :product="product" />
            <SingleProductSmall :product="product" />
      </div>
      
     
    </div>
</template>

<script>

import SingleProductSmall from "../components/Single-Product-Small";


export default {
    name: 'SingleProductView',
    computed: {
        product() {
            return this.$store.state.singleProduct},
    },

    mounted(){
      this.$store.dispatch("getItem", this.$route.params.id)

    },

    components: {
        SingleProductSmall,
    },

    methods:{
      saveToCart(){
        this.$store.commit("singleProduct", this.product)
      }
    }

    
};
</script>

<style scoped>

  .product{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .productPicture{
    width: 300px;
    height: 250px;
    background-color: green;
  }

  .product-list-view{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }








</style>