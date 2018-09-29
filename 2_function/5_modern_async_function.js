function sayHello(){
    return "Hello";
}
function delaySayHello() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Delay Hello");
        }, 1000);
    });
}