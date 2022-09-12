<template>
  <nav>
    <router-link to="/"><span>Home</span></router-link>
    <router-link v-if="!$store.state.loginState" to="/login"> | <span>Log In</span></router-link>
    <router-link v-if="!$store.state.loginState" to="/register"> | <span>Register</span></router-link> 
    <router-link v-if="$store.state.loginState" @click="logout" to="/" > | <span>Logout</span></router-link>
  </nav>
  <router-view/>
</template>
<script>
import { mapActions,mapMutations } from'vuex'

  export default {
    name:"App",
    methods: {
      ...mapActions(['logout']),
      ...mapMutations(['ToggleLoginState'])
    },
    mounted:function(){
      if(localStorage.getItem("user"))
        this.ToggleLoginState()
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
  text-decoration: none;
}
nav a span{
  text-decoration: underline;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
