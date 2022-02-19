<template>
  <div>
    <h1>Welcome Back!</h1>
    <form @submit.prevent="authenticate" class="form-styling">
      <span>
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" v-model="email" required />
      </span>
      <span>
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          required
        />
      </span>
      <a href="#">Forgot Password?</a>
      <button>LOG IN</button>
    </form>
    <h1>I'm new here!</h1>
    <router-link to="/signup">Sign UP!!</router-link>
  </div>
</template>

<script>
import Actions from "@/store/action.types";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    authenticate() {
      console.log("Authenticate function");
      this.$store.dispatch(Actions.AUTHENTICATE, {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.form-styling {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    margin: 0.25rem;
    align-self: flex-start;
  }
  input {
    margin: 0.25rem;
    place-items: center;
    height: 40px;
    width: 200%;
    border: solid 2px rgb(71, 71, 71);
  }
  span {
    display: flex;
    flex-direction: column;
  }
}
a {
  text-decoration: none;
  color: rgb(102, 68, 5);
}
button {
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