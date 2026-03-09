//array is a special kind of object

//declaration

const myInfo=[];
var nums=new Array();
var nums2=Array();
console.log(nums,nums2);

let collection= [{},[],true,"john",function(){},90009,undefined, null, new String("abc"), new Date()//current time some value
,1000];
console.log(collection.length);
console.log(collection);
collection.teacherName="John Mac";
collection.phoneNo=9292929292129;
console.log(collection);
console.log(collection.length);

//array is zero-indexed 

var trainerinfo=["Jitendra",29,"Ghaziabadh",{isMarried:true}]
trainerinfo.contact=23923293299932;
console.log(trainerinfo);

trainerinfo[0]="Jitendra singh";
console.log(trainerinfo)