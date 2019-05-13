const NepaliMovie = require('./db');

function getMoviesByGenre(genre) {
    return NepaliMovie.filter(i => i.genre == genre)
}

function getMoviesByYear(year) {
    return NepaliMovie.filter(i => i.year == year)
}

function getMoviesByVote(votes) {
    return NepaliMovie.filter(i => i.votes >= votes)
}

function getMoviesByRating(rates) {
    return NepaliMovie.filter(i => i.rating >= rates)
}

function getMovieByName(name) {
    return NepaliMovie.filter(i => i.title == name)
}

function getMovieByLength(time) {
    return NepaliMovie.filter(i => {
        if (!i.runtime) {
            return 0;
        }
        else {
            return (i.runtime).replace(/^\D+/g, '') >= time;
        }
    })
}

//console.log(getMoviesByGenre("Comedy"));

//console.log(getMoviesByYear(2019));

//console.log(getMoviesByVote(261))

//console.log(getMoviesByRating(9))
//console.log(getMovieByName('Kagbeni'))

console.log(getMovieByLength("120 min"))
