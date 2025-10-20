// SHOW MENU

const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

      if(toggle && nav){
            toggle.addEventListener('click', () =>{
                  nav.classList.toggle('show')
            });
      }
}

showMenu('nav_toggle','nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Initialize EmailJS
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  emailjs
    .send("service_a4wzygh", "template_z954ys4", templateParams)
    .then(
      (response) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message. Please try again.");
      }
    );
}

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme_toggle');
const themeIcon = document.getElementById('theme_icon');
const body = document.body;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme on page load
if (currentTheme === 'dark') {
  body.setAttribute('data-theme', 'dark');
  themeIcon.classList.remove('bx-moon');
  themeIcon.classList.add('bx-sun');
}

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
  // Check current theme
  const isDark = body.getAttribute('data-theme') === 'dark';
  
  if (isDark) {
    // Switch to light theme
    body.removeAttribute('data-theme');
    themeIcon.classList.remove('bx-sun');
    themeIcon.classList.add('bx-moon');
    localStorage.setItem('theme', 'light');
  } else {
    // Switch to dark theme
    body.setAttribute('data-theme', 'dark');
    themeIcon.classList.remove('bx-moon');
    themeIcon.classList.add('bx-sun');
    localStorage.setItem('theme', 'dark');
  }
});