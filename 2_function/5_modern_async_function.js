//**async > await > promise

let test_global = "non"

//----------------------prmise async--------------------------
function sayHello(){
    test_global = 'test0'
    return test_global
}

function delaySayHello() { //Promise { <pending> }
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            test_global="test1"
            resolve(
                test_global//,another
            );
        }, 1000);
    });
}

//call by then
delaySayHello().then(e=>{
    console.log(e)
    console.log(test_global)
})

//call by async
async function test(){
    let result = await delaySayHello()
    console.log(result)
    console.log(test_global)
}
test()
//-----------------------------------------------------------
//-----------------------------------------------------------
function longTimeHello(){
    test_global = 'test2'
    return test_global;
}

async function parallelRun(){
    let a = await Promise.all([sayHello(),delaySayHello(),longTimeHello()]);
    console.log(a);
}
parallelRun();
//-----------------------------------------------------------