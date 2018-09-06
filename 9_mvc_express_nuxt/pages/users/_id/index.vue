<!--users/_id-->
<!--dynamic parameter with nuxt style-->
<template>
    <div class="container">
        <p>[nuxt-child (nested route )]</p>
        <p>[./page/user/_id/index]</p>
        <h1>A single user {{$route.params.id}}</h1>
    </div>
</template>

<script>
export default {
    layout:'users',
    //special methods of nuxt
    validate(data) {
        console.log(data)
        //return data.params.id == 1
        //can using regex for check like this
        return /^\d+$/.test(data.params.id)
    }
}
</script>

<style>
.container {
  font-family: consolas;
  text-align: center;
  border-style: solid;
}
</style>