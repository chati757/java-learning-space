export default {
    unregisteredUsers(state){
        return state.users.filter(user => {
            return !user.registered
        })
    },
    registrations(state){
        return state.registrations
    },
    totalregistrations(state){
        return state.registrations.length
    }
}