<template>
  <div>
   <div class="small-container cart-page">
     <table>

       <tr> 
          <th>PRODUCT</th>
          <th>QUANTITY</th>
          <th>SUBTOTAL</th>
       </tr>
      
       <tr v-for="product in getCartData()" :key="product.id">
        <td>
          <div class="cart-info">
            <img :src="'http://localhost:5001/images/' + product.imgFile" alt="">
            <div>
              <p> {{ product.title}} </p>
              <small> {{ product.price}} </small>
              <br>
              <a href="" @click="deleteItem(product.id)">Remove</a>
            </div>
          </div>
        </td>
        <td><input class="total" type="number" min="0" :value="product.quantity" @input="(e) => {changeQuantity(e, product.id)} "
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
        <Button> To Checkout</Button>
      </table>
    </div>
    </div>
    
  </div>
</template>

<script>
  
export default {

  data(){
    return{
      products: []
      
    }
  },

  computed:{
    getData(){
      return this.$store.state.cartData
    },
    
  },

  methods:{

    getCartData(){
      let products = window.localStorage.getItem('products')
      products = JSON.parse(products)
      this.products = products
      console.log(products);
      return products
    },

    getTotalPrice(){
      let total = 0
      this.products.forEach(product => {
        total = total + (product.price * product.quantity)
      })
      return total
    },

    changeQuantity(e, id){
      let products = JSON.parse(window.localStorage.getItem('products'))
      products.forEach(product => {
        if(product.id == id){
            product.quantity = e.target.value
        }
      })
      this.products = products
      window.localStorage.setItem('products', JSON.stringify(products))
    },

    deleteItem(id){
       const matchedProduct = this.products.filter(product => product.id == id )
       console.log('matchedProduct', matchedProduct);
        if(matchedProduct){
          
          let spara = this.products.filter(product => product != matchedProduct)
          console.log('spara', spara);
          window.localStorage.removeItem(matchedProduct) 

        }
      
      /* if(JSON.parse(window.localStorage.getItem('products')).id == id){
      console.log('delete');
    } */

  }


  }

}
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
small{
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

.total{
  font-size: 1.2rem;
  font-weight: bold;
}
</style>