    let s_nameEl=document.getElementById("s-name")
    let s_emailEl=document.getElementById("s-email")
    let s_passEl=document.getElementById("s-pass")
    const signInform=document.getElementById("signUp_form")

    // const onSignup=()=>{
    //     const payload={
    //         name:s_nameEl.value,
    //         email:s_emailEl.value,
    //         password:s_passEl.value,
    //     }
    //     // console.log(payload)
    //     fetch("https://pink-eagle-coat.cyclic.app/user/register",{
    //         method:"POST",
    //         headers:{
    //             "Content-type":"application/json"
    //         },
    //         body:JSON.stringify(payload)
    //     }).then(res=>res.json())
    //     .then(res=>{
    //         console.log(res)
    //         alert(res.msg)
    //     })
    //     .catch(err=>console.log(err))
    // }

    signInform.addEventListener("submit",(event)=>{
        event.preventDefault();
        const payload={
            name:s_nameEl.value,
            email:s_emailEl.value,
            password:s_passEl.value,
        }
        // console.log(payload)
        fetch("https://pink-eagle-coat.cyclic.app/user/register",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            alert(res.msg)
            SrefreshForm();
        })
        .catch(err=>console.log(err))
    })

    function SrefreshForm() {
        signInform.reset();
      }
      


    let l_emailEl=document.getElementById("l-email")
    let l_passEl=document.getElementById("l-pass")


    let loginForm=document.getElementById("login_form")

    loginForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        const payload={
            email:l_emailEl.value,
            password:l_passEl.value,
        }
        // console.log(payload)
        fetch("https://pink-eagle-coat.cyclic.app/user/login",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then(res=>res.json())
        .then(res=>{
            //console.log(res)
        localStorage.setItem("token",res.token)
        let user=res.user
        localStorage.setItem("userInfo",JSON.stringify(user))
        if(res.msg=="login success"){
            alert("login successful");
            window.location.href="./plan.html"
        }else{
            alert("Wrong Credintials");
        }
    })
        .catch(err=>console.log(err))
    })

    
    // const onLogin=()=>{
    //     const payload={
    //         email:l_emailEl.value,
    //         password:l_passEl.value,
    //     }
    //     // console.log(payload)
    //     fetch("https://pink-eagle-coat.cyclic.app/user/login",{
    //         method:"POST",
    //         headers:{
    //             "Content-type":"application/json"
    //         },
    //         body:JSON.stringify(payload)
    //     }).then(res=>res.json())
    //     .then(res=>{
    //         console.log(res)
    //     localStorage.setItem("token",res.token)
    //     let user=res.user
    //     user.type="free"
    //     localStorage.setItem("userInfo",JSON.stringify(user))
    //     alert(res.msg)
    //     window.location.href="/Client/plans.html"
    // })
    //     .catch(err=>console.log(err))
    // } 
    