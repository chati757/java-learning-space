import Vue from 'vue'
import VueRouter from 'vue-router'
import App from 'components/com_app.vue'
import CSS from 'css/bootstrap.css'
import { store } from '../views/store/store.js'

import Home from 'components/11_homepage.vue'
import Users from 'components/11_userpage.vue'
import Notfound from 'components/11_notfoundpage.vue'

//create route
Vue.use(VueRouter)

const routes = [
  {path:'/',component:Home},
  {path:'/users/:userId',component:Users}, //send parameter
  {path:'*',component:Notfound}
]

//get routes into VueRouter
const router = new VueRouter({
  routes:routes,
  mode:'history'
})

//get router into application
new Vue({
  el:'#app',
  store:store,
  router:router,
  render(createElements){
    return createElements(App)
  }
})