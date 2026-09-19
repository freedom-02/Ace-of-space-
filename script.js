/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  
  menuBtn.addEventListener("click", () => {
    
    mobileMenu.classList.toggle("open");
    
  });
  
  
  const mobileLinks = mobileMenu.querySelectorAll("a");
  
  mobileLinks.forEach(link => {
    
    link.addEventListener("click", () => {
      
      mobileMenu.classList.remove("open");
      
    });
    
  });
  
}


/* =========================
   HERO SLIDER
========================= */

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

const nextButton = document.getElementById("nextSlide");
const prevButton = document.getElementById("prevSlide");

let currentSlide = 0;
let slideTimer;


function showSlide(index) {
  
  if (!slides.length) return;
  
  if (index >= slides.length) {
    currentSlide = 0;
  }
  
  else if (index < 0) {
    currentSlide = slides.length - 1;
  }
  
  else {
    currentSlide = index;
  }
  
  
  slides.forEach((slide, i) => {
    
    slide.classList.toggle(
      "active",
      i === currentSlide
    );
    
  });
  
  
  dots.forEach((dot, i) => {
    
    dot.classList.toggle(
      "active",
      i === currentSlide
    );
    
  });
  
}


/* NEXT */

if (nextButton) {
  
  nextButton.addEventListener("click", () => {
    
    showSlide(currentSlide + 1);
    
    restartSlider();
    
  });
  
}


/* PREVIOUS */

if (prevButton) {
  
  prevButton.addEventListener("click", () => {
    
    showSlide(currentSlide - 1);
    
    restartSlider();
    
  });
  
}


/* DOTS */

dots.forEach((dot, index) => {
  
  dot.addEventListener("click", () => {
    
    showSlide(index);
    
    restartSlider();
    
  });
  
});


/* AUTO SLIDE */

function startSlider() {
  
  slideTimer = setInterval(() => {
    
    showSlide(currentSlide + 1);
    
  }, 6000);
  
}


function restartSlider() {
  
  clearInterval(slideTimer);
  
  startSlider();
  
}


if (slides.length) {
  
  showSlide(0);
  
  startSlider();
  
}


/* =========================
   SWIPE SUPPORT
========================= */

const hero = document.querySelector(".hero");

let touchStartX = 0;
let touchEndX = 0;

if (hero) {
  
  hero.addEventListener("touchstart", event => {
    
    touchStartX = event.changedTouches[0].screenX;
    
  });
  
  
  hero.addEventListener("touchend", event => {
    
    touchEndX = event.changedTouches[0].screenX;
    
    handleSwipe();
    
  });
  
}


function handleSwipe() {
  
  const difference = touchStartX - touchEndX;
  
  if (Math.abs(difference) < 50) return;
  
  if (difference > 0) {
    
    showSlide(currentSlide + 1);
    restartSlider();
    
  }
  
  else {
    
    showSlide(currentSlide - 1);
    restartSlider();
    
  }
  
}