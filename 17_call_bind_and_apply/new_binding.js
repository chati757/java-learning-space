let animal = function(color,name,type){
    this.name = name;
    this.color = color;
    this.type = type;
}

//new binding
let zebra = new animal('black and white','zorro','zebra')
