<!--pre-route users-->
<template>
    <div>
        <h1>this is the users pages</h1>
        <input type="text" v-model="userId">
        <button v-on:click="onLoadUser">load user</button>

        <!--routed user folder-->
        <!--link nested route (relate with all file in users folder Ex. index.vue,_id > index.vue)-->
        <nuxt-child/>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userId:''
        }
    },
    methods:{
        onLoadUser(){
            this.$router.push('/users/'+this.userId)
        }
    },
    //from nuxt
    layout:'users'
}
</script>