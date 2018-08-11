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
    import {mapGetters} from 'vuex'
    export default {
        data(){
            return{
                titlename:'vuex_1_registration',
            }
        },
        methods:{
            //optional 2/2 for called mutation 
            unregister(registration){
                this.$store.commit({
                    type: 'unregister',
                    userId: registration.userId
                })
            }
        },
        //other way of map type (mapgetters type)(require babel-preset-stage-2 or 3)(for use... spread operator)
        computed:{
            ...mapGetters({
                registrations:'registrations',
                total:'totalregistrations'
            })
        }
        
    }
</script>