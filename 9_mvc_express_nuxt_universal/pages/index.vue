<!--main index-->
<template>
  <section class="container">
    <div>
      <h3>components</h3>
      <logo/>
      <h1 class="title">
        9_mvc_express_nuxt ヌクス
      </h1>
      <p>testing integrate with express framework and testing internal and external route</p>
      <b><p>suitable for work with univesal_app and static_app</p></b>
      <div class="topic">
        <b>1.ROUTE</b><b class="green"> 1.1.1 chack referrer state in nuxt middleware for resolve issue(*out of  default layout)</b><br>
        <b class="green">1.1.2 or using token or cookie and store state</b>
      </div>
      <ul>
        <li><a href="/users">Users (a link)(new request)(*when error default-layout not running <b v-bind:class="css_color">{{layout_result}}</b>)</a></li>
        <li><a href="/barbar">non-exist a link(follow extendRoutes path in nuxt.config.js) <b style="color:rgb(73, 158, 80);">(*under default layout)</b></a></li>
        <li><atag href="/users">a tag vue-wrapper(*when error default-layout not running <b v-bind:class="css_color">{{layout_result}}</b>)</atag></li>
        <li><nuxt-link to="/users">Users (nuxt-link)(seem a router-link)(prevent send new  request)(faster a link) <b style="color:rgb(73, 158, 80);">(*under default layout)</b></nuxt-link></li>
        <li><nuxt-link to="/barbar">non-exist nuxt-route(follow extendRoutes path in nuxt.config.js) <b style="color:rgb(73, 158, 80);">(*under default layout)</b></nuxt-link></li>
        *incase path collision between internal link and external link (express server) in [TAG A] it's will be select external first!
      </ul>
      <div class="topic">
        <b class="green">1.2 ANTI-EXTERNAL LINK OR HOTLINK</b>
      </div>
      <ul>
        <li>[A TAG] ANTI-EXTERNAL LINK OR HOTLINK <input type="checkbox" id="checkbox" v-model="checked" v-on:click="checked_stage">
          <br>
          <br>(middleware/checkreferrer)
          <br>&nbsp;export default function(context) {
          <br>&nbsp;&nbsp;console.log("[Middleware] check referrer")
          <br>&nbsp;&nbsp;<b v-if="checked">if(context.store.getters.getStatus==null){</b>
          <br>&nbsp;&nbsp;&nbsp;&nbsp;<b v-if="checked">context.redirect("/error");</b>
          <br>&nbsp;&nbsp;<b v-if="checked">}</b>
          <br>&nbsp;}
          <br>
          <br>(page/index)
          <br>&nbsp;checked : <b v-bind:class="checkstate_true">true</b> | <b v-bind:class="checkstate_false">false</b>
          <br>
        </li>
      </ul>
      <div class="topic">
        <b>2.EXPRESS SERVER MIDDLEWARE</b>
        <b><p>**suitable for MVC structure.please check folders [./server] for reference**</p></b>
        <p>*please check console log in server-side and client-side for understanding</p>
      </div>
      <ul>
        <li><a href="/test">a tag <b style="color:rgb(73, 158, 80);">(*out of default layout)(working : on-server state)</b></a></li>
        <li><nuxt-link to="/test">nuxt-link <b style="color:red;">(*under of default layout)(not working : on-client state)</b></nuxt-link></li>
      </ul>
      <div class="topic">
        <b>3.AUTHENTICATION</b>
        <br>npm install --save @nuxtjs/axios (models type)
      </div>
      <ul>
        <li>(express)(localstore)(uuid-apikey) TOKEN
          <br><p>
            npm install --save uuid-apikey
            *if you need localstorage please npm install --save vuex-persistedstate (for using localstorage)
            <br>apikey from store : <input style="width:280px;text-align: center;" type="text" v-model="apikey_input_value" disabled>
            <br>(store/index) automatic request with nuxtServerInit function to request an apikey.
            <br>(store/index) (page/index/dispatch->store/action/checkapi/axios getstring) (locahost:port/check/apikey)
            <br><button v-on:click="checkapikey">check from server</button><b>{{check_apikey}}</b>
          </p>
        </li>
        <li>(express)(cookie) TOKEN</li>
        <li>(express)(session)</li>
        <li>(firebase)(localstore) TOKEN
          <br><p>
            *if you need localstorage please npm install --save vuex-persistedstate (for using localstorage)
          </p>
        </li>
        <li>(firebase)(cookie) TOKEN</li>
      </ul>
      <div class="topic">
        <b>4.DATABASE</b>
        <p></p>
      </div>
      <div class="topic">
        <b>4.1 DATABASE (server)(with axios)</b>
      </div>
      <ul>
        <li>GET (list data)</li>
        <li>POST (edit data)</li>
        <li>PUT (update data)</li>
        <li>DELETE (delete data)</li>
      </ul>
      <div class="topic">
        <b>4.2 DATABASE (firebase)(with axios)</b>
        <br>*please check authentication (firebase)(cookie) first !
      </div>
      <ul>
        <li>GET (list data)</li>
        <li>POST (edit data)</li>
        <li>PUT (update data)</li>
        <li>DELETE (delete data)</li>
      </ul>
      <div class="topic">
        <b>5.LAYOUT</b>
      </div>
      <div class="topic">
        <b>5.1 LAYOUT (responsive)</b>
      </div>
      <div class="topic">
        <b>6.SCSS</b>
      </div>
      <div class="topic">
        <b>7.SEARCH POST (input field autocomplete)</b>
      </div>
      <div class="topic">
        <b>8.SEARCH IMAGE GALLERY (selector)</b>
      </div>
       <div class="topic">
        <b>8.1 SEARCH IMAGE GALLERY (shuffle)</b>
      </div>
      <div class="topic">
        <b>10.IMAGE SLIDE GALLERY</b>
      </div>
      <div class="topic">
        <b>11.NAV SIDE</b>
      </div>
      <div class="topic">
        <b>12.GRAPH</b>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import atag from '~/components/atag.vue'

export default {
  data(){
    return{
      checked:true,
      checkstate_false:"",
      checkstate_true:"",
      layout_result:"external and hotlink protected",
      css_color:"",
      apikey_input_value:"apikey is empty : please check network conntection",
      check_apikey:" no request"
    }
  },
  components: {
    Logo,
    atag
  },
  created(){
    console.log('/page/index.vue/created')
  },
  mounted(){
    console.log('/page/index.vue/mounted')
    console.log(this.$store.getters.getKey)
    this.checklayout()
    this.apikey_input_value=this.$store.getters.getKey.apiKey
  },
  methods: {
    checked_stage(){
      console.log('/page/index.vue/methods checked_stage')
      if(this.checked==true){
        this.css_color="red"
        this.layout_result="external and hotlink not protected"
        this.checkstate_false=""
        this.checkstate_true="light"
      }else{
        this.css_color="blue"
        this.layout_result="external and hotlink protected"
        this.checkstate_false="light"
        this.checkstate_true=""
      }
    },
    checklayout(){
      this.$store.commit({
          type:'setAntihotlink',
          status:this.checked
      })
      if(this.checked){
        this.$store.commit({
            type: 'setReferrer',
            ref: 'index'
        })
        
        //check store state
      }else{
        this.layout_result="out of default layout"
        this.css_color="red"
        this.$store.commit({
            type: 'setReferrer',
            ref: null
        })
      }
    },
    checkapikey(){
      this.$store.dispatch('checkapi',{
        apikey:this.apikey_input_value
      }).then(result=>{
        this.check_apikey=" "+result
      })
    }
  }
}
</script>

<style>
.container {
  font-family: consolas;
  text-align: center;
  border-style: solid;
  padding:40px;
}
.blue{
  color:blue;
}
.red{
  color:red;
}
.green{
  color:rgb(73, 158, 80)
}

li{
  text-align: left;
}
.topic{
  text-align: left;
}
.light{
  font-weight: 100;
}
</style>
