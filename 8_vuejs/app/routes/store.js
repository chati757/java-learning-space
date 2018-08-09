import vue from 'vue'
import vuex from 'vuex'

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
    }
})