/* Main Swiper */
var swiper = new Swiper(".home", {
  spaceBetween: 10,
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});

//
/* Anime Movies swiper */
var swiper1 = new Swiper('.mySwiper1', {
  slidesPerView: 2,
  spaceBetween: 5,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '#pagination2',
    clickable: true,
  },
  loop: true, // Enable infinite loop
});
/* Tredning Sect Swiper */
var progressCircle = document.querySelector(".autoplay-progress svg");
var progressContent = document.querySelector(".autoplay-progress span");
var swiper3 = new Swiper(".mySwiper3", {
  spaceBetween: 10,
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});


/* Typed Js Demo */
var typed1 = new Typed('#element', {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 50,
});

/* Toogle waves */
let playbutton = document.querySelector('.btn-play');

playbutton.addEventListener('mouseenter', () => {
  playbutton.classList.add('nowaves'); 
});

playbutton.addEventListener('mouseleave', () => {
  playbutton.classList.remove('nowaves'); 
});



