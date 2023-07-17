const centerVideoBtn = document.getElementById("center-video-btn");
const centerChatBtn = document.getElementById("center-chat-btn");

centerVideoBtn.addEventListener("click",()=>{
    window.location.href="./room.html?type=videochat"
})


centerChatBtn.addEventListener("click",()=>{
    window.location.href="./room.html?type=message"
})


//data append from local storage---------------->
let token = localStorage.getItem("token");
const userinfo = JSON.parse(localStorage.getItem("userDetails"))||null;
console.log(userinfo);
console.log(token)