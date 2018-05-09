//insert new array

const arr = ['banana','apple','mango']

const newArr = [
    ...arr.slice(0,1),//banana
    'strawberry',
    ...arr.slice(1)//appple,mango
]
console.log(newArr) //['banana','strawberry','apple','mango']
console.log(arr) //is not change ['banana','apple','mango']