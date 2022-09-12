<template>
  <div class="register">
    <h1>{{$store.state.loginState}}</h1>
    <form @submit.prevent="register(form)">
      <label for="name">Name: </label><input type="text" v-model="form.name"><br />
      <label for="name">Email: </label><input type="email" v-model="form.email"><br />
      <label for="name">Password: </label><input type="password" v-model="form.password"><br />
      <label for="name">Confirm pasword: </label><input type="password" v-model="confirmPassword"><br />
      <input type="submit" value="Register">
    </form>
  </div>
</template>
<script>
import { mapActions,mapState } from 'vuex'
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      },
      confirmPassword: ''
    }
  },
  computed:{
    ...mapState(['loginState'])
  },
  methods:{
    ...mapActions(['register'])
  }
}
</script>

<style scoped>
label {
  display: inline-block;
  width: 200px;
  text-align: left;
  margin-bottom: 10px;
}
</style>