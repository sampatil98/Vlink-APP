function myfunction() {
  var navbar = document.getElementById("nav");
  navbar.classList.toggle("show");
}
const signin=document.getElementById('signin_f')
const plan=document.getElementById('plan_f')

signin.addEventListener('click',(e)=>{
  window.location.href='./login_signup.html'
})

plan.addEventListener('click',(e)=>{
  window.location.href='./plans.html'
})