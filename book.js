const movieData = {
  "Attack on Titan": {
      description: "A world where humanity fights against gigantic Titans for survival.",
      image: "https://m.media-amazon.com/images/I/71qVgRtdXtL._AC_UF1000,1000_QL80_.jpg"
  },
  "Black Widow": {
      description: "Natasha Romanoff confronts her past as a spy before becoming an Avenger.",
      image: "https://m.media-amazon.com/images/I/81Jgy1tfvcL._AC_UF1000,1000_QL80_.jpg"
  },
  "Joker": {
      description: "A gritty character study of Arthur Fleck, a man disregarded by society.",
      image: "https://i.pinimg.com/736x/5b/c2/9c/5bc29c1757c368a9561c79e5eea99f7b.jpg"
  },
  "default": {
      description: "A gritty character study of Arthur Fleck, a man disregarded by society.",
      image: "https://thereadyzone.com/wp-content/uploads/2020/01/futur-of-entertainment.jpg"
  }
};

document.getElementById("movieSelect").addEventListener("change", function() {
  const selectedMovie = this.value;
  const movieDetailsDiv = document.getElementById("movieDetails");

  if (selectedMovie === "default") {
      movieDetailsDiv.style.display = "block";
  } else {
      document.getElementById("movieTitle").innerText = selectedMovie;
      document.getElementById("movieDescription").innerText = movieData[selectedMovie].description;
      document.getElementById("movieImage").src = movieData[selectedMovie].image;
      movieDetailsDiv.style.display = "block";
  }
});





/* Select Seats  */



/* selected seats storation */

// empty array to store seats
let selected_seats = [];

function update_seats(e) {
  const seat = e.target;

  if (seat.classList.contains("slot-empty")) {
    const seatNumber = seat.dataset.seatNumber;

    if (selected_seats.includes(seatNumber)) {
      selected_seats = selected_seats.filter((s) => s !== seatNumber);
      seat.classList.remove("select-slot");
    } else {
      selected_seats.push(seatNumber);
      seat.classList.add("select-slot");
    }

    document.querySelector(".numofseats").textContent = selected_seats.length;
  }
}

document.querySelectorAll(".seat").forEach((seat) => {
  seat.addEventListener("click", update_seats);
});


/* Checkout Javascript code */

let checkout =  document.querySelector('.checkoutdiv')
checkout.addEventListener('click',()=>{
    location.href="ticketform.html"
})

/* Selecting Movies */


document.addEventListener("DOMContentLoaded", function () {
  let movieSelect = document.getElementById("movieSelect");
  let posterContainers = document.querySelectorAll(".poster_container");

  // Hide all posters initially
  posterContainers.forEach(container => container.style.display = "none");

  // Event listener for dropdown selection
  movieSelect.addEventListener("change", function () {
      let selectedMovie = movieSelect.value;

      // Hide all posters
      posterContainers.forEach(container => container.style.display = "none");

      // Show the selected movie poster
      posterContainers.forEach(container => {
          let posterDiv = container.querySelector(".posterdiv");
          if (posterDiv.getAttribute("data-movie-name").toLowerCase().replace(/\s+/g, '-') === selectedMovie) {
              container.style.display = "block";
          }
      });
  })
}
)
