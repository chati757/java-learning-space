<template>
    <article class="border border-secondary sub-panel">
        <h4>{{titlename}}</h4>
        <h5>registrations</h5>
        <h5>Total: {{total}}</h5>
        <div class="row" v-for="registration in registrations" v-bind:key="registration.name">
            <h4>{{registration.name}}</h4>
            <span v-on:click="unregister(registration)">(unregister)</span>
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
    h4{
        padding-left:8px;
    }
</style>

<script>
    export default {
        data(){
            return{
                titlename:'vuex_1_registration',
            }
        },
        methods:{
            unregister(registration){
                const user = this.$store.state.users.find(user => {
                    return user.id == registration.userId
                })
                user.registered = false
                this.$store.state.registrations.splice(this.registrations.indexOf(registration),1)
            }
        },
        computed:{
            registrations(){
                return this.$store.state.registrations
            },
            total(){
                return this.$store.state.registrations.length
            }
        }
    }
</script>