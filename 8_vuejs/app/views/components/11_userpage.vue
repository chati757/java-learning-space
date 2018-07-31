<template>
    <article>
        <h3>user page (testing vue-route)</h3>
        user_id : {{$route.params.userId}}
        <button type="button" class="btn btn-dark" v-on:click="gohome()">Back Home</button>
    </article>
</template>

<script>
    export default {
        methods:{
            gohome(){
                this.$router.push('/')
            }
        }
    }
</script>
