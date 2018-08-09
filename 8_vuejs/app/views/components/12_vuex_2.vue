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
        computed:{
            users(){
                return this.$store.state.users.filter(user => {
                    return (user.registered==false)
                })
            }
        },
        methods:{
            registerUser(user){
                user.registered = true;
                this.$store.state.registrations.push({userId:user.id,name:user.name})
            }
        }
        
    }
</script>