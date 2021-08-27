//error obj example
console.log(new Error('test error'));
console.log(new TypeError('test typeerror'));

//หากเรา throw แบบไม่ใช้ error obj เราต้องไปรับผ่าน catch(แบบไม่ระบุ error) ทีหลัง

//การ handling
//แบบโยนข้อความธรรมดา ไม่ได้ระบุว่า error อะไร
try{
    throw('test')
}
catch(e){
    console.log(e);//test
}

//แบบระบุ error
try{
    throw(new TypeError('from typeerror'));
}
catch(e){
    if(e instanceof TypeError){
        console.log('inif : TypeError');
        console.log('message from : '+e.message);
    }
}