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
        <li><a href="/users">Users (a link)(new request)(*when error default-layout not running <b style="color:red;">(*out of  default layout)</b>)</a></li>
        <li><a href="/barbar">non-exist a link(follow extendRoutes path in nuxt.config.js) <b style="color:rgb(73, 158, 80);">(*under default layout)</b></a></li>
        <li><atag href="/users">a tag vue-wrapper(*when error default-layout not running <b style="color:red;">(*out of default layout)</b>)</atag></li>
        <li><nuxt-link to="/users">Users (nuxt-link)(seem a router-link)(prevent send new  request)(faster a link) <b style="color:rgb(73, 158, 80);">(*under default layout)</b></nuxt-link></li>
        <li><nuxt-link to="/barbar">non-exist nuxt-route(follow extendRoutes path in nuxt.config.js) <b style="color:rgb(73, 158, 80);">(*under default layout)</b></nuxt-link></li>
      </ul>
      <div class="topic">
        <b class="green">1.2 ANTI-EXTERNAL LINK OR HOTLINK</b>
      </div>
      <ul>
        <li>[A TAG] ANTI-EXTERNAL LINK OR HOTLINK</li>
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
      </div>
      <ul>
        <li>(express)(localstore) TOKEN</li>
        <li>(express)(cookie) TOKEN</li>
        <li>(express)SESSION</li>
        <li>(firebase)(localstore) TOKEN</li>
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
        <b>5.1 LAYOUT (RESPONSIVE)</b>
      </div>
      <div class="topic">
        <b>6.SCSS</b>
      </div>
      <div class="topic">
        <b>7.SEARCH POST</b>
      </div>
      <div class="topic">
        <b>8.SEARCH IMAGE GALLERY</b>
      </div>
       <div class="topic">
        <b>9.1 SEARCH IMAGE GALLERY (SHUFFLE)</b>
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
  components: {
    Logo,
    atag
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
.green{
  color:rgb(73, 158, 80)
}

li{
  text-align: left;
}
.topic{
  text-align: left;
}
</style>
