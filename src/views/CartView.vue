<template>
  <div>
   <div v-if="getProducts.length > 0" class="small-container cart-page">
     <table>

       <tr> 
          <th>PRODUCT</th>
          <th>QUANTITY</th>
          <th>SUBTOTAL</th>
       </tr>
      
       <tr v-for="product in getProducts" :key="product.id">
        <td>
          <div class="cart-info">
            <img :src="'http://localhost:5001/images/' + product.imgFile" alt="">
            <div>
              <p> {{ product.title}} </p>
              <small> {{ product.price}} </small>
              <br>
              <a href="#" @click="()=>{removeItem(product.id)}">Remove</a>
            </div>
          </div>
        </td>
        <td><input class="total" type="number" min="1" :value="product.quantity" @input="(e) => {changeQuantity(e, product.id)} "
         >  </td>
        <td class="total"> {{ product.price * product.quantity }} KR </td>
      </tr>
     
    </table>

      <div class="total-price">
        <table>
          <tr>

            <td class="total" >Total</td>
            <td class="total" > SEK {{ getTotalPrice()}} </td>

        
          </tr>
          <router-link to="/checkout"
                        ><button>To Checkout</button></router-link
                    >
        </table>
      </div>
    </div>

    <div v-else>
      <h1> There is no product here </h1>
    </div>

    
  </div>
</template>

<script>
export default {

  data(){
    return{
      products: [],
      
    }
  },

    computed: {

        getProducts() {
            return this.$store.state.cartData;
        },
    },

    methods: {
        getCartData() {
            let products = window.localStorage.getItem("products");
            products = JSON.parse(products);
            this.products = products;
            console.log(products);
            return products;
        },

        getTotalPrice() {
            let total = 0;
            this.products.forEach((product) => {
                total = total + product.price * product.quantity;
            });
            return total;
        },

        changeQuantity(e, id) {
            let products = this.$store.state.cartData;
            products.forEach((product) => {
                if (product.id == id) {
                    product.quantity = e.target.value;
                }
            });
            this.products = products;
            window.localStorage.setItem("products", JSON.stringify(products));
        },

        removeItem(id) {
            this.$store.commit("removeFromCart", id);
        },
    },
};
</script>

<style scoped>
.cart-page {
    margin-right: 5rem;
    margin-left: 5rem;
}
table {
    width: 100%;
    border-collapse: collapse;
}

.cart-info {
    display: flex;
    flex-wrap: wrap;
}
p {
    font-size: 1.5rem;
}
small {
    font-size: 1rem;
}

th {
    text-align: left;
    padding: 1.5rem;
    color: white;
    background: gray;
    font-weight: bold;
}
td input {
    width: 90px;
    height: 30px;
    padding: 2px;
    border: 3px solid black;
}

td a {
    color: rgb(255, 3, 171);
    font-size: 12px;
    text-decoration: none;
}
td img {
    width: 90px;
    height: 90px;
    margin-right: 10px;
}
.total-price {
    display: flex;
    justify-content: flex-end;
}
.total-price table {
    border-top: 3px solid black;
    max-width: 500px;
}

td:last-child {
    text-align: right;
}
th:last-child {
    text-align: right;
}
button {
    background: gray;
    color: white;
    padding: 0.5rem;
    width: 250px;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 1rem;
    cursor: pointer;
}

.total {
    font-size: 1.2rem;
    font-weight: bold;
}
</style>
