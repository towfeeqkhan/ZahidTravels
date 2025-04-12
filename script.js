const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-menu-line" : "ri-close-line");
  if (isOpen) {
    navLinks.classList.add("close");
    navLinks.addEventListener(
      "animationend",
      (e) => {
        navLinks.classList.remove("open");
        navLinks.classList.remove("close");
      },
      { once: true }
    );
  } else {
    navLinks.classList.add("open");
  }
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Slider functionality
const sliderContainer = document.querySelector('.slider__container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev__btn');
const nextBtn = document.querySelector('.next__btn');

let currentSlide = 0;
const slideCount = slides.length;

const updateSlider = () => {
  sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % slideCount;
  updateSlider();
};

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + slideCount) % slideCount;
  updateSlider();
};

// Auto slide every 5 seconds
const autoSlide = setInterval(nextSlide, 5000);

prevBtn.addEventListener('click', () => {
  clearInterval(autoSlide);
  prevSlide();
});

nextBtn.addEventListener('click', () => {
  clearInterval(autoSlide);
  nextSlide();
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Hero section animations
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

// Handle lazy loading transitions
document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.addEventListener('load', () => {
          img.classList.add('loaded');
        });
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
});