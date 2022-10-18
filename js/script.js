let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

let personalMovieDB = {
    count:  numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let name_film1 = prompt('Один из последних просмотренных фильмов?', "");
let points1 = prompt('На сколько оцените его?', "");
let name_film2 = prompt('Один из последних просмотренных фильмов?', "");
let points2 = prompt('На сколько оцените его?', "");

personalMovieDB.movies[name_film1] = points1;
personalMovieDB.movies[name_film2] = points2;

console.log(personalMovieDB);
