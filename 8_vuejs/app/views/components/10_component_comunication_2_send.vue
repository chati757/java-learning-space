<template>
    <article class="border border-secondary sub-panel">
        <h3>{{titlename}}</h3>
        sender receive emit: {{message}}
        <comrecv v-on:emitfromrecv="dosomething"></comrecv>
    </article>
</template>

<style scoped>
  .sub-panel{
    width:230px;
    height:220px;
    padding:8px;
    border-radius:5px;  
  }
</style>

<script>
  import comrecv from 'components/10_component_comunication_2_recve.vue'
  export default {
    components:{comrecv},
    data(){
      return{
        titlename:"comp sender2",
        message:"waiting response from recv"
      }
    },
    methods:{
      dosomething(dataofdosomthing){
        this.message=dataofdosomthing
      }
    }
  }
</script>
