<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="'/login'">Log In</router-link> |
    <router-link :to="'/register'">Register</router-link> 
    <router-link v-if="state" @click="'/login'"  >| Logout</router-link>
  </nav>
  <router-view :logState="state" @loginStatus="status"/>
</template>
<script>
  export default {
    name:"App",
    data() {
      return {
        state:false
      }
    },
    methods: {
      status:function(e){
        this.state=e
        console.log(3)
      }
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
