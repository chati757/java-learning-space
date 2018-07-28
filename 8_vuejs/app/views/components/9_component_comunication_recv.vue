<template>
    <div class="border border-secondary">
        <h3>{{titlename}}</h3>
        <input class="btn-dark" type="text" v-bind:value="msg" v-on:input="changeMessage">
        {{message}}
    </div>
</template>

<script>
export default {
    //prepare for passing message value from another components 
    props:['msg'],
    data(){
        return{
            titlename:'comp receiver',
            message : 'waiting message from sender'
        }
    },
    methods:{
        changeMessage(event){
            console.log('show event')
            console.log(event)
            this.message = event.target.value;
            this.$emit('messageChanged',this.message);
        }
    }
    
}
</script>