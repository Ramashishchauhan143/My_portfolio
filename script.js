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