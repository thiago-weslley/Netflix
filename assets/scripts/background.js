let buttons = document.querySelectorAll('.btn-fundo');
let mainMovie = document.querySelector('.main-movie');

buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
    let bg = this.getAttribute('data-bg');
    mainMovie.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, .50), rgba(0, 0, 0, .50)100%), url('./assets/images/backgrounds/${bg}')`;
  });
});


function changeText() {
  document.querySelector(".description").innerHTML = 'This series follows a group of survivors during a zombie apocalypse. At times, interpersonal conflicts are so dangerous that some are willing to do anything to survive.';
  document.querySelector(".title").src = './assets/images/logo/logotipo.png';
}

function changeText2() {
  document.querySelector(".description").innerHTML = 'It takes place a decade after the events of "Avatar" and tells the story of the Sully family (Jake, Neytiri and their children), their problems, the long distances they will travel to stay safe, the battles they fight to stay living, and the tragedies they endure.';
  document.querySelector(".title").src = './assets/images/logo/avatar-logotipo.png';
}

function changeText3() {
  document.querySelector(".description").innerHTML = "After dominating the boxing world, Adonis Creed has thrived both in his career and in his family life. When childhood friend and former boxing prodigy Damien Anderson resurfaces after serving a long prison sentence, he's eager to prove he deserves his chance in the ring. The confrontation between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to fight Damien - a fighter who has nothing to lose.";
  document.querySelector(".title").src = './assets/images/logo/creed-logotipo.png';
}

function changeText4() {
  document.querySelector(".description").innerHTML = 'With the price on his head mounting, John Wick discovers a way to defeat The High Table. But before he can gain his freedom, Wick must face a new enemy with powerful alliances across the world and forces that turn old friends into enemies.';
  document.querySelector(".title").src = './assets/images/logo/john-logotipo.png';
}

function changeText5() {
  document.querySelector(".description").innerHTML = 'Mario is a plumber along with his brother Luigi. One day, they end up in the mushroom kingdom, ruled by Princess Peach, but threatened by the king of the Koopas, who does everything to get reign everywhere.';
  document.querySelector(".title").src = './assets/images/logo/mario-logotipo.png';
}

function changeText6() {
  document.querySelector(".description").innerHTML = 'Puss in Boots discovers that his passion for adventure has taken its toll: he has burned eight of his nine lives. The cat sets out on an epic journey to find the mythical Last Wish and restore his nine lives.';
  document.querySelector(".title").src = './assets/images/logo/puss-in-boots-logotipo.png';
}

function changeText7() {
  document.querySelector(".description").innerHTML = "After a global pandemic destroys civilization, a hardened survivor takes care of a 14-year-old girl who may be humanity's last hope.";
  document.querySelector(".title").src = './assets/images/logo/the-last-logotipo.png';
}

function changeText8() {
  document.querySelector(".description").innerHTML = 'After the fall of the Galactic Empire, disorder spread across the galaxy. A lone combatant makes his way through the outer territories, making a living as a bounty hunter.';
  document.querySelector(".title").src = './assets/images/logo/mandalorian-logotipo.png';
}

function changeText9() {
  document.querySelector(".description").innerHTML = "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje, fight to protect their nation from world powers that seek to intervene in the wake of the death of King T'Challa. As Wakandans struggle to adapt to a new era, the heroes must unite with the help of Nakia - the Dogs of War - and Everett Ross, to forge a new path for the kingdom of Wakanda.";
  document.querySelector(".title").src = './assets/images/logo/wakanda-logotipo.png';
}
function changeText10() {
  document.querySelector(".description").innerHTML = "Sayen is hunting down the men who murdered her grandmother. Using her training and knowledge of nature, she is able to turn the tables on them, learning of a conspiracy from a corporation that threatens her people's ancestral lands.";
  document.querySelector(".title").src = './assets/images/logo/sayen-logotipo.png';
}
