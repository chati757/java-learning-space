<template>
    <article>
        <h3>page not found(testing vue-route)</h3>
    </article>
</template>

<script>
    export default {
        created(){
            alert('redirect to home')
            //window.location.href = "/"; //run before render this template
            this.$router.push('/')
        }
    }
</script>