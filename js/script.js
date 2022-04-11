/* const number = {
    a: 50
};

number.a = 10;
console.log(number); */

/* let number = 10;
number = 5;
console.log(number); */


/* const number = {
    a: 50
};

number.a = 10;
console.log(number);
 */


/* const number = {
    name: 'Alex',
    age: 26,
    isMarried: false
};

console.log(number.isMarried); */


/* const number = confirm('Are u here?');

console.log(number); */

/* const answer = [];
answer[0] = prompt('How is your name?', '');
answer[1] = prompt('how r u?', '');
console.log(typeof(null)); */

/* const answer = alert('How old r u');
console.log(typeof(answer)); */


/* const stark = 'Arya';
const answer = 'Do u want to eat';
console.log(`${answer}, ${stark}?`); */

/* const answer = prompt('Do u want to eat?', '');
console.log(answer); */


/* const user = 'U r ready!';
const bool = true;
const answer = prompt('how old r u', '');
const another = alert('OKAY');
console.log(`${user}, ${bool}`); */


const number0films = prompt('How many scary films have u watched', '');

const personalMovieDB = {
    count: number0films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 
const a = prompt('One of the latest watched movies?', ''),
      b = prompt('What`s is your opinion about?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
