let movieSelect = document.getElementById('movieSelect');
let moviePoster = document.getElementById('moviePoster');

let movieData = {
    "default":'',
    "black-widow": "https://images.cdn3.buscalibre.com/fit-in/360x360/c8/75/c87534dcc86a2579e764a0fe770fea99.jpg",
    "avatar": "https://images.news18.com/ibnlive/uploads/2022/12/avatar-the-way-of-water-review-16709971024x3.jpg",
    "joker": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/04/08/USAT/73239761007-joker-2-vert-tsr-standard-2764-x-4096-dom.jpg",
    "planet-of-apes": "https://www.thelantern.com/files/2024/05/ENTER-MOVIE-KINGDOM-PLANET-APES-MACON-2-MCT.jpg",
    "wakanda-forever": "https://unleashedmedia.net/wp-content/uploads/sites/3/2022/11/Black-Panther-2-Wakanda-Forever-release-date.webp"
};

movieSelect.addEventListener('change', () => {
    const selectedMovie = movieSelect.value;
    moviePoster.src = movieData[selectedMovie] ;
});



/* Select Seats  */



/* selected seats storation */

// empty array to store seats
let selected_seats = [];

function update_seats(event) {
  const seat = event.target;

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

