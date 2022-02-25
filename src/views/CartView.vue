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
              <a href="">Remove</a>
            </div>
          </div>
        </td>
        <td><input type="number" value="1"></td>
        <td> {{ product.price * product.quantity }} </td>
      </tr>
     
    </table>

    <div class="total-price">
      <table>
       
        <tr>
          <td>Total</td>
          <td>{{totalPrice}}</td>
        </tr>
        <Button> To Checkout</Button>
      </table>
    </div>
    </div>
    
  </div>
</template>

<script>
  
export default {
  computed:{
    totalPrice() {
      let total = 0;
      for (let item of Object.values(this.getCartData())) {
        total += item.price * item.quantity
      }
      return total
    }
  },

  methods:{
    getCartData(){
      let products = window.localStorage.getItem('products')
      return JSON.parse(products)
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
  width: 80px;
  height: 80px;
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
  padding: 1rem;
  width: 350px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>