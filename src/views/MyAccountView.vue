<template>
  <div class="wrapper">
    <div  :class="{ fade: showModal }">
      <div v-if="userInfo">
        <section class="details-section">
          <button @click="showForm = true">EDIT</button>
          <section v-if="!showForm">
            <h3>MY DETAILS</h3>
            <p>{{ userInfo.name }}</p>
            <p>{{ userInfo.email }}</p>
            <h3>Shipping Address:</h3>
            <p>{{ userInfo.address.street }}</p>
            <p>{{ userInfo.address.city }}</p>
            <p>{{ userInfo.address.zip }}</p>
          </section>
          <section v-else>
            <BaseForm
              @sendFormInfo="updateUserDetails"
              :userCurrentDetails="userInfo"
            >
              <template slot="action-name">
                <p>Update</p>
              </template>
            </BaseForm>
          </section>
        </section>
        <button @click="getAllOrders">Show Order History</button>
        <section class="orders-section" v-if="showOrders">
          <h2>MY ORDERS</h2>
          <section v-if="allOrders.length">
            <section
              v-for="order in allOrders"
              :key="order.id"
              class="single-order"
            >
              <h3>Shipping status:</h3>
              <p>{{ order.status }}</p>
              <h3>Shipping Address:</h3>
              <p>{{ order.shippingStreet }},</p>
              <p>{{ order.shippingCity }},</p>
              <p>{{ order.shippingZip }}</p>

              <h3>Order Details :</h3>
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
            </section>
          </section>
          <span v-else>
            <h3>Currently, there is no order history in your account.</h3>
          </span>
        </section>
      </div>
      <div v-else>
        <h3>
          Please login to check your account information and order history
        </h3>
      </div>
    </div>
    <div class="modal" v-if="showModal">
      <h2>Updated successfully!!!</h2>
      <h3>Please continue shopping</h3>
      <button @click="redirect" class = "button-bg">Close</button>
    </div>
  </div>
</template>

<script>
import BaseForm from "@/components/BaseForm";

  export default {
  data() {
    return {
      showOrders: false,
      showForm: false,
      showModal:false
    };
  },
  components: { BaseForm },
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
    statusUpdated(){
      return this.$store.state.updateStatus;
    }
  },
  methods: {
    async updateUserDetails(userDetails) {
      await this.$store.dispatch("updateUserDetails", userDetails);
      if(this.statusUpdated){
        this.showModal = true
      }
    },
    redirect(){
      this.showModal = false
      this.$router.push({ name: "Home" });
    },
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
.order-items-list {
  margin: auto;
}
.details-section {
  background-color: rgb(228, 219, 219);
  width: 70%;
  margin: auto;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  button {
    align-self: flex-end;
    width: fit-content;
    margin: auto 10px;
  }
}
.orders-section,
.single-order,
.details-section,
.order-items-list {
  text-align: left;
  h3 {
    margin: 8px 40px;
  }
  p {
    margin: 5px 50px;
  }
}
.orders-section h2 {
  text-align: center;
}
.order-items-list {
  text-align: center;
  margin: 8px 40px;
}
.button-bg {
  padding: 15px 60px;
  margin: 10px;
  margin-bottom: 20px;
  background-color: black;
  border: 2px solid white;
  border-radius: 5px;
  color: white;
  &:hover {
    color: black;
    border: 2px solid black;
    background-color: white;
  }
}
.modal {
  position: absolute;
  top: 30%;
  left: 30%;
  width: 100vh;
  height: 40vh;
  z-index: 5;
  border: solid rgb(67, 54, 144) 1px;
  place-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.fade {
  opacity: 30%;
}
.wrapper{
  margin-bottom: 50px;
}
</style>
