<template>
    <article class="border border-secondary sub-panel">
        <h3>{{titlename}}</h3>
        <input type="text" class="btn-dark" v-bind:value="cssClass" v-on:input="cssClass=$event.target.value">
        <p v-bind:class="cssClass">color background</p>
    </article>
</template>

<style scoped>
  .sub-panel{
    width:230px;
    height:120px;
    padding:8px;
    border-radius:5px;  
  }
  .red{
      background: red;
      color:snow;
  }
</style>

<script>
export default {
    data(){
        return{
            titlename:'binding css',
            cssClass:'red' //can set defualt in here
        }
    },
    methods:{
        
    }
}
</script>