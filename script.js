  // Sticky Navigation Menu JS Code
  let nav = document.querySelector("nav");
  let scrollBtn = document.querySelector(".scroll-button a");
  console.log(scrollBtn);
  let val;
  window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
      nav.classList.add("sticky");
      scrollBtn.style.display = "block";
    }else{
      nav.classList.remove("sticky");
      scrollBtn.style.display = "none";
    }

  }

  // Side NavIgation Menu JS Code
  let body = document.querySelector("body");
  let navBar = document.querySelector(".navbar");
  let menuBtn = document.querySelector(".menu-btn");
  let cancelBtn = document.querySelector(".cancel-btn");
  menuBtn.onclick = function(){
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
    scrollBtn.style.pointerEvents = "none";
  }
  cancelBtn.onclick = function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
  }

  // Side Navigation Bar Close While We Click On Navigation Links
  let navLinks = document.querySelectorAll(".menu li a");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click" , function() {
      navBar.classList.remove("active");
      menuBtn.style.opacity = "1";
      menuBtn.style.pointerEvents = "auto";
    });
  }

  // Carousel Animation
  // Initialize Carousel Plugin
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    } else if (event.key === 'ArrowLeft') {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  });

  showSlide(currentSlide);
