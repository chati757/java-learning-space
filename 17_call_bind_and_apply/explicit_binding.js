let sayName = function(test1,test2,test3){
    console.log(this.name)
    console.log(test1)
    console.log(test2)
    console.log(test3)
}

let stacey = {
    name : 'stacey'
}

let arr_test = [1,2,3]

sayName.call(stacey,arr_test[0],arr_test[1],arr_test[2])
let newfn = sayName.bind(stacey,arr_test[0],arr_test[1],arr_test[2])
newfn();
sayName.apply(stacey,arr_test)