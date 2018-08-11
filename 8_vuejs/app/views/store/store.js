import vue from 'vue'
import vuex from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

vue.use(vuex)

export const store = new vuex.Store({
    state: {
        users:[
            {id:1,name:'Max',registered:false},
            {id:2,name:'Anna',registered:false},
            {id:3,name:'Svan',registered:false},
            {id:4,name:'Nut',registered:false}
        ],
        registrations:[]
    },
    getters:getters,
    mutations:mutations,
    actions:actions
})