// alert("hello from part");
// creating variables
// let a,b,c;
// a=10;
// b=15;
// c=a+b;


// function
// function myfuction(p1,p2){
//     return p1+p2;
// }
// console.log(myfuction("ashu",54));


// Object
// const car={
//     type:"vechile",
//     brand:"Maruti Suzuki",
//     model:"Ignis",
//     price:"500000",
//     color:"grey",
//     start: function(){
//         console.log("function works fine")
//     },
//     end:function(){
//         console.log(this.type+this.price+" hello end!!!")
//     }
// };
// console.log(car.brand,car.color,car["model"],car.price);
// car.start();
// car.end();

// String
// let text=`hello everyone "this is me"`;
// console.log(text);
// console.log(text.length)
// let fname="Ashu";
// let lname="Dubey";
// let val=`this is not me it is ${fname} ${lname}`;
// console.log(val);


// Array
//  const val=["sat","cat","mat","bat",43];
//  let text="<ul>";
//  for(let i=0;i<val.length;i++){
//     text+="<li>"+val[i]+"</li>";
//  }
//  text+="</ul>"
//  console.log(text);
//  document.getElementsByClassName('container4')[0].innerHTML=text;
// NOTE:---- getElementsByClassName return a array of objects ther use numbering [1],[2] to address them


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

// document.getElementById("demo").innerHTML = text;

// Array
// const val=[1,2,3,4,5,6,7,8,9,10];
// val.forEach(myfunction);
// function myfunction(value){
//     console.log(value);
// }

// var text=" ";
// val.forEach(myfun);
// function myfun(value,index,array){
//     array[index]=value*2;
// }
// document.getElementById("demo").innerText=val;

// const newarr=val.map(myfun);
// function myfun(value,index,array){
//     return value*2;
// }
// document.getElementById("demo").innerText=newarr; // new array
// document.getElementById("demo").innerText=val; //old array


// const arrnew=val.filter(myfun);
// function myfun(value,index,array){
//     return value>5;
// }
// document.getElementById("demo").innerText=arrnew;

// const p1=val.reduce(myfun1);
// var p2=val.forEach(myfun2);
// function myfun1(total,value,index,array){
//         return total+value;
// };
// var sum=0;
// function myfun2(value,index,array){
//     sum+=value;
//     return sum;
// };
// document.getElementById("demo").innerHTML="<p>"+p1+" "+p2+" "+"</p>";


// arrow function
// let value=(p1,p2)=>{
//     return p1*p2;
// }
// document.getElementById("demo").innerHTML=value(2,4);


// classes
// class car{
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
//     method1=()=>{
//         let date=new Date();
//         return date.getFullYear()-this.year;
//     }
//     method2(){
//         return this.name;
//     }
// }
// let value=new car("Ford",1974);
// document.getElementById("demo").innerText=value.method2()+" "+value.method1();


// export import
// import * as utility from "./part3.js";
// import {method1 }from "./part2.js";
// import def from "./part2.js"; // it will automaticaly import default export of part2 module
// document.getElementById("demo").innerText=method1(2,3);
// // const num=method1(2,3);
// // console.log(num);
// console.log(def)
// document.getElementsByClassName("inner_container_4_2")[0].innerText=utility.nam+utility.age+utility.gender;


// JSON (javascript object notation)
// {
//     "employee"=[
//         {"fname":"ashutosh","lname":"dwivedi"},
//         {"fname":"varun","lname":"vaishnav"},
//         {"fname":"geeta","lname":"kumari"}
//     ]
// }


// function
// (function(){
//     alert("this function invoke itself without calling  from outside");
// })()

function method(a,b){
    console.log(arguments.length);
}
method(2,3);