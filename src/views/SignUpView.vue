<template>
  <div>
    <form @submit.prevent="register" class="form-styling">
      <span>
        <label for="username">NAME</label>
        <input
          type="text"
          name="username"
          id="username"
          v-model="username"
          required
        />
      </span>
      <span>
        <label for="newemail">E-mail</label>
        <input
          type="email"
          name="newemail"
          id="newemail"
          v-model="newemail"
          required
        />
      </span>
      <span>
        <label for="newpassword">Password</label>
        <input
          type="password"
          name="newpassword"
          id="newpassword"
          v-model="newpassword"
          required
        />
      </span>
      <h3>Shipping Address</h3>
      <span>
        <label for="street">Street</label>
        <input
          type="text"
          name="street"
          id="street"
          v-model="street"
          required
        />
      </span>
      <span>
        <label for="city">City</label>
        <input type="text" name="city" id="city" v-model="city" required />
      </span>
      <span>
        <label for="zip">Zipcode</label>
        <input type="number" name="zip" id="zip" v-model="zip" required />
      </span>
      <p v-if="!noError">{{ errorsList }}</p>
      <button>SIGN UP!</button>
    </form>
  </div>
</template>

<script>
import Actions from "@/store/action.types";

export default {
  data() {
    return {
      newemail: "",
      newpassword: "",
      username: "",
      street: "",
      city: "",
      zip: "",
      validatedLogin: false,
      errorsList: [],
      noError: true,
    };
  },
  methods: {
    register() {
      this.validate();
      if (this.validatedLogin) {
        this.$store.dispatch(Actions.REGISTER_USER, {
          email: this.newemail,
          password: this.newpassword,
          name: this.username,
          street: this.street,
          city: this.city,
          zip: this.zip,
        });
      }
    },
    validate() {
      this.errorsList = [];
      if (
        !/^[a-zA-Z]+$/.test(
          this.username ||  this.street || this.city
        )
      ) {
        this.errorsList.push(
          "Name, Street, City should contain only characters"
        );
        this.noError = false;
      } 
      if (this.noError) {
        this.validatedLogin = true;
        console.log("validate function");
      }
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
