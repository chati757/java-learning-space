class Rectangle {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
//------------------------read and write--------------------------
    set color_led(c){ //setter
        this._color = c
    }

    get color_led(){ //getter
        return this._color
    }
//------------------------class function--------------------------
    greet(){ //getter
        console.warn('Hi,my name is fox')
    }

//---------------------------read only----------------------------
    get dimension(){
        return `${this.height}x${this.width}`
    }
//-------------------------static method--------------------------
    static area(c){
        return c.width*c.height
    }
}
//constructor must be define when create new class objact (20,10)
const r = new Rectangle(20,10)
//setter and define after constructor
r.color_led = 'red'
//use data stage
console.log(r.color_led)
console.log(r.height) //20
console.log(r.width) //10
//static call from class (Rectangle)
//               |    *static function can using when create class object (f) before
//               v
console.log(Rectangle.area(r)) //200

r.greet()

class Square extends Rectangle{
    constructor(width){
        super(width,width)
    }
}

const s = new Square(10)
console.log(s.dimension)
console.log(Square.area(s))

