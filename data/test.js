const NepaliMovie = require('./db');

/*function getDistinctGenre() {
    let genre = [];
    genre = NepaliMovie.map(i => i.genre)
    const isthis = [... new Set(genre)]
    const ok = isthis.filter(i => { return i !== null })
    console.log(ok.map(i => i))
    let yu = []
    for (var i = 0; i < ok.length; i++) {
        for (var j = 0; j < ok[i].length; j++) {
            yu.push(ok[i][j]);
        }
    }
    console.log(yu)
    return genre;
}
*/

getDistinctGenre()