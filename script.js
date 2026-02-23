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

/* = assigns a value 
   == compares the values and returns true if equal
   === does strict typed comparison between two variables
*/
let x=4;
let y="4";
console.log(x==y);
console.log(x===y);

// ternary operator
let age=10;
var voteable = (age<18)?"Not old enough": "Old Enough";

//max of 3 numbers
let num1=2;
let num2=3;
let num3=10;
var max= (num1>num2)?((num1>num3)?num1:num3):((num2>num3)?num2:num3);
console.log(max);

var count;
document.write("Starting loop <br/>");
for(count=0;count<10;count++){
    document.write(count+"<br/>");
}
docuement.write("<br/>")