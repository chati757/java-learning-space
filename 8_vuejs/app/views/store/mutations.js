export default {
    //synchronous code space
    register(state,userId){
        //find user in users object
        const user = state.users.find(user => {
            return user.id == userId
        })
        user.registered = true;
        const registration = {
            userId:userId,
            name:user.name,
        }
        state.registrations.push(registration)
    },

    //optional 2/2 using payload instead
    unregister(state,payload){
        const user_unregister = state.users.find(user => {
            return user.id == payload.userId
        })
        user_unregister.registered = false

        const registration = state.registrations.find(regis => {
            return regis.userId == payload.userId
        })
        state.registrations.splice(state.registrations.indexOf(registration),1)
    }
}