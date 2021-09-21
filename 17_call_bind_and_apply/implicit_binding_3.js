let person = function(name,age){
    return {
        name : name,
        age : age,
        sayName : function(){
            console.log(this.name);
        },
        sayAge : function(){
            console.log(this.age);
        },
        data : {
            getData : function(){
                console.log('unknown');
            }
        }
    }
}

let someone = person('chati','27');

someone.sayName();//chati
someone.sayAge();//27
someone.data.getData();//unknown