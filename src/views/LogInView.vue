<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login(form)" class="login-form">
      <label for="login-name">Name: </label
      ><input type="text" v-model="form.name" /><br />
      <label for="login-password">Password: </label
      ><input type="password" v-model="form.password" /><br>
      <input type="submit" value="Login" />
    </form>
  </div>
</template>
<script>
import { mapActions,mapState } from "vuex";

export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState(['loginState'])
  },
  methods: {
    ...mapActions(["login"]),
  }
};
</script>
<style scoped>
label {
  display: inline-block;
  width: 150px;
  text-align: left;
  margin-bottom: 10px;
}
</style>
