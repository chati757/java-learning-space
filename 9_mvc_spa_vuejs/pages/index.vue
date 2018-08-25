<!--main index-->
<template>
  <section class="container">
    <div>
      <headercomp></headercomp>
      <logo/>
      <h1 class="title">
        9_mvc_spa_vuejs
      </h1>
      <a href="/users">Users (new request)</a><br>
      <nuxt-link to="/users">Users (seem a router-link)(prevent send request)</nuxt-link>

    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  text-align: center;
}
</style>
