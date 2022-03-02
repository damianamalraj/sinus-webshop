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
                <option value="1">S</option>
                <option value="2">M</option>
                <option value="3">L</option>
                <option value="4">XL</option>
                <option value="5">XXL</option>
            </select>

            <button @click="addToCart">
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
           addToCart(){
            let cartProducts = this.$store.state.cartData

            let foundProduct = cartProducts.find(item => item.id == this.product.id)

            if(foundProduct){
                cartProducts = cartProducts.map(item => {
                    if(item.id == this.product.id){
                        return { ...item, quantity: item.quantity + 1 }
                    }else{
                        return item }
                })
                this.$store.commit("replaceCartData", cartProducts)

            }else{
                let product = {
                    ...this.product,
                    quantity: 1
                }
                this.$store.commit("pushToCart", product)
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
.single-product:hover {
   background-color: rgb(143, 201, 201);
   color: white;
    }
.single-product {
    box-shadow: 0 5px 12px green;
    border: 1px solid green;
    border-radius: 8px;
    width: 270px;
    height: 420px;
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
    h3{
        font-size: 1.8rem;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
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
            width: 3.5rem;
            height: 2.5rem;

        }
        button:hover, select:hover {
         background-color:rgb(85, 41, 41);   
        }
    }
}
</style>
