const color = "red"
const age = 2
function outertest(){
    console.log("testfucn")
}

//ES5 and older
const dog = {color:color,age:age,outertest:outertest,
    inlinefunc:function(){
        console.log("testinline")
    }
}
console.log("dog.color:",dog.color)
console.log("dog.age:",dog.age)
console.log("dog.outertest")
dog.outertest()
console.log("dog.inlinefunc")
dog.inlinefunc()

//ES6!
const dofunc = "word_for_call_dofunc" //match string to function name Ex.dog2.word_for_call_dofunc()
const dog2 = {color,age,outertest,
    inlinefunc(){
        console.log("testinline")
    },
    [dofunc]:function(){
        console.log("dofunc")
    }
}
console.log("dog2.color:",dog2.color)
console.log("dog2.age:",dog2.age)
console.log("dog2.outertest")
dog2.outertest()
console.log("dog2.inlinefunc")
dog2.inlinefunc()
console.log("dog2.word_for_call_dofunc")
dog2.word_for_call_dofunc()

//result is a seem incase properties and variable is a seem name