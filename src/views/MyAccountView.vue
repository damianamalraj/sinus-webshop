<template>
  <div>
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
    <section class="orders-section">
      
    </section>
  </div>
</template>

<script>
export default {
  computed:{
    userInfo(){
      return this.$store.getters.getUserDetails
    }
  }
   
}
</script>

<style>

</style>