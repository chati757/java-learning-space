<template>
    <div>
        <searchboxinner v-bind:items="customers" 
        filterby="name" 
        v-bind:shouldReset="true"
        v-on:selected="customerSelected"
        v-on:change="onChange"></searchboxinner>
    </div>
</template>

<style scoped>

</style>

<script>
import searchboxinner from '~/components/innersearchbox.vue'
import dataset from '~/assets/example/dataset.js'
export default {
    components:{
        searchboxinner
    },
    data(){
        return{
            customers:[]
        }
    },
    mounted(){
        this.customers=dataset
    },
    methods:{
        customerSelected(customer){
            console.log(customer)
        },
        onChange(value){
            console.log(value)
        }
    }
}
</script>

