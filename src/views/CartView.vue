<template>
  <div>
  
   <div class="small-container cart-page">
     <table>
       <tr> 
          <th>PRODUCT</th>
          <th>QUANTITY</th>
          <th>SUBTOTAL</th>
       </tr>
       <tr>
        <td>
          <div class="cart-info">
            <img src="../assets/1.png" alt="">
            <div>
              <p>Red skateboard </p>
              <small>Price: 98 kr </small>
              <br>
              <a href="">Remove</a>
            </div>
          </div>
        </td>
        <td><input type="number" value="1"></td>
        <td>Price: 459 kr</td>
      </tr>
      <tr>
        <td>
          <div class="cart-info">
            <img src="../assets/2.png" alt="">
            <div>
              <p>Black skateboard </p>
              <small>Price: 988 kr </small>
              <br>
              <a href="">Remove</a>
            </div>
          </div>
        </td>
        <td><input type="number" value="1"></td>
        <td>Price: 159 kr</td>
      </tr>
      <tr>
        <td>
          <div class="cart-info">
            <img src="../assets/3.png" alt="">
            <div>
              <p>Red skateboard </p>
              <small>Price: 188 kr </small>
              <br>
              <a href="">Remove</a>
            </div>
          </div>
        </td>
        <td><input type="number" value="1"></td>
        <td>Price: 659 kr</td>
      </tr>
    </table>

    <div class="total-price">
      <table>
        <tr>
          <td>Subtotal</td>
          <td>Sek 765</td>
        </tr>
        <tr>
          <td>Tax</td>
          <td>Sek 210</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>Sek 980</td>
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
    getData(){
      return this.$store.state.cartData
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