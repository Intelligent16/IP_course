let numberOfFilms;

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function start() {
  numberOfFilms = +prompt("Сколько фильмов ты посмотрел?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов ты посмотрел?", "");
  }
}
start();

function rememberMyFilms() {
  for (let i = 0; i < numberOfFilms; i++) {
    let name_film = prompt("Один из последних просмотренных фильмов?", "");
    let points = prompt("На сколько оцените его?", "");
    if (
      name_film != "" &&
      name_film != null &&
      name_film.length < 50 &&
      points != "" &&
      points != null
    ) {
      personalMovieDB.movies[name_film] = points;
      console.log("Спасибо");
    } else {
      console.log("Постарайтесь лучше");
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonalLvl() {
  if (personalMovieDB.count < 10) {
    console.log("Почему так мало, ты что, Саня Гиндосов?");
  } else if (10 <= personalMovieDB.count < 30) {
    console.log("Ну, в принципе, нормально");
  } else if (personalMovieDB.count >= 30) {
    console.log("Ты, вообще, нормальный??");
  } else {
    console.log("Давай нормально вписывай");
  }
}
detectPersonalLvl();

function showMyBD() {}
if (personalMovieDB.privat != false) {
  console.log(personalMovieDB);
}
showMyBD();

function writeYouGeners() {
  for (let i = 1; i <= 3; i++) {
    let currentGener = prompt(
      "Три любимых жанра в порядке убывания любимости",
      ""
    );
    if (currentGener != null && currentGener != "") {
      personalMovieDB.genres[i - 1] = currentGener;
      console.log("Спасибо");
    } else {
      console.log("Впиши что-нибудь");
      i--;
    }
  }
}
writeYouGeners();

console.log(personalMovieDB);
