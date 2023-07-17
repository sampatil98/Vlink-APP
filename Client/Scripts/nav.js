let userInfo = JSON.parse(localStorage.getItem('userInfo')) 
// let userInfo = null
if(userInfo){
    console.log(userInfo);

    let name = userInfo.name.split(" ")[0];
    let div = document.getElementById("signUpY")
    let div2 = document.getElementById('aboutY')
    div.innerHTML = name;
	div.style.color="white"

    div.addEventListener("click" , ()=>{
        window.location.href ="./profile.html"
    })
    div2.addEventListener('click',()=>{
        window.location.href ="./dashboard.html"
    })
}else{
    let div = document.getElementById("signUpY")
    let div2 = document.getElementById('aboutY')
    div.addEventListener("click" , ()=>{
        window.location.href = "./login_signup.html"
    })
    div2.addEventListener('click',()=>{
        alert('You have to login first')
    })
	div.style.color="white"
}