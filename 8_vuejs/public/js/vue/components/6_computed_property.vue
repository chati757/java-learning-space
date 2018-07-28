<template>
    <article class="border border-secondary sub-panel">
        <h3>{{titlename}}</h3>
        <button type="button" class="btn btn-dark" v-on:click="increment">increment</button>
        <br>clicknums: {{clicksnumval}} cal and count: {{counter}}
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
            titlename:'computed prop',
            clicksnumval:0,
            counterval:0
        }
    },
    methods:{
        increment(){
            this.clicksnumval++;
        }
    },
    computed:{
        //ref form increment event because this.clicksnumval is a same val
        counter(){
            return this.clicksnumval*2;
        }
    }
}
</script>