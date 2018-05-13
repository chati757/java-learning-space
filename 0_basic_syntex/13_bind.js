const user = {
    data:[
        {name:'testname01'},
        {name:'testname02'}
    ],
    showFirstUser:function(){
        console.log("inthis")
        console.log(this)
        console.log(this.data[0].name)
    }
}

//problem
const show = user.showFirstUser
//show()//error because this all outer user object and this it's mean <--thisline(14) not atline(8,9)

//resolve
console.log("resolve 1")
const show2 = user.showFirstUser.bind(user)
show2()

//resolve2 non-binding
console.log("resolve 2")
const user2 = {
    //insert callback
    handleMessage:function(handler){
        handler()
    },
    testname:'luna',
    data:[
        {name:'testname01'},
        {name:'testname02'}
    ],
    //<--resolve in this
    showFirstUser:function(){
        this.handleMessage((message => console.log(this.data[0].name)))
    },
    showFirstUser2:function(){
        return this.data[0].name
    }
}

user2.showFirstUser()
const show3 = user2.showFirstUser2()
console.log(show3)

//resolve2 bound function
/*
funcname = () => {
    return this.variable (inbound)
}
*/