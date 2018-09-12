<template>
    <div>
        <input type="text" v-model="search" placeholder="searchbox">
        <div v-for="blog in filteredBlog" v-bind:key="blog.title" class="single-blog">
            <h5>{{blog.title}}</h5>
        </div>
    </div>
</template>

<style scoped>
    .single-blog{
        border-style: solid;
        border-width: 1px;
        padding-left:10px;
        margin-top:5px;
    }
</style>

<script>
export default {
    data(){
        return{
            blogs:[],
            search:''
        }
    },
    methods:{

    },
    created(){
        const _this=this
        this.$axios.$get('https://jsonplaceholder.typicode.com/posts')
        .then(function(data){
            //_this.blogs = data.body
           _this.blogs=data.slice(0,9)
        })
    },
    computed:{
        filteredBlog:function(){
            console.log()
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search)
            })
        }
    }
}
</script>

