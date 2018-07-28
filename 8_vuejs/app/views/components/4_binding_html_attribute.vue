<template>
    <article class="border border-secondary sub-panel">
        <h3>{{titlename}}</h3>
        <input type="text" class="btn-dark" v-on:input="cssClass=$event.target.value">
        <p>Show:{{cssClass}}</p>
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
            titlename:'binding html',
            cssClass:''
        }
    }
}
</script>