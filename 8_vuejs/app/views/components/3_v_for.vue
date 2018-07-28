<template>
    <article class="border border-secondary sub-panel">
        <h3>test loop for</h3>
        <div v-for="(obj,index) in array_objs" :key="obj.id">
        ({{index}}) {{obj.id}}
        </div>
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
    const array_objs = [
            {'id':'testobj1','val':'testval1'},
            {'id':'testobj2','val':'testval2'}
    ]
    export default {
        data(){
            return{array_objs}
        }
    }
</script>