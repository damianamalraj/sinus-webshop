<template>
  <div class="modal">
      <slot name="header"></slot>
      <slot name="content"></slot>
      <button class="button-bg">
      <slot name="close_Button"></slot>
       button(@click="$emit(cancelEvent)") {{cancelButtonText}}
      </button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.modal {
  position: absolute;
  top: 30%;
  left: 30%;
  width: 100vh;
  height: 40vh;
  z-index: 5;
  border: solid rgb(163, 12, 12) 3px;
  place-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.button-bg {
  padding: 15px 60px;
  margin: 10px;
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
</style>