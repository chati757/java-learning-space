//this page currently not used
//vuex classic mode 
import Vuex from 'vuex'


//create a function instread of just an object 
//bacause the store it's should be callable by nuxt which will be exceuted on the server for setup the store
//other then user (every connected) can use function instread of just we get a plain-object after user connected
//user should be called to receive that own store
const createStore  = () =>{
    return new Vuex.Store({
        state:{
            someData:[]
        },
        mutations:{
            setData(state,param){
                state.someData = param
            }
        },
        actions:{
            setPost(vuexContext , post){
                vuexContext.commit('setData',post)
            }
        },
        getters:{
            loadedData(state){
                return state.someData
            }
        }
    })
}

export default createStore

/*
    //example for using
    created(){
        this.$store.dispatch('setData')
    }
*/