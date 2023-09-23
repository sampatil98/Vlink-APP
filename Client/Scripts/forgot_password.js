let r_emailEl=document.getElementById("r-email")
let r_passEl=document.getElementById("r-pass")


const onReset=()=>{
    event.preventDefault();
    const payload={
        email:r_emailEl.value,
        password:r_passEl.value,
    }
    console.log(payload)
    fetch("https://vlink-1fh2.onrender.com/user/forgotpassword",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
    }).then(res=>res.json())
    .then(res=>{
        console.log(res)
        alert(res.msg)
    })
    .catch(err=>console.log(err))
}




let l_emailEl=document.getElementById("l-email")
let l_passEl=document.getElementById("l-pass")
    const onLogin=()=>{
        event.preventDefault()
        const payload={
            email:l_emailEl.value,
            password:l_passEl.value,
        }
        console.log(payload)
        fetch("https://vlink-1fh2.onrender.com/user/login",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
        localStorage.setItem("token",res.token)
        alert(res.msg)
        window.location.href="./plans.html"
    })
        .catch(err=>console.log(err))
    } 