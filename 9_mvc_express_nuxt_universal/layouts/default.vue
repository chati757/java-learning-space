<template>
  <!--default page not working whenever using request to eariler page before error-->
  <!--example request user page and then get error (not how default layout)-->
  <!--but if local link instead to user page abd then get errer (it's show default layout first and 
  goto error layout later)-->
  <!--make request another path without the index path it's affect to default layout not run if another layout
  have been created Ex. layout/users.vue-->
  <!--therefor when determine style or script in error of another layout (/user.vue/error.vue) it's must specify value to error.vue only
  do not specify property of error layout in defult layout (strictly)(warning)-->
  <div>
    <header>default layout</header>
    <headercomp></headercomp>
    <nuxt/>
  </div>
</template>

<style>
/*for default style page*/

</style>

<script>
import headercomp from '@/components/header.vue'
export default {
  components:{
    headercomp
  }
}
</script>
