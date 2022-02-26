<template>
  <div>
    <div v-if="userInfo">
      <section class="details-section">
        <button>EDIT</button>
        <span>
          <h2>MY DETAILS</h2>
          <p>Name: {{ userInfo.name }}</p>
          <p>Address:</p>
          <p>Street: {{ userInfo.address.street }}</p>
          <p>City: {{ userInfo.address.city }}</p>
          <p>Zip: {{ userInfo.address.zip }}</p>
        </span>
      </section>
      <button @click="getAllOrders">Show Order History</button>
      <section class="orders-section" v-if="showOrders">
        <h2>MY ORDERS</h2>
        <span v-if="allOrders.length">
          <span v-for="order in allOrders" :key="order.id" class="single-order">
            <h3>Shipping status:</h3> 
            <h5> {{ order.status }} </h5> <br />
            <h3>Shipping Address:</h3> 
            <h5> {{ order.shippingStreet }} </h5> <br />
            <h5>{{ order.shippingCity }},</h5>
            <br />{{ order.shippingZip }}
            
            <table class="order-items-list">
              <tr>
                <th>Preview</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
              <tr v-for="item in order.items" :key="item.ProductId">
                <td>
                  <img
                    :src="
                      'http://localhost:5001/images/' +
                      orderedProduct(item.ProductId).imgFile
                    "
                    alt=""
                  />
                </td>
                <td>
                  Ordered Product: {{ orderedProduct(item.ProductId).title }}
                  {{ orderedProduct(item.ProductId).category }}
                  {{ orderedProduct(item.ProductId).shortDesc }}
                </td>
                <td>{{ item.amount }}</td>
                <td>{{ item.price }}</td>
              </tr>
            </table>
            <!-- <li>  Quantity : {{ orderedProduct(item.ProductId) }} <br /> </li> -->
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
  data() {
    return {
      showOrders: false,
    };
  },
  computed: {
    userInfo() {
      return this.$store.getters.getUserDetails;
    },
    allOrders() {
      return this.$store.getters.getOrderHistory;
    },
    allProducts() {
      return this.$store.getters.allProducts;
    },
  },
  methods: {
    orderedProduct(productId) {
      return this.allProducts.find((item) => item.id == productId);
    },
    getAllOrders() {
      this.$store.dispatch("fetchAllOrders");
      this.$store.dispatch("getItems");
      this.showOrders = true;
    },
  },
};
</script>

<style scoped lang="scss">
img {
  width: 60px;
  height: 60px;
}
table {
  place-items: center;
}
.order-items-list{
  margin: auto;
}
.details-section{
  background-color: rgb(160, 145, 145);
}
</style>
