
const mycheckbox=document.getElementById("mycheckbox");
const visaBtn=document.getElementById("visaBtn");
const masterBtn=document.getElementById("masterBtn");
const PaypalBtn=document.getElementById("PaypalBtn");
const mySubmit=document.getElementById("mySubmit");
const subresult=document.getElementById("subresult");
const paymentresult=document.getElementById("paymentresult");

mySubmit.onclick=function(){
    if(mycheckbox.checked){
        subresult.textContent=`You are subscribed!`;
    }
    else{
        subresult.textContent=`You are  not subscribed!`;
    }

    if(visaBtn.checked){
        paymentresult.textContent=`You are paying with visa`;
    }
    else if(masterBtn.checked){
        paymentresult.textContent=`You are paying with master card`;
    }
    else{
        paymentresult.textContent=`You are paying with paypal`
    
    }
}