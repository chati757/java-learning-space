<!--users/_id-->
<!--dynamic parameter with nuxt style-->
<template>
    <h1>A single user {{$route.params.id}}</h1>
</template>

<script>
export default {
    //special methods of nuxt
    validate(data) {
        console.log(data)
        //return data.params.id == 1
        //can using regex for check like this
        return /^\d+$/.test(data.params.id)
    },
    layout:'users'
}
</script>