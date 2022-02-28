<template>
  <div>
    <div v-if="!userInfo">
      <BaseForm @sendFormInfo="register" />
    </div>
    <div v-else>
      <h3>You are logged in!! Happy Shopping!!!</h3>
    </div>
  </div>
</template>

<script>
import BaseForm from "@/components/BaseForm";
import Actions from "@/store/action.types";

export default {
  components: { BaseForm },
  computed: {
    userInfo() {
      return this.$store.getters.getUserDetails;
    },
  },
  methods: {
    // Change this to actual action
    register(newUserDetails) {
      console.log("new user details from signup view: ", newUserDetails)
      this.$store.dispatch(Actions.REGISTER_USER, newUserDetails);
    },
  },
};
</script>

<style scoped></style>
