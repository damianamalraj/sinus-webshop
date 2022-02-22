<template>
  <div>
      <h1> {{ getData }} </h1>
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

<style>

</style>