//selecting with ID
const result= document.getElementById("para");
console.log(result);
result.innerHTML="yoooo";
result.title="Hello";
//document.write(result);

//selecting with class
const result2=document.getElementsByClassName("p1");
console.log(result2);
result2[0].innerHTML="Hello, World!";
result2[1].innerHTML="JavaScript";
result2[2].innerHTML="DOM goes brr!";

//selecting with tag name 
const result3=document.getElementsByTagName("p");
console.log(result3);
result3[2].innerHTML="Hello, World!";
result3[2].style.color="orange";

result3[0].innerText="Hello";

//query selector
const result4=document.querySelector(".p1");
console.log(result4);
result4.innerHTML="Hello, World!";
result4.style.color="blue";

const result5=document.querySelectorAll("ul li"); 
console.log(result5);
for(x in result5){
    
    result5[x].style.color="green";
}