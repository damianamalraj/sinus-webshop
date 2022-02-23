<template>
    <div class="single-product">
        <router-link :to="'/singleproduct/' + product.id">
            <div class="bild">
                <img
                    :src="'http://localhost:5001/images/' + product.imgFile"
                    alt="product image"
                />
            </div>
            <section class="title-container">
                <h3>
                    {{ product.title }}
                </h3>
                <p>
                    {{ product.price }} kr
                </p>
            </section>
            <span>
                {{ product.shortDesc }}
            </span>
            <p>
                {{ product.longDesc }}
            </p>
        </router-link>

        <section class="button-container">
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

           <button @click="saveToCart">
                <img src="../assets/add_shopping_cart.svg" alt="" />
            </button>
        </section>
    </div>
</template>

<script>
export default {
    props: ["product"],
    computed: {
        Product() {
            return this.$store.state.singleProduct},
    },
    methods: {  
        /* addToCart(){  
            this.$store.dispatch("addToCart", {title: this.Product.title, price: this.Product.price})
        }, */
        saveToCart(){
        let products = window.localStorage.getItem('products')
        if(products){
          let productsArray = JSON.parse(products)
          let matchedProduct = productsArray.find(item => item.id == this.product.id)
          if(matchedProduct){
            matchedProduct.quantity++
            console.log(matchedProduct);
            
          }else{
            productsArray.push({...this.product, quantity: 1})

          }

          window.localStorage.setItem('products', JSON.stringify(productsArray))
        }else{
          const productsArray = []
          productsArray.push({...this.product, quantity: 1})
          window.localStorage.setItem('products', JSON.stringify(productsArray))
        }
       
      }
    }

};
</script>

<style lang="scss" scoped>
* {
    text-decoration: none;
    color: #333;
}
.single-product {
    border: 1px solid black;
    border-radius: 8px;
    width: 250px;
    height: 400px;
    padding: 0.5rem;
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    span {
        font-size: 0.7rem;
    }
    h3,
    p {
        margin: 0;
    }

    .bild {
        height: 230px;
    }
    .bild img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        overflow: hidden;
    }
    section:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
    }

    .title-container {
        display: flex;
        justify-content: space-between;
    }
    .button-container {
        display: flex;
        justify-content: space-between;
        select,
        button {
            width: 2.5rem;
        }
    }
}
</style>
