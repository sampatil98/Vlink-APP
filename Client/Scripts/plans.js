const btn1=document.getElementById("free-plan");
const btn2=document.getElementById("lite-plan");
const btn3=document.getElementById("pro-plan");
const btn4=document.getElementById("premium-plan");
btn1.addEventListener("click",()=>{
    window.location.href="dashboard.html";
});

btn2.addEventListener("click",()=>{
    localStorage.setItem("amount","299");
    localStorage.setItem("plan","LITE");
    window.location.href="payment.html"
});

btn3.addEventListener("click",()=>{
    localStorage.setItem("amount","599");
    localStorage.setItem("plan","PRO");
    window.location.href="payment.html"
});

btn4.addEventListener("click",()=>{
    localStorage.setItem("amount","999");
    localStorage.setItem("plan","PRIMIUM");
    window.location.href="payment.html"
});

