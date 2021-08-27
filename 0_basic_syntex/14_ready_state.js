window.onload(function(){
    console.log('window loaded');
});

console.log(document.readyState) //loading หรือ complete

/*
window.onload จะทำงานหลังจากทุกอย่างบนหน้าเว็บไซต์ (รวมรูปด้วย) โหลดเสร็จหมด
document.ready จะทำงานหลังจากทุกอย่างบนเว็บไซต์ (ไม่รวมรูป) โหลดเสร็จหมด
*/