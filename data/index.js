const NepaliMovie = require('./db');

module.exports = {
    genre: function getGenre() {
        let genre = [];
        genre = NepaliMovie.map(i => i.genre)
        const isthis = [... new Set(genre)];
        const ok = isthis.filter(i => { return i !== null })
        return ok;
    },
    genrebyname: function getMoviesByGenre(genre) {
        return NepaliMovie.filter(i => i.genre == genre)
    },
    year: function getMoviesByYear(year) {
        return NepaliMovie.filter(i => i.year == year)
    },
    vote: function getMoviesByVote(votes) {
        if (votes == 100) {
            return NepaliMovie.filter(i => i.votes <= votes && i.votes > votes - 100)
        }
        else if (votes == 250) {
            return NepaliMovie.filter(i => i.votes <= votes && i.votes > votes - 150)
        }
        else if (votes == 500) {
            return NepaliMovie.filter(i => i.votes <= votes && i.votes > votes - 250)
        }
        else {
            return NepaliMovie.filter(i => i.votes > votes)
        }

    },

    moviesbyrating: function getMoviesByRating(rates) {
        return NepaliMovie.filter(i => i.rating > rates && i.rating < rates + 1)
    },

    name: function getMovieByName(name) {
        return NepaliMovie.filter(i => i.title == name)
    },

    length: function getMovieByLength(time) {
        return NepaliMovie.filter(i => {
            if (!i.runtime) {
                return 0;
            }
            else {
                return (i.runtime).replace(/^\D+/g, '') >= time;
            }
        })
    },
    recommend: function recommend() {
        return NepaliMovie.filter(i =>
            i.rating > 6.0 && i.votes > 150
        )
    },
    allmoviename: function getallMoviename() {
        return NepaliMovie.map(i => i.title)
    }

}


