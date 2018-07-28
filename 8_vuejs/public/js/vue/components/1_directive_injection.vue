<template>
    <article class="border border-secondary sub-panel">
        <h3>{{paneltitle}}</h3>
        <p>{{panelcontent}}</p>
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
    props:['paneltitle','panelcontent']
}
</script>