export default {
    //context is almost the same store but not completely the same
    //asynchronous code space
    register(context,userId){
        setTimeout(()=>{
            context.commit('register',userId) //<--register from mutations
        },1000)
        console.log('async')
    }
}