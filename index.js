console.log("hello");

let fullName="siva sai";
let age=25;
let student=false;

// document.getElementById("p1").textContent=`your name is ${fullName}`;
// document.getElementById("p2").textContent=`your age is ${age}`;
// document.getElementById("p3").textContent=`Enrolled: ${student}`;

// document.getElementById("myH1").textContent="Hello";
// document.getElementById("myP").textContent="I like Pizaa";

let username;

document.getElementById("mysubmit").onclick=function(){
    username=document.getElementById("mytext").value;
    document.getElementById("myH1").textContent=`your name is ${username}`;
    
}
let r;

document.getElementById("mys").onclick=function(){
    r=document.getElementById("myt").value;
    let c=2*3.14*r
    document.getElementById("myP").textContent="circumference"+c;

}


