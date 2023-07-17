const send = document.getElementById("send");
const chatMessages = document.getElementById("messages");
const roomName = document.getElementById("room-id");
const userList = document.getElementById("members");

const urlParams = new URLSearchParams(window.location.search)

const room = urlParams.get("roomID");
console.log(room);
const userData = JSON.parse(localStorage.getItem("userInfo"));
// const username = "Aman"
const username=userData.name;

const socket = io("https://vlink-backend.onrender.com", { transports: ["websocket"] });

socket.emit("joinRoom", ({ username, room }));

socket.on("message", (message) => {
    console.log(message)
    outputMessage(message);

})



// Sending message

send.addEventListener("click", () => {

    let msg = document.getElementById('text');

    msg.value = msg.value.trim();

    if (!msg.value) {
        return false;
    }

    socket.emit('chatMessage', msg.value);
    msg.value = "";
    msg.focus();

})

socket.on("roomUsers", ({ room, users }) => {

    roomName.innerText = room;

    outputRoomUsers(users)

})


function outputRoomUsers(users) {

    userList.innerHTML = '';

    users.forEach(user => {
        const div = document.createElement("div");
        div.innerText = user.username;
        userList.appendChild(div);
    });
}

//outPut message

function outputMessage(message) {

    const div = document.createElement("div");
    div.classList.add("message");

    const p = document.createElement("p");

    p.classList.add("meta");

    p.innerText = message.username;

    let currentDate = new Date();
    let currentHours = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();


    currentHours = (currentHours < 10 ? "0" : "") + currentHours;
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;

    p.innerHTML += `<span> ${currentHours}:${currentMinutes}</span>`;

    div.appendChild(p);

    const para = document.createElement("p");

    para.classList.add("text");
    para.innerText = message.text;


    div.appendChild(para);
    chatMessages.appendChild(div);
}

// Leaving the room

document.getElementById('leave').addEventListener("click", ()=>{
    // socket.emit('leave', ({username, room}))
    window.location.href = "./dashboard.html";
})




async function userLoggedIn() {
    const token = localStorage.getItem("token");
    const request = await fetch(`https://vlink-backend.onrender.com/user/check`,{
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify({token:token})
    });
  s
    const response = await request.json();
    if(!response.ok){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Login First",
      });
      setTimeout(()=>{
        
        window.location.href = "./login.html";
      },3000)
    }
  }
  // userLoggedIn();