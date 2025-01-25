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
/* Trending shows */
var trendingShows = new Swiper(".trendingSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//
var swiper = new Swiper(".ongoingSwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
// Nested Swiper
const progressCircle1 = document.querySelector(".autoplay-progress svg");
const progressContent1 = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".nestedSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
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
      progressCircle1.style.setProperty("--progress", 1 - progress);
      progressContent1.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
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
var typed1 = new Typed('class / id name', {
  strings: ['<i>This Week</i>','<i>Get Ready for Fun</i>'],
  typeSpeed: 50,
  backSpeed: 50,
  startDelay:1000,
  fadeOutClass: 'typed-fade-out',
  loop:true,
});

/* waves */
let playbutton = document.querySelector('.btn-play');

playbutton.addEventListener('onmouseenter', () => {
  playbutton.classList.add('nowaves'); 
});

playbutton.addEventListener('onmouseleave', () => {
  playbutton.classList.remove('nowaves'); 
});



