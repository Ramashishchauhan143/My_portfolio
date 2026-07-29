/* SCROLL ANIMATION */

function reveal(){

let reveals=document.querySelectorAll(".reveal-left, .reveal-right");

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight;
let elementTop=reveals[i].getBoundingClientRect().top;
let elementVisible=100;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",reveal);



/* TYPING EFFECT */

const text=["Full Stack Developer","Java Developer","MERN Stack Learner"];

let count=0;
let index=0;
let currentText="";
let letter="";

function type(){

if(count===text.length){
count=0;
}

currentText=text[count];
letter=currentText.slice(0,++index);

document.getElementById("typing").textContent=letter;

if(letter.length===currentText.length){

count++;
index=0;
setTimeout(type,1000);

}else{

setTimeout(type,80);

}

}

type();


const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
toggleBtn.textContent = "☀️";
}else{
toggleBtn.textContent = "🌙";
}

});


// ===== EMAIL SEND =====

document.getElementById("contact-form").addEventListener("submit", function(e){

  e.preventDefault();

  emailjs.sendForm(
    "service_epr4wsx",   // 👈 service id
    "template_s2fph7l",  // 👈 template id
    this
  )
  .then(function(){

    alert("Message sent successfully ✅");

    document.getElementById("contact-form").reset();

  }, function(error){

    alert("Failed ❌ " + error.text);

  });

});

for(let i=0;i<40;i++){

let fire=document.createElement("div");

fire.className="firefly";

fire.style.left=Math.random()*100+"vw";

fire.style.top=Math.random()*100+"vh";

fire.style.animationDelay=Math.random()*10+"s";

document.body.appendChild(fire);

}


const canvas=document.getElementById("space-bg");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let stars=[];

for(let i=0;i<300;i++){

stars.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2,

o:Math.random()

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let s of stars){

ctx.beginPath();

ctx.arc(s.x,s.y,s.r,0,Math.PI*2);

ctx.fillStyle="rgba(255,255,255,"+s.o+")";

ctx.fill();

s.o+=Math.random()*0.02-0.01;

if(s.o<0)s.o=0;

if(s.o>1)s.o=1;

}

requestAnimationFrame(animate);

}

animate();


setInterval(()=>{

let s=document.createElement("div");

s.className="shooting";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},4000);

},5000);


function openContactModal() {
  document.getElementById("contactModal").style.display = "flex";
}

function toggleModal(show) {
  document.getElementById("contactModal").style.display = show ? "flex" : "none";
}

// Background click par modal close ho jaye
function closeContactModal(event) {
  if (event.target.id === "contactModal") {
    document.getElementById("contactModal").style.display = "none";
  }
}