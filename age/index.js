
let age;

document.getElementById("mybutton").onclick=function(){
    age=document.getElementById("age").value;
    age=Number(age);

    if(age<18){
        document.getElementById("lab").textContent="your are young";
    }
    else if(age>=18 && age<=30){
        document.getElementById("lab").textContent="your  are adult";

    }
    else{
        document.getElementById("lab").textContent="your are out";

    }


}