const weather = true;

const date = new Promise(function(resolve,reject){
    if(weather){
        const dataDetails = {
            name:"jim",
            location:"usa",
            table:5
        }
        resolve(dataDetails);
    }
    else{
        reject(new Error("bad weather , cannot go to dinner."));
    }
});

/*
//หรือเขียนแบบนี้ก็ได้
function orderUber(data_detail){
    return Promise.resolve(`Get me an Uber ASAP to ${data_detail.location}, we are going to a dinner.`);
    });
}
*/

//จะเขียน function แบบด้านบนก็ได้
const orderUber = function(data_detail){
    return new Promise(function (resolve,reject){
        const message = `Get me an Uber ASAP to ${data_detail.location}, we are going to a dinner.`;
        resolve(message);
    });
}

function myDate(){
    date
    .then(orderUber)
    .then(function(from_resolved){
        console.log("we are going on a dinner.");
        console.log(from_resolved);
    })
    .catch(function(from_reject){
        console.log(from_reject.message);
    })
}

//myDate();
async function myDate(){
    try{
        let dateDetail = await date;
        let message = await orderUber(dateDetail);
        console.log(message);
    }catch(error){
        console.log(error.message)
    }
}

myDate();
//หรือจะเรียกแบบนี้ก็ได้
/*
(async()=>{
    await myDate();
})();
*/

//เริ่มลองใช้ async มันช่วยให้ใช้งาน promise ได้ง่ายขึ้น โดย async ก็ถือเป็น promise อย่างนึง

/*
//แบบ promise
function test(){
    return Promise.resolve('2020 bmw');
}
async function test(){
    return ('2020 bmw'); //ส่วนนี้เป็น promise เหมือนกันแต่เขียนอยู่ในรูป async
}

//กรณี error
//แบบ promise
function test(){
    return Promise.reject(new Error("some error message"));
}
//แบบ async
function test(){
    return throw(new Error("some error message"));
}
*/