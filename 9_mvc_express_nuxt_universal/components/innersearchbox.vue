<template>
    <div class="autocomplete">
        <div class="input" v-on:click="ToggleVisible" v-text="selectedItem ? selectedItem[filterby] : ''"></div>
        <div class="placeholder" v-if="selectedItem==null" v-text="title"></div>
        <div class="popover" v-show="visible">
            <input type="text"
            ref="input"
            v-model="query"
            v-on:keydown.up="up"
            v-on:keydown.down="down"
            v-on:keydown.enter="selectItem"
            placeholder="start typing...">
            <div class="options" ref="optionsList">
                <ul>
                    <li v-for="(match,index) in matches" 
                    v-bind:key="match[index]"
                    v-bind:class="{'selected':(selected==index)}"
                    v-on:click="itemClicked(index)"
                    v-text="match[filterby]"></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .autocomplete{
        width:100%;
        position: relative;
        .input{
            height:40px;
            border-color: #9e9e9e;
            border-radius:3px;
            border-style: solid;
            border-radius: 3px;
            border-width: 1px;
            cursor: text;
            padding:5px;
        }
        .placeholder{
            position: absolute;
            top:10px;
            left:10px;
            font-size: 25px;
            color:#d0d0d0;
            //placeholder text cannot click or drag with pointer-events: none;
            pointer-events: none;
        }
        .popover{
            min-height: 50px;
            border-color: #9e9e9e;
            border-radius:3px;
            border-style: solid;
            position:absolute;
            top:46px;
            left:0px;
            right:0px;
            text-align: center;
            input{
                width:95%;
                margin-top:5px;
                height:40px;
                font-size:16px;
                border-color: #9e9e9e;
                border-radius: 3px;
                border-style: solid;
                padding-left:8px;
            }
        }
        .options{
            max-height:150px;
            overflow:scroll;
            margin-top:5px;
            ul{
                list-style-type:none;
                text-align:left;
                padding-left:0px;
                li{
                    border-color: #9e9e9e;
                    border-style: solid;
                    border-bottom: 1px;
                    padding:10px;
                    cursor:pointer;
                    background: #f1f1f1;
                }
                .selected{
                        background:rgb(76, 206, 126);
                        color:black;
                    }
            }
        }
    }
</style>

<script>
export default {
    //{'items' , 'filterby' ,'title','shouldReset'}
    props:{
        items:{
            default:[],
            type:Array
        },
        filterby:{
            type:String
        },
        title:{
            default:'Select One...',
            type:String
        },
        shouldReset:{
            default:true,
            type:Boolean
        }
    },
    data(){
        return{
            itemHeight:41,
            selectedItem:null,
            selected:0,
            query:'',
            visible:false,
        }
    },
    methods:{
        ToggleVisible(){
            this.visible = !this.visible
            //click and focus at input
            setTimeout(()=>{
                this.$refs.input.focus()
            },100)
        },
        itemClicked(index){
            this.selected = index
            this.selectItem()
        },
        selectItem(){
            this.selectedItem = this.matches[this.selected]
            this.visible = false;

            if(this.shouldReset){
                this.query=''
                this.select = 0
            }
            //resolve this : this.$emit('selected',this.selectedItem)
            //it's return vue object
            this.$emit('selected',JSON.parse(JSON.stringify(this.selectedItem)))
        },
        up(){
            console.log('up')
            if(this.selected==0){
                return
            }
            this.selected-=1
            this.scrollToItem()
        },
        down(){
            console.log('down')
            if(this.selected>=this.matches.length-1){
                return
            }
            this.selected+=1
            this.scrollToItem()
        },
        scrollToItem(){
            this.$refs.optionsList.scrollTop = this.selected * this.itemHeight;
        }
    },
    computed:{
        matches(){
            // send typing data to another place for use
            this.$emit('change',this.query)

            if(this.query == ''){
                return []
            }
            /*
                example include
                var pets = ['cat', 'dog', 'bat'];
                console.log(pets.includes('cat'));
            */
            return this.items.filter((item)=>item[this.filterby].includes(this.query.toLowerCase()))
        }
    }
}
</script>
