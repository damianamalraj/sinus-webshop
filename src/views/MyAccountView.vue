<template>
  <div>
    <div v-if="userInfo">
    <section class="details-section">
      <button>EDIT</button>
      <span>
      <h2>MY DETAILS</h2>
      <p>Name: {{userInfo.name}}</p>
      <p>Address:</p>
      <p>Street: {{userInfo.address.street}}</p>
      <p>City: {{userInfo.address.city}}</p>
      <p>Zip: {{userInfo.address.zip}}</p>
      </span>
    </section>
    <button @click="getAllOrders">Show Order History</button>
    <section class="orders-section">
      <h2>MY ORDERS</h2>
      <span v-for="order in allOrders" :key="order.id">
        <p> {{order.items}} <br> Shipping status:{{order.status}} <br> Shipping Address:{{order.shippingStreet}},<br>{{order.shippingCity}},<br>{{order.shippingZip}}</p>
      </span>
    </section>
    </div>
    <div v-else>
      <h3>Please login to check your account information and order history</h3>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    userInfo(){
      return this.$store.getters.getUserDetails
    },
    allOrders(){
      return this.$store.getters.getOrderHistory
    }
  },
  methods:{
    getAllOrders(){
      return this.$store.dispatch("getAllOrders")
    }
  }
   
}
</script>

<style>

</style>