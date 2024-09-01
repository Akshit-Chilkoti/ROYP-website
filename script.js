  // Function to change the image source based on scroll position
  function changeLogoOnScroll() {
    const logo = document.getElementById('royp-logo');
    const scrollThreshold = 50; // You can adjust this value to control when the change happens

    if (window.scrollY > scrollThreshold) {
      logo.src = 'ROYP_Black.png'; // Image source for scrolled state
    } else {
      logo.src = 'ROYP.png'; // Image source for default state
    }
  }


  function changeLogoOnScrollHyper() {
    const logo = document.getElementById('royp-logo-hyper');
    const scrollThreshold = 50; // You can adjust this value to control when the change happens

    if (window.scrollY > scrollThreshold) {
      logo.src = '../ROYP_Black.png'; // Image source for scrolled state
    } else {
      logo.src = '../ROYP.png'; // Image source for default state
    }
  }

  // Listen to the scroll event
  window.addEventListener('scroll', changeLogoOnScroll);
  window.addEventListener('scroll', changeLogoOnScrollHyper);


function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

window.onscroll = function() {
    var navbar = document.querySelector("nav");
    var icon = document.querySelector(".icon");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.top = "-50px";
        icon.style.display = "block";
    } else {
        navbar.style.top = "0";
        icon.style.display = "none";
    }
};

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

document.getElementById("currentYear").innerHTML = new Date().getFullYear();

let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2; // Initial position at the center

// Track mouse position, update on move
document.addEventListener('mousemove', function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

// Function to create a swirling dot at the given position
function createSwirlingDot(x, y) {
  const dot = document.createElement('div');
  dot.classList.add('dot');

  // Set initial position of the dot
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;

  document.body.appendChild(dot);

  // Calculate direction towards the mouse position
  const angle = Math.atan2(mouseY - y, mouseX - x); // Angle towards the mouse
  const velocity = Math.random() * 5 + 3; // Increase speed for dramatic effect
  const vx = Math.cos(angle) * velocity; // X velocity towards the mouse
  const vy = Math.sin(angle) * velocity; // Y velocity towards the mouse

  // Update position with animation
  let time = 0;
  const interval = setInterval(() => {
    time += 0.05; // Increment time to simulate movement

    // Move towards the mouse with acceleration
    
    const newX = x + vx * time;
    const newY = y + vy * time;

    dot.style.left = `${newX}px`;
    dot.style.top = `${newY}px`;

    // Stop and remove the dot after 2 seconds to match CSS animation
    if (time > 2 || (Math.abs(newX - mouseX) < 10 && Math.abs(newY - mouseY) < 10)) {
      clearInterval(interval);
      dot.remove();
    }
  }, 16); // 60 FPS update rate
}

// Function to trigger dots at random short time intervals
function triggerDotsAtRandomIntervals() {
  // Create a dot at a random position around the mouse
  const startX = mouseX + (Math.random() - 0.5) * 100; // Random starting X near the mouse
  const startY = mouseY + (Math.random() - 0.5) * 100; // Random starting Y near the mouse

  createSwirlingDot(startX, startY);

  // Set a random interval between 100ms to 500ms for the next dot
  const randomInterval = Math.random() * (500 - 100) + 100; // Random interval between 100ms and 500ms
  setTimeout(triggerDotsAtRandomIntervals, randomInterval);
}

// Start the dot creation process
triggerDotsAtRandomIntervals();