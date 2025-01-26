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
    moviePoster.src = movieData[selectedMovie] || 'https://via.placeholder.com/200';
});