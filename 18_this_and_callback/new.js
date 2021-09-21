function Video(title){
    this.title = title
    console.log(this.title)
}

const v1 = new Video()

//การสั่ง new เหมือนสร้าง {} ขึ้นมาใน function และการเขียน this.<..> 
//เปรียบเหมือนกันสร้าง key ของ {}

//นอกจากนี้ this ยังใช้ใน obj ได้และมันหมายถึงการเรีนก object ใน objact ตัวเอง

obj = {
    'a':'aval',
    'b':'bval',
    somefn : function(){
        console.log(this) //ยังเรียกได้ปกติเพราะไม่ใช่ callback function
    }
}

obj.somefn() //{'a':'aval','b':'bval',somefn : f}