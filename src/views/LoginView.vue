<template>
  <div>
    <h1>Welcome Back!</h1>
    <form @submit.prevent="authenticate" class="form-styling">
        <span>
          <label for="email">E-mail</label>
          <input type="email" name="email" id="email" v-model="email" />
        </span>
        <span>
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
          />
        </span>
        <a href="#">Forgot Password?</a>
      <button>LOG IN</button>
    </form>
    <h1>I'm new here!</h1>
    <form @submit.prevent="register" class="form-styling">
        <span>
          <label for="firstname">FIRSTNAME</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            v-model="firstname"
          />
        </span>
        <span>
          <label for="lastname">LASTNAME</label>
          <input type="text" name="lastname" id="lastname" v-model="lastname" />
        </span>
        <span>
          <label for="newemail">E-mail</label>
          <input type="email" name="newemail" id="newemail" v-model="newemail" />
        </span>
        <span>
          <label for="newpassword">Password</label>
          <input
            type="newpassword"
            name="newpassword"
            id="newpassword"
            v-model="newpassword"
          />
        </span>
        <span>
          <label for="rptpassword">Repeat Password</label>
          <input type="password" name="rptpassword" id="rptpassword" />
        </span>
        <h3>Shipping Address</h3>
        <span>
          <label for="street">Street</label>
          <input type="text" name="street" id="street" v-model="street" />
        </span>
        <span>
          <label for="city">City</label>
          <input type="text" name="city" id="city" v-model="city" />
        </span>
        <span>
          <label for="zip">Zipcode</label>
          <input type="number" name="zip" id="zip" v-model="zip" />
        </span>
      <button>SIGN UP!</button>
    </form>
  </div>
</template>

<script>
import Actions from "@/store/action.types";

export default {
  data() {
    return {
      showLogin: true,
      validatedLogin: false,
      email: "",
      newemail:"",
      newpassword:"",
      password: "",
      firstname: "",
      lastname: "",
      street: "",
      city: "",
      zip: "",
    };
  },
  methods: {
    authenticate() {
      this.validate();
      console.log("Authenticate function")
      if(this.validatedLogin){
        this.$store.dispatch(Actions.AUTHENTICATE, {
          email: this.email,
          password: this.password,
        });
      }
    },
    validate(){
      this.validatedLogin = true
      console.log("validate function")
    },
    register() {
      this.$store.dispatch(Actions.REGISTER_USER, {
        email: this.newemail,
        password: this.newpassword,
        firstname: this.firstname,
        lastname: this.lastname,
        street: this.street,
        city: this.city,
        zip: this.zip,
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