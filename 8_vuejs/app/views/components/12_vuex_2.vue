<template>
    <article class="border border-secondary sub-panel">
        <h4>{{titlename}}</h4>
        <div v-for="user in users" :key="user.id">
            {{user.name}}
            <button v-on:click="registerUser(user)">register</button>
        </div>
    </article>
</template>

<style scoped>
    .sub-panel{
    width:230px;
    height:280px;
    padding:8px;
    border-radius:5px;  
    }
</style>

<script>
    export default {
        data(){
            return{
                titlename:'vuex_2_registration',
            }
        },
        //manual map type
        computed:{
            users(){
                return this.$store.getters.unregisteredUsers
            }
        },
        methods:{
            registerUser(user){
                //optional 1/2 for called mutation 
                //this.$store.commit('register',user.id);
                this.$store.dispatch('register',user.id) //<--name of action and payload
            }
        }
        
    }
</script>