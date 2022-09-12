import { createStore } from 'vuex'
import router from '../router/index.js'
import VuexPersist from 'vuex-persist';

const vuexLocal = new VuexPersist({
    key: 'vuex',
    storage: window.localStorage,
  })

const store = createStore({
    state(){
        return {
            loginState:false,
            meo:"kk"   
        }

    },
    mutations: {
        ToggleLoginState(state){
            state.loginState = !state.loginState
            state.meo = "lyly"
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
                context.commit('ToggleLoginState')
                router.push('/')
            }
        },
        logout(context){
            context.commit('ToggleLoginState')
        }
    },
    plugins:[vuexLocal.plugin]
})
export default store