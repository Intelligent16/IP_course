let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
if (personalMovieDB.count < 10) {
  console.log("Почему так мало, ты что, Саня Гиндосов?");
} else if (10 <= personalMovieDB.count < 30) {
  console.log("Ну, в принципе, нормально");
} else if (personalMovieDB.count >= 30) {
  console.log("Ты, вообще, нормальный??");
} else {
  console.log("Давай нормально вписывай");
}

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
    console.log("Спасибо");
  } else {
    console.log("Постарайтесь лучше");
    i--;
  }

  personalMovieDB.movies[name_film] = points;
}

console.log(personalMovieDB);
