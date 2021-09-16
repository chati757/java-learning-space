//non-reference
var a = "world";
var obj = {
  b: "hello" + a //evaluated once
}

a = "universe"; //does not modify obj.b which references a

console.log(obj.b); //helloworld

//reference variable with function
var a = "world";
var obj = {
  b: function() { 
    return "hello" + a //evaluated every time the function is executed
  }
}
console.log(obj.b()); //helloworld

a = "universe"; //will influence obj.b

console.log(obj.b()); //hellouniverse

//reference variable with Object.defineProperty
var a = "world";
var obj = {
  c: "plain property"
}

Object.defineProperty(obj, 'b', {
  get: function() {
    return "hello" + a //evaluated every time the property is read
  }
});

console.log(obj.b); //helloworld

a = "universe"; //will influence obj.b

console.log(obj.b); //hellouniverse
console.log(obj.c); //plain property