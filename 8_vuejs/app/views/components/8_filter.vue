<template>
    <article class="border border-secondary sub-panel">
        <h3>{{titlename}}</h3>
        <div>after filtered</div>
        <div>{{data | uppercase}} {{data2 | lowercase}}</div>
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
            titlename:'filters',
            data:'hello',
            data2:'WORLD'
        }
    },
    filters:{
        //can use arrow function
        uppercase : (value) =>{
            return value.toUpperCase();
        },
        lowercase : (value) =>{
            return value.toLowerCase();
        }
    }
}
</script>