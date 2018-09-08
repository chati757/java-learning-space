<!--pre-route users-->
<template>
    <div class="container">
        <p>[./page/user]</p>
        <h1>users pages</h1>
        <input type="text" v-model="userId">
        <button v-on:click="onLoadUser">load user</button>

        <!--routed user folder-->
        <!--link nested route (relate with all file in users folder Ex. index.vue,_id > index.vue)-->
        <br>[before nuxt-child (nested route )]
        <nuxt-child/>
    </div>
</template>

<script>
export default {
    middleware:['checkreferrer'],
    data(){
        return {
            userId:'',
        }
    },
    created(){
        console.log("page/users.vue/created ",this.$store.getters.getStatus)
    },
    mounted(){
        console.log("page/users.vue/mounted ",this.$store.getters.getStatus)
    },
    methods:{
        onLoadUser(){
            //this.$router.push('/users/'+this.userId)
            //alert(this.userId)
            this.$router.push({ path: '/users/'+this.userId })
            console.log(this.$store.getters.getStatus)
        }
    },
    //from nuxt
    layout:'users'
}
</script>

<style>
.container {
  font-family: consolas;
  text-align: center;
  border-style: solid;
}
</style>
