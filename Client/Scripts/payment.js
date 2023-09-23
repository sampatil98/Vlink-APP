const amt=document.getElementById("span");
let cardbtn=document.getElementById("CARDbutton");
let mainsection=document.getElementById("middlediv");
let UPIbtn=document.getElementById("UPIbutton");
let Walletbutton=document.getElementById("Walletbutton");
let NETbankingbutton=document.getElementById("NETbankingbutton");
let main=document.getElementById("main");
const total=localStorage.getItem("amount")
amt.innerText=total;

UPIbtn.addEventListener("click",()=>{
    location.reload();
 });

 cardbtn.addEventListener("click",()=>{
    showdata();
});

Walletbutton.addEventListener("click",()=>{
    mainsection.innerHTML=null;

    let card=document.createElement("div");

    let section1=document.createElement("div");
    section1.setAttribute("id","select_header");

    let div1=document.createElement("div");

    let heading1=document.createElement("h3");
    heading1.innerText="Mobile Wallet";

    let p1=document.createElement("p");
    p1.setAttribute("class","subType_middle");
    p1.innerText=`Amount : ₹ ${total}`;

    let span=document.createElement("span");
    span.setAttribute("id","span");

    let image=document.createElement("img");
    image.src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png";

    p1.append(span);
    div1.append(heading1,p1);
    section1.append(div1,image);

    let div2=document.createElement("div");
    div2.setAttribute("class","wallet_div");
    
    let image1=document.createElement("img");
    image1.src="https://zoomcar-assets.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070"

    let text=document.createElement("p");
    text.innerText="Paytm Wallet";

    div2.append(image1,text);

    let btn1=document.createElement("button");
    btn1.setAttribute("id","walletpaybtn");
    btn1.innerText=`PAY ₹ ${total}` ;

    btn1.addEventListener("click",()=>{
        let token=localStorage.getItem("token");
        servercall(total,token);

    })

    card.append(section1,div2,btn1);
    mainsection.append(card);
});

NETbankingbutton.addEventListener("click",()=>{
    mainsection.innerHTML=null;

    let card=document.createElement("div");

    let section1=document.createElement("div");
    section1.setAttribute("id","select_header");

    let div1=document.createElement("div");

    let heading1=document.createElement("h3");
    heading1.innerText="Net Banking";

    let p1=document.createElement("p");
    p1.setAttribute("class","subType_middle");
    p1.innerText=`Amount : ₹ ${total}`;

    let span=document.createElement("span");
    span.setAttribute("id","span");
    

    let image=document.createElement("img");
    image.src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png";

    p1.append(span);
    div1.append(heading1,p1);
    section1.append(div1,image);

    let div2=document.createElement("div");
    div2.setAttribute("class","netbanking");
    
    let image1=document.createElement("img");
    image1.src="https://zoomcar-assets.zoomcar.com/images/original/27eac78721d3d14bc9df34231bce661e1d510e8f.png?1584602001"

    let text=document.createElement("p");
    text.innerText="State Bank of India";

    div2.append(image1,text); 

            let div3=document.createElement("div");
            div3.setAttribute("class","netbanking");
            
            let image2=document.createElement("img");
            image2.src="https://zoomcar-assets.zoomcar.com/images/original/f380ffaa7f80bdc586f469a53a3caea8887d84a4.png?1584601955"

            let text1=document.createElement("p");
            text1.innerText="HDFC Bank";

            div3.append(image2,text1); 

    let div4=document.createElement("div");
    div4.setAttribute("class","netbanking");
    
    let image3=document.createElement("img");
    image3.src="https://zoomcar-assets.zoomcar.com/images/original/312f0e8f319287aa09b1e96b45a7d82cabf6184a.png?1584601979"

    let text2=document.createElement("p");
    text2.innerText="ICICI Netbanking";

    div4.append(image3,text2); 

            let div5=document.createElement("div");
            div5.setAttribute("class","netbanking");
            
            let image4=document.createElement("img");
            image4.src="https://zoomcar-assets.zoomcar.com/images/original/d79d466d40fc7df794e2e1c907db212e52d4f47f.png?1584601931"

            let text3=document.createElement("p");
            text3.innerText="Axis Bank";

            div5.append(image4,text3); 

    card.append(section1,div2,div3,div4,div5);
    mainsection.append(card);
});

function showdata(){
    mainsection.innerHTML=null;
    
    let card=document.createElement("div");

    let section1=document.createElement("div");
    section1.setAttribute("id","select_header");

    let div1=document.createElement("div");

    let heading1=document.createElement("h3");
    heading1.innerText="Enter Card Details";

    let p1=document.createElement("p");
    p1.setAttribute("class","subType_middle");
    p1.innerText=`Amount : ₹ ${total}` ;
    
    let span=document.createElement("span");
    span.setAttribute("id","span");
    

    let image=document.createElement("img");
    image.src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png";

    p1.append(span);
    div1.append(heading1,p1);
    section1.append(div1,image);

    let div2=document.createElement("div");

    let input1=document.createElement("input");
    input1.setAttribute("id","input1");
    input1.setAttribute("placeholder","Card Number");
    input1.setAttribute("type","number");

    div2.append(input1);

    let input2=document.createElement("input");
    input2.setAttribute("id","input2");
    input2.setAttribute("placeholder","Expiry (MM/YY)");
    input2.setAttribute("type","text");

    let input3=document.createElement("input");
    input3.setAttribute("id","input3");
    input3.setAttribute("placeholder","CVV");
    input3.setAttribute("type","number");

    let div4=document.createElement("div");
    div4.setAttribute("id","savecard");
    
    let checkbox=document.createElement("input");
    checkbox.setAttribute("class","checkbox1");
    checkbox.setAttribute("type","checkbox");

    let info=document.createElement("p");
    info.setAttribute("id","cardinfo");
    info.innerText="Securely save card details";

    div4.append(checkbox,info);

    let paybtn=document.createElement("button");
    paybtn.setAttribute("id","paybtn");
    paybtn.innerText=`PAY ₹ ${total}` ;
    paybtn.style.color="white";

    //------------- Added validation functions for card payment---------------

    function cardNumberValidate(){
        var pattern = /^\d{12}$/;

        if(pattern.test(input1.value)){
            return true;
        }else{
            return false;
        }
    }

    function validateDate() {
        const pattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
      
        if (pattern.test(input2.value)) {
          return true; 
        } else {
          return false; 
        }
    }

    function validateCVV(){
        const pattern = /^\d{3}$/;

        if (pattern.test(input3.value)) {
            return true; 
          } else {
            return false; 
          }
    }

    paybtn.addEventListener("click",()=>{
        if(!cardNumberValidate()){
            // alert("Please enter valid card number")
            showInvalidCardNumberAlert();
        }else if(!validateDate()){
            // alert("Please enter valid date. E.g. 08/25")
            showInvalidDateAlert();
        }else if(!validateCVV()){
            // alert("Please enter valid CVV")
            showInvalidCVVAlert();
        }
        else{
            let token=localStorage.getItem("token");
            servercall(total,token);
        }
    })
    //---------------------------------------------------------------------------
     
    card.append(section1,div2,input2,input3,div4,paybtn);
    mainsection.append(card);
}

const token=localStorage.getItem("token");

function servercall(total,token){
    // alert("processing your payment");
    showPaymentProcessingAlert();
    let amount=total;
    // let plan="free";
    // if(amount==299){
    //     plan="LITE";
    // }else if(amount==599){
    //     plan="PRO";
    // }else{
    //     plan="PREMIUM";
    // }
    let plan = localStorage.getItem("plan");
    obj={amount,plan};
    fetch("https://pink-eagle-coat.cyclic.app/user/sendmail",{
        method:"POST",
        headers: {
            "Content-type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify(obj)
    },{ mode: 'no-cors'})
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        location.href="OTP.html";
    })
}

function showPaymentProcessingAlert() {
    Swal.fire({
        title: 'Payment is Processing',
        html: '<div class="loading-spinner"></div>',
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        customClass: {
            popup: 'payment-processing-popup'
        }
    });

    setTimeout(function() {
       window.location.href = './OTP.html';
    }, 3000);
}

//------------------------Invalid Card number Sweet Alert-----------------------

function showInvalidCardNumberAlert() {
    Swal.fire({
        icon: 'error',
        title: 'Invalid Card Number',
        text: 'Please enter a valid 12 digit card number.',
        confirmButtonText: 'OK'
    });
}

//------------------------Invalid Date Sweet Alert-----------------------

function showInvalidDateAlert() {
    Swal.fire({
        icon: 'error',
        title: 'Invalid Date',
        text: 'Please enter valid date. E.g. 08/25, 12/24',
        confirmButtonText: 'OK'
    });
}

//------------------------Invalid Date Sweet Alert-----------------------

function showInvalidCVVAlert() {
    Swal.fire({
        icon: 'error',
        title: 'Invalid CVV',
        text: 'Please enter valid 3 digit CVV.',
        confirmButtonText: 'OK'
    });
}

