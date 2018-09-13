<template>
    <!--<div class="v-autocomplete-input"></div>-->
    <div>
        <v-autocomplete 
        :items="items" 
        v-model='item'
        :get-label='getLabel' 
        :min-len='0' 
        @update-items='update' 
        :component-item='template'
        @item-selected="itemSelected" 
        @item-clicked="itemClicked" 
        :input-attrs="{name:'input-test', id:'v-my-autocomplete'}">
        </v-autocomplete>
        <pre>{{ item }}</pre>
    </div>
</template>

<style>
    /*for custom autocomplete*/
    /*.\node_modules\v-autocomplete\dist\v-autocomplete.css*/
    /*set nuxt.config.js css:['v-autocomplete/dist/v-autocomplete.css'];plugins:['~/plugins/vue_autocomplete.js'];*/
    #v-my-autocomplete.v-autocomplete-input{
        background:red;
        color:white;
    }
</style>

<style scoped>
    pre{
        text-align: left;
        white-space: pre-wrap;
        background-color: #eee;
        border: 1px solid silver;
        padding: 20px !important;
        border-radius: 10px;
        font-family: monospace !important;
    }
</style>


<script>
/*for custom autocomplete*/
import ItemTemplate from '~/assets/template/ItemTemplate.vue'
export default {
  data () {
    return {
        //default item set at item obj
        item:{id: 9, name: 'Lion', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        dataset:[{id: 9, name: 'Lion', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},{id: 8, name: 'Tiger', description: 'barbar'}],
        items:[],
        template: ItemTemplate
    }
  },
    methods: {
        itemSelected (item) {
        console.log('Selected item!', item)
        },
        itemClicked (item) {
        console.log('You clicked an item!', item)
        },
        getLabel (item) {
        if (item) {
            return item.name
        }
        return ''
        },
        update (text) {
            this.items = this.dataset.filter((item) => {
                return (new RegExp(text.toLowerCase())).test(item.name.toLowerCase())
            })
        }
    }
}
</script>