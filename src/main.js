import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            loginState:false
        }

    },
    mutations: {
        ToggleLoginState(state){
            state.loginState = !state.loginState
        }
    },
    actions: {
        async register(context,form) {
            await fetch("http://localhost:3000/user", {
              method: "POST",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(form)
            }).then(res => {
              console.log("Request complete! response:", res);
            }).catch(err => console.log(err));
            router.push('/login')
          },
        async login(context,form){
            let result = await fetch(`http://localhost:3000/user?name=${form.name}`).then(
                res => res.json()
            )
            if (!result.length) 
                alert("username not existed")
            else if (result[0].password != form.password) 
                alert("wrong password") 
            else {
                localStorage.setItem("user",form.name)
                localStorage.setItem("passsword",form.password)
                context.commit('ToggleLoginState')
                router.push('/')
            }
        },
        logout(context){
            context.commit('ToggleLoginState')
            localStorage.removeItem("user")
            localStorage.removeItem("passsword")
        }
    }})

createApp(App).use(router).use(store).mount('#app')
export {store}
