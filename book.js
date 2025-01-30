


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
