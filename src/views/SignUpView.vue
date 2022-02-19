<template>
  <div>
    <form @submit.prevent="register" class="form-styling">
      <span>
        <label for="firstname">FIRSTNAME</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          v-model="firstname"
          required
        />
      </span>
      <span>
        <label for="lastname">LASTNAME</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          v-model="lastname"
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
      <span>
        <label for="rptpassword">Repeat Password</label>
        <input
          type="password"
          name="rptpassword"
          id="rptpassword"
          v-model="rptpassword"
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
      firstname: "",
      lastname: "",
      street: "",
      city: "",
      zip: "",
      rptpassword: "",
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
          firstname: this.firstname,
          lastname: this.lastname,
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
          this.firstname || this.lastname || this.street || this.city
        )
      ) {
        this.errorsList.push(
          "Name, Street, City should contain only characters"
        );
        this.noError = false;
      } else if (this.newpassword != this.rptpassword) {
        this.errorsList.push("Password is not matching");
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
