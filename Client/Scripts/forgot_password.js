let r_emailEl=document.getElementById("r-email")
let r_passEl=document.getElementById("r-pass")


const onReset=()=>{
    const payload={
        email:r-emailEl.value,
        password:r-passEl.value,
    }
    // console.log(payload)
    fetch("",{
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
        const payload={
            email:l_emailEl.value,
            password:l_passEl.value,
        }
        // console.log(payload)
        fetch("",{
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
        window.location.href="Client/Styles/dashboard.html"
    })
        .catch(err=>console.log(err))
    } 