//creating an element 

const heading = document.createElement("h1");
// get a parent for the new element
const bodytag= document.getElementsByTagName("body");
// add element at the position using append method 
bodytag[0].append(heading);
heading.innerText="Hello World!";
heading.style.backgroundColor="blue";

//prepend, append, before and after.

//Remove method - .remove()



//Events in JS

//Mouse Events

/* 
1.) Click-> onclick
2.) mouseover-> onmouseover
3.) mouseout-> onmouseout
4.) mousedown-> onmousedown
5.) mouseup -> onmouseup
6.) mousemove -> onmousemove
*/ 

function onClick(){
    console.log("Clicked lol");
}
function onMouseOver(){
    console.log("Something went overrr! ");
}
function onMouseOut(){
    console.log("Intruders were seen moving out! Alertttt!!!");

}
function onMouseDown(){
    console.log("Was it the wind?");
}
function onMouseUp(){
    console.log("ts was not me -wind");
}
function onMouseMove(){
    console.log("Movingggggg");
}



/*
Keyword Events-
1.) onkeyup & onkeydown

Form Events-
1.) Focus-> onfocus (when user focuses on an element)
2.) submit-> onsubmit
3.) blue -> onblur
4.) change-> onchange
*/

// .addEventListener('event name', event handler(method to be called))

const x= document.querySelector('input');
x.addEventListener('focus',onhandlefocus);
x.addEventListener('blur',onhandleblur);

function
onhandlefocus(){
    x.style.background="red";
}

function
onhandleblur(){
    x.style.background="yellow";
}


/* Window Events

1.)load-> onload 
2.) unload -> onunload
3.) resize-> onresize


*/

function 
onLoad(){
    alert("Loaded successfully");
}
