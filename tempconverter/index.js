

const textbox=document.getElementById("textbox");
const toFah=document.getElementById("toFahrenheit");
const toCel=document.getElementById("toCelsius");
const result= document.getElementById("result");
let temp;


function convert(){

    if(toFah.checked){
        temp=Number(textbox.value);
        temp=temp*9/5+18;
        result.textContent=temp+"F";


    }
    else if(toCel.checked){
        temp=Number(textbox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp+"C";


    }
    else{
        result.textContent="select a unit";
    }



    
}