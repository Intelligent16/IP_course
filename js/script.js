let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов ты посмотрел?", "");
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов ты посмотрел?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < personalMovieDB.count; i++) {
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
  },
  detectPersonalLvl: function () {
    if (personalMovieDB.count < 10) {
      console.log("Почему так мало, ты что, Саня Гиндосов?");
    } else if (10 <= personalMovieDB.count < 30) {
      console.log("Ну, в принципе, нормально");
    } else if (personalMovieDB.count >= 30) {
      console.log("Ты, вообще, нормальный??");
    } else {
      console.log("Давай нормально вписывай");
    }
  },
  showMyBD: () => {
    if (personalMovieDB.privat != false) {
      console.log(personalMovieDB);
    }
  },
  writeYouGeners: function () {
    for (let i = 1; i <= 3; i++) {
      let currentGener = prompt(
        "Три любимых жанра в порядке убывания любимости"
      );
      if (currentGener != null && currentGener != "") {
        personalMovieDB.genres[i - 1] = currentGener;
        console.log("Спасибо");
      } else {
        console.log("Впиши что-нибудь");
        i--;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Под номером ${i + 1} жанр ${item}`);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat === false) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  },
};
