<template>
  <div class="product">
        <div class="card">
            <img class="img" src="../assets/1.jpeg" alt="Denim Jeans">
        </div>
        <div class="description">
            <h1>Sinus T-Shirt</h1>
            <p>Some text about the skateboard..</p>
            <p>Some text about the skateboard..</p>
            <p>Some text about the skateboard..</p>
            <p>Some text about the skateboard..</p>
            <p class="price">$19.99</p>
            <p><button>Add to Cart</button></p>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .product {
   display: flex;
}
  .card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  margin: auto;
  font-family: arial;
  
}

.description{
    margin-right: 4rem;
}

.img{
    width: 300px;
    height: 250px;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}

</style>