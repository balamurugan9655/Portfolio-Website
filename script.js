// sm devices menu button toggle code
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
    submitButton.disabled = false;
  }
  else
  {
    submitButton.disabled = true
  }

}

// contact sumbit button clicked alert message view
function buttonClicked()
{
  const name = document.getElementById("name").value;
  alert(`Thanks For Your Message ${name}`);
};

//download button animation with progressbar animation
const downloadButton = document.getElementById("downloadButton");
const buttonText = document.getElementById("buttonText");
const icon = document.getElementById("icon");
const progressBar = document.getElementById("progressBar");

downloadButton.addEventListener("click", () => {
  // Change icon to downward arrow when clicked
  icon.classList.remove("bi-download");
  icon.classList.add("bi-arrow-down");
  icon.classList.add("downloading"); // Start the animation

  // Start download process
  buttonText.textContent = "Downloading...";
  progressBar.style.width = "0%";
  //progressBar.style.backgroundColor = "rgba(37, 169, 209, 0.3)";
  progressBar.classList.add("bg-primary");

  let progress = 0;

  // Simulate progress bar
  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);

      // Show success state
      buttonText.textContent = "Complete!";
      icon.classList.remove("downloading");
      icon.classList.add("bi-check-circle-fill");
      icon.classList.add("success");
      //progressBar.style.backgroundColor = "rgba(40, 167, 69, 0.5)"; // Green background for success
      progressBar.classList.add("text-success")

      // Start the file download after 2 seconds
      setTimeout(() => {
        // Create an anchor element to trigger the file download
        const downloadLink = document.createElement("a");
        downloadLink.href = "./S Balamurugan Resume .pdf";
        downloadLink.download = "Balamurugan Resume.pdf";
        downloadLink.click();

        // Reset after 2 seconds
        buttonText.textContent = "Download Resume";
        icon.classList.remove("bi-check-circle", "success");
        icon.classList.add("bi-download");
        progressBar.style.width = "0%";
        //progressBar.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        progressBar.classList.add("text-white")
      }, 2000);
    }
  }, 250); // Update progressbar every 250ms  
});

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