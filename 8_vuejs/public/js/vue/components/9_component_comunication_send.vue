<template>
    <article class="border border-secondary sub-panel">
        <h3>{{titlename}}</h3>
        sender : {{message}}
        <compcomrecv v-bind:msg="message" v-on:messageChanged="message=$event"></compcomrecv>
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
    import compcomrecv from './9_component_comunication_recv.vue';
    
    export default {
        components:{compcomrecv},
        data(){
            return{
                titlename:'comp sender',
                message : 'waiting message response from receiver'
            }
        }
        
    }
</script>