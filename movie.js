

let click = document.querySelector(".userspanicon")
click.addEventListener('click',()=>{
  location.href="./sign_up.html"
})


let hamburger = document.querySelector(".hamburger")
/* Hamburger javascript */
 hamburger.addEventListener('click',()=>{
  let crossburger = document.querySelector(".hamburger")
  let header = document.querySelector(".header")
  let navlinks = document.querySelector(".navlinks")

  let nav_anchor = navlinks.querySelector('.a') 
  
  if(crossburger.classList.contains('crossburger')){
      crossburger.classList.remove('crossburger')
      header.classList.remove('headeractive')
      navlinks.classList.remove('activelinks')
      navlinks.classList.remove('a_visible'); 

     
      

  }
  else{
      crossburger.classList.add('crossburger')
      header.classList.add('headeractive')
      navlinks.classList.add('activelinks')
      navlinks.classList.add('a_visible'); 
  }
 })

// play button 
  document.addEventListener('DOMContentLoaded', function () {
    const playButtons = document.querySelectorAll('.btn-play');

    playButtons.forEach(btn => {
      btn.addEventListener('mouseenter', function () {
        btn.classList.add('no-animation');
      });

      btn.addEventListener('mouseleave', function () {
        btn.classList.remove('no-animation');
      });
    });
  });


//  booknow Function
 function bookNow(button) {
  const slide = button.closest('.swiper-slide');
  const title = slide.getAttribute('data-title');
  const img = slide.getAttribute('data-img');
  const url = new URL('book.html', window.location.origin);
  url.searchParams.set('title', title);
  url.searchParams.set('img', img);
  window.location.href = url.toString();
}

  


/* JS for smooth scrool behaviour */
const navLinks = document.querySelectorAll('.navlinks a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    event.preventDefault(); 

    const targetId = link.getAttribute('href').substring(1); // Remove the "#"
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});



/* Header slider js */
var swiper = new Swiper(".home", {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});


/* Trending shows slider js */
var trendingShows = new Swiper(".trendingSwiper", {
  slidesPerView: 1, 
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // When the screen width is between 360px and 500px
    360: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // When the screen width is more than 800px, show 2 slides
    800: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // For screens larger than 1080px, keep 2 slides
    1080: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

/* Ongoing shows slider js  */
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


/* waves */
let playbutton = document.querySelector('.btn-play');

playbutton.addEventListener('onmouseenter', () => {
  playbutton.classList.add('nowaves'); 
});

playbutton.addEventListener('onmouseleave', () => {
  playbutton.classList.remove('nowaves'); 
});


/* Plus and Minus  */

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".trending_slides").forEach((e) => {
      let plusIconDiv = e.querySelector(".hovericon_plus");
      let minusIconDiv = e.querySelector(".hovericon_minus");
      let buttonsContainer = e.querySelector(".trending_btn");

      // Initially hide elements
      minusIconDiv.style.display = "none";
      buttonsContainer.style.opacity = "0";
      buttonsContainer.style.maxHeight = "0px";
      buttonsContainer.style.overflow = "hidden";
      buttonsContainer.style.transition = "max-height 1s ease, opacity 1s ease";

      plusIconDiv.addEventListener("click", function () {
          plusIconDiv.style.display = "none";
          minusIconDiv.style.display = "flex";
          buttonsContainer.style.maxHeight = "100px"; // Adjust height based on content
          buttonsContainer.style.opacity = "1";
      });

      minusIconDiv.addEventListener("click", function () {
          minusIconDiv.style.display = "none";
          plusIconDiv.style.display = "flex";
          buttonsContainer.style.maxHeight = "0px";
          buttonsContainer.style.opacity = "0";
      });
  });
});


