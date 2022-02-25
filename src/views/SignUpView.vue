<template>
  <div>
    <div v-if="!userInfo">
      <form @submit.prevent="register" class="form-styling">
        <span>
          <label for="username">NAME</label>
          <input
            type="text"
            name="username"
            id="username"
            v-model="newUserDetails.name"
            required
          />
        </span>
        <span>
          <label for="newemail">E-mail</label>
          <input
            type="email"
            name="newemail"
            id="newemail"
            v-model="newUserDetails.email"
            required
          />
        </span>
        <span>
          <label for="newpassword">Password</label>
          <input
            type="password"
            name="newpassword"
            id="newpassword"
            v-model="newUserDetails.password"
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
            v-model="newUserDetails.address.street"
            required
          />
        </span>
        <span>
          <label for="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            v-model="newUserDetails.address.city"
            required
          />
        </span>
        <span>
          <label for="zip">Zipcode</label>
          <input
            type="number"
            name="zip"
            id="zip"
            v-model="newUserDetails.address.zip"
            required
          />
        </span>
        <p v-if="!noError">{{ errorsList }}</p>
        <button>SIGN UP!</button>
        <!-- <p>{{registeredUser}}</p> -->
      </form>
    </div>
    <div v-else>
      <h3> You are logged in!! Happy Shopping!!!</h3>
    </div>
  </div>
</template>

<script>
import Actions from "@/store/action.types";

export default {
  data() {
    return {
      newUserDetails: {
        email: "",
        password: "",
        name: "",
        address: {
          city: "",
          street: "",
          zip: "",
        },
      },
      validatedLogin: false,
      errorsList: [],
      noError: true,
    };
  },
  computed: {
    userInfo() {
      return this.$store.getters.getUserDetails;
    },
  },
  methods: {
    register() {
      this.validate();
      if (this.validatedLogin) {
        this.$store.dispatch(Actions.REGISTER_USER, this.newUserDetails);
      }
    },
    validate() {
      this.errorsList = [];
      if (!/^[a-zA-Z]+$/.test(this.username || this.street || this.city)) {
        this.errorsList.push(
          "Name, Street, City should contain only characters"
        );
        this.noError = false;
      }
      if (this.noError) {
        this.validatedLogin = true;
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
