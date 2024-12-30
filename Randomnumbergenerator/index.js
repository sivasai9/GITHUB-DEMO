// random number

const mybutton=document.getElementById("mybutton");
const label=document.getElementById("label");
let random;
const max=2

mybutton.onclick=function(){
    random=Math.random()*2;
    label.textContent=random;
}