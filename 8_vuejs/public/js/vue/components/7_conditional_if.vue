<template>
    <article class="border border-secondary sub-panel">
        <h3>{{titlename}}</h3>
        <button type="button" class="btn btn-dark" v-on:click="show = !show">on/off</button>
        <h4 v-if="show">on</h4><h4 v-else>off</h4>
        <!--can use v-show instead for pre-rendering Ex.image-->
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
            titlename:'if hideshow',
            show:false
        }
    }
}
</script>