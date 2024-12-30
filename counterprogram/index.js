// counter program
let count=0;

document.getElementById("dec").onclick=function(){
    count=count-1;
    document.getElementById("CountLabel").textContent=count;
}
document.getElementById("reset").onclick=function(){
    count=0;
    document.getElementById("CountLabel").textContent=count;
}
document.getElementById("inc").onclick=function(){
    count=count+1;
    document.getElementById("CountLabel").textContent=count;
}
