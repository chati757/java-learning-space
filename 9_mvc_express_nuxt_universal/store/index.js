//this page currently not used
//vuex classic mode 
import vuex from 'vuex'
/*
//incase seperate store
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'
*/


//create a function instread of just an object 
//bacause the store it's should be callable by nuxt which will be exceuted on the server for setup the store
//other then user (every connected) can use function instread of just we get a plain-object after user connected
//user should be called to receive that own store
const createStore  = () =>{
    return new vuex.Store({
        state:{
            someData:[],
            referrer:null,
            status:null,
            key:null,
            testdata:null
        },
        mutations:{
            setData(state,param){
                console.log('store/setData')
                state.someData = param
            },
            setReferrer(state,param){
                console.log('store/setRef ',param.ref)
                state.referrer=param.ref
            },
            //setStatus
            setAntihotlink(state,param){
                console.log('store/setStatus ',param.status)
                state.status = param.status
            },
            setKey(state,keyobj){
                console.log('store/setkey ',keyobj)
                state.key  = keyobj
            }
        },
        actions:{
            //special action from nuxtjs (first dispatched on the server)(only server)
            nuxtServerInit(vuexContext,context){
                return context.app.$axios
                    .$get("http://localhost:8080/req/apikey")
                    .then(keyobj => {
                        console.log('/store/nuxtServerInit ',keyobj)
                        vuexContext.commit('setKey',keyobj)
                    })
                    .catch(e => context.error(e));
               
                /*
                vuexContext.commit('FunctionOfMutations','param')
                */
                /*
                vuexContext.commit({
                    type:'ref',
                    ref:null
                })
                */
                /*
                return new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                        
                    },2000)
                })
                */
            },
            setPost(vuexContext , post){
                vuexContext.commit('setData',post)
            },
            checkapi(vuexContext,params){
                console.log('store/action/checkapi')
                console.log(params.apikey)
                return this.$axios.get('http://localhost:8080/check/apikey/?apikey='+params.apikey)
                .then(res => {
                    console.log('store/action/checkapi inthen ',res.data.message)
                    return res.data.message
                })
                .catch(e => context.error(e))
            }
        },
        getters:{
            loadedData(state){
                return state.someData
            },
            getReferrer(state){
                console.log('store/getRef ',state.referrer)
                return state.referrer
            },
            getStatus(state){
                console.log('store/getStatus ',state.status)
                return state.status
            },
            getKey(state){
                console.log('store/getApikey ',state.key)
                return state.key
            }
        }
    })
}

export default createStore

/*
    //example for using
    created(){
        this.$store.dispatch('setData',this.data_object_from_somepage)
    }
*/