<!--
before using route it's have to be setting first please check readme.nd
-->
<template>
    <article class="border border-secondary sub-panel">
        <h3>{{nametitle}}</h3>
        <div class="col">
            <div class="row">
                <router-link to="/">Home</router-link>
                <div class="textbox">back to root '/'</div>
            </div>
            <div class="row">
                <router-link to="/users/15">Users</router-link>
                <div class="textbox">back to '/Users' and send parameter id 15</div>
            </div>
        </div>
    </article>
</template>

<style scoped>
  .sub-panel{
    padding:8px;
    border-radius:5px;  
  }
  .textbox{
      margin-left: 10px;
  }
</style>

<script>
    export default {
        data(){
            return{
                nametitle:"routing link"
            }
        }
    }
</script>