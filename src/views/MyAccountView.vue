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
    <section class="orders-section" v-if="showOrders" >
      <h2>MY ORDERS</h2>
      <span v-if="allOrders.length">
      <span v-for="order in allOrders" :key="order.id">
        <p> {{order.items}} <br> Shipping status:{{order.status}} <br> Shipping Address:{{order.shippingStreet}},<br>{{order.shippingCity}},<br>{{order.shippingZip}}</p>
      </span>
      </span>
      <span v-else>
        <h3>Currently, there is no order history in your account.</h3>
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
  data(){return{
    showOrders : false
  }},
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
       this.$store.dispatch("fetchAllOrders");
       this.showOrders = true
    }
  }
   
}
</script>

<style>

</style>