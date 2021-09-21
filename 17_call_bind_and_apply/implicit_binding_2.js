let me = {
    name : 'chati',
    mail:'ninja.com',
}

let inject_sayName_fn = function(obj){
    obj.sayName = function(){
        console.log(this.name)
    }
}

inject_sayName_fn(me);
me.sayName(); //chati
