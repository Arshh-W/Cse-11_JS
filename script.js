console.log("Hello World!"); 
//undefined

console.log(typeof(something));

//number
let num=10;
console.log(num);
console.log(typeof(num));

//boolean
num =false;
console.log(num);
console.log(typeof(num));

//string
num="Arsh Rana"
console.log(num);
console.log(typeof(num));
//null object
num=null;
console.log(num);
console.log(typeof(num));


//reference type(object) datatypes:

//function
var sayHello= function(){
    console.log("hello");
    //alert("Hello")- for alert window on browser only
}
//array
var numberArray=[1,2,3];
var animals= new Array("cat","dog","mouse","lion");
//object- kinda like dictionary and json

var person= {
    name:"Arsh Rana",
    age: 18,
    title:"eh, non yet lol"
}

console.log(person.name);//accessed as child/property of object not dict[key]
sayHello();

