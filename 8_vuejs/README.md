# 8_vuejs

this project lean abount how to create vuejs(template engine) with vue-cli and package.json keywords 
like dependencies , devependencies how it's different ? and learn about some package in package.json
why do we need it ?

## Installation vue-cli

npm install -g vue-cli

## Build webpack (for example)

vue init webpack-simple [projactname]

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## file straucture changed and have to edit in webpack.config.js

## meaning foreach package at "dependenciesComments" in package.json

## install and setting vue router
npm install --save vue-router
app/route/entry.js
    import Vue from 'vue'
    >import VueRouter from 'vue-router'
    import App from 'components/com_app.vue'
    import CSS from 'css/bootstrap.css'

    //create 11_userspage.vue file first file is app/views/components

    >import Home from 'components/11_homepage.vue'
    >import Users from 'components/11_userpage.vue'

    >Vue.use(VueRouter);
    >const routes = [
    >   {path:'/',component:Home},
    >   {path:'/users',component:Users},
    >   {path:'*',component:Notfound} //incase page not found
    >];

    //get routes into VueRouter
    >const router = new VueRouter({
    >routes:routes,
    >mode:'history' <-rid # in url of client
    >})

    //get router into application
    new Vue({
        el:'#app',
        router,
        render(createElements){
            return createElements(App)
        }
    })

app/views/components/com_app.vue
    ><router-view></router-view>
    
    ><script>
        import linkroute from 'components/11_routing_link.vue'
        export defualt {
            components:{
    >           linkroute
            }
        }
    ></script>

see more in 11_routing_link.vue , 11_notfoundpage.vue , 11_userpage.vue , 11_homepage.vue

## install vuex
npm install --save vuex

app/route/store.js
app/views/components/12_vuex_1_.vue
app/views/components/12_vuex_2_.vue

    
