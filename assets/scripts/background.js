
// let button = document.querySelector('#b1');
// let mainMovie = document.querySelector('.main-movie');

// button.addEventListener('click', function () {
//     mainMovie.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, .50), rgba(0, 0, 0, .50)100%), url('./assets/images/backgrounds/background_twd.jpg')";
// });

let buttons = document.querySelectorAll('.btn-fundo');
let mainMovie = document.querySelector('.main-movie');

buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
    let bg = this.getAttribute('data-bg');
    mainMovie.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, .50), rgba(0, 0, 0, .50)100%), url('./assets/images/backgrounds/${bg}')`;
  });
});
