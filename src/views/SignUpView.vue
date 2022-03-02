<template>
    <div class="signup">
        <div v-if="!userInfo">
            <h1>SignUp</h1>
            <BaseForm @sendFormInfo="register">
                <template slot="action-name">
                    <p>Sign Up</p>
                </template>
            </BaseForm>
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
            console.log("new user details from signup view: ", newUserDetails);
            this.$store.dispatch(Actions.REGISTER_USER, newUserDetails);
        },
    },
};
</script>

<style scoped></style>
