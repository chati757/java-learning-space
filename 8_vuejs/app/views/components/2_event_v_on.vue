<template>
    <article class="border border-secondary sub-panel">
        <h3>{{titlename}}</h3>
        <button type="button" class="btn btn-dark" v-on:click="changedata">Dark</button>
        {{test}}
    </article>
</template>

<style scoped>
  .sub-panel{
    width:230px;
    height:120px;
    padding:8px;
    border-radius:5px;  
  }
</style>

<script>
    export default {
        data(){
            return{
                //can inject data in commponent
                titlename:'v-on:click',
                test:'fisrstdata'
            }
        },
        methods:{
            changedata(event){
                this.test = "change data"
            }
        }
    }
</script>