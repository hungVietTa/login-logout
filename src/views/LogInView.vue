<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="submit(!state)" class="login-form">
            <label for="login-name">Name: </label><input type="text" v-model="form.name"><br>
            <label for="login-password">Password: </label><input type="password" v-model="form.password">
            <input type="submit" value="Login">
        </form>
    </div>
</template>
<script>
    export default {
        data() {
    return {
      form: {
        name: '',
        password: '',
      },
      state:this.logState,
    }
  },
  props:["logState"],
  methods: {
    submit(state) {
    fetch("http://localhost:3000/user", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.form)
      }).then(res => {
        console.log("Request complete! response:", res);
      });
      
      this.$emit('loginStatus',state)
      this.$router.push('/')
      console.log(this.state)
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
    width: 150px;
    text-align: left;
    margin-bottom: 10px;
}
</style>
