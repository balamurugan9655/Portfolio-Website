const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

 // Initialize tooltips with a custom class
 const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
 const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
   return new bootstrap.Tooltip(tooltipTriggerEl, {
     customClass: 'tooltip-custom' // Apply custom styles
   });
});

// typing text animation
const textEffect = document.getElementById("text-animation");
const text = "Web Developer";
let textIndex = 0;

function typeText()
{
  if(textIndex<text.length)
  {
    textEffect.textContent += text.charAt(textIndex);
    textIndex++;
    setTimeout(typeText,500);
  }
  else
  {
    textEffect.style.borderRight = "none";
  }
}
// typeText();
setInterval(typeText,1500);


//contact code
function sendMessage()
{
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const submitButton = document.getElementById("submitButton")

  if((name.value.trim() !== "")&&(email.value.trim() !== "")&&(message.value.trim() !== ""))
  {
    submitButton.disabled = false
  }
  else
  {
    submitButton.disabled = true
  }

}

function buttonClicked()
{
  const name = document.getElementById("name").value;
  alert(`Thanks For Your Message ${name}`);
};

// SCROLL REVEAL ANIMATION Initialize ScrollReveal
const sr = ScrollReveal({
  distance: '150px', // Distance for the animation
  duration: 1500,   // Animation duration in milliseconds
  easing: 'ease-in-out', // Easing function
  delay: 200,       // Delay before the animation starts
  reset: true       // Animation reset on scroll back
});
sr.reveal( '.element-tittle', { origin: 'top' } );
sr.reveal( '.element-contant' , {origin: 'top' , delay: 200 } );
sr.reveal( '.element-subtittle' , {origin: 'bottom' , delay: 300 } );
sr.reveal( '.element-button' , {origin: 'bottom' , delay: 500 } );
sr.reveal( '.about-part div' , {origin: 'bottom' , delay: 500 } );
sr.reveal( '.skill-part div' , {origin: 'top'} );
sr.reveal( '.element-part div' , {origin: 'top' , delay: 200 } );