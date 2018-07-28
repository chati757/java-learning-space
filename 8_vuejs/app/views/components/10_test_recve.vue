<template>
    <article class="border border-secondary">
        <h3>{{titlename}}</h3>
        <button type="button" class="btn btn-dark" v-on:click="responsedata('A')">send A</button>
        receive : {{test}}
    </article>
</template>

<script>
export default {
  data(){
    return{
        //can inject data in commponent
        titlename:'v-on:click',
        test:'waiting data from sender'
    }
  },
  methods:{
    responsedata(data){
        this.test = data
        this.$emit('emitfromrecv',data)
    }
  }
}
</script>