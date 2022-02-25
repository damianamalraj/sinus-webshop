<template>
    <div>
      <div class="product">
          <div>
            <div class="bild">
                 <img
                    :src="'http://localhost:5001/images/' + product.imgFile"
                    alt="product image"
                />
            </div>
        </div>

        <div>
           <section>
                <h2>
                    {{ product.title }}
                </h2>
                <p>
                  {{ product.price }} kr
                </p>
           </section>
                <p>
                    {{ product.longDesc }}
                </p>
            <button @click="saveToCart">
                ADD TO CART
            </button>
        </div>

      </div>

      <div class="product-list-view" >
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
    data(){
      return{
        savedProducts: []

      }
    },
    computed: {
        product() {
            return this.$store.state.singleProduct},
    },

    mounted(){
      this.$store.dispatch("getItem", this.$route.params.id)

    },

    components: {
        SingleProductSmall
    },

    methods:{

      saveToCart(){
        let products = window.localStorage.getItem('products')

        if(products){
          let productsArray = JSON.parse(products)

          let matchedProduct = productsArray.find(item => item.id == this.product.id)

          if(matchedProduct){
            productsArray.forEach(item => {
              if(item.id == this.product.id){
                this.product.quantity++
              }
             
            }) 
            
          }else{
            productsArray.push({ ...this.product, quantity: 1 })

          }

          window.localStorage.setItem('products', JSON.stringify(productsArray))

        }else{
          const productsArray = []
          productsArray.push({...this.product, quantity: 1})
          window.localStorage.setItem('products', JSON.stringify(productsArray))
        }
       
      } 
    }

}
</script>

<style scoped>

  img{
    border: 1px solid black;
    border-radius: 8px;
    width: 300px;
    height: 300px;
    padding: 0.5rem;
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

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
    margin: 1rem;
  }

  p, button{
    font-weight: bold;
  }








</style>