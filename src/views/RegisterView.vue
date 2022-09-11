<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="submit">
      <label for="name">Name: </label><input type="text" v-model="form.name"><br />
      <label for="name">Email: </label><input type="email" v-model="form.email"><br />
      <label for="name">Password: </label><input type="password" v-model="form.password"><br />
      <label for="name">Confirm pasword: </label><input type="password" v-model="confirmPassword"><br />
      <input type="submit" value="Register">
    </form>
  </div>
</template>
<script>

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      },
      confirmPassword: '',
      state:this.logState,
    }
  },
  props:["logState"],
  methods: {
    submit() {
      fetch("http://localhost:3000/user", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.form)
      }).then(res => {
        console.log("Request complete! response:", res);
      });
      this.$router.push('/')
    }
  },
  mounted:function() {
    if(this.state)
      this.$router.push('/')
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