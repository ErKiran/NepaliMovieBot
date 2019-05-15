const bot = require('./bot').bot;
const data = require('../data/index');


bot.onText(/\/recommend_me/, msg => {
    const term = data.recommend();
    var count = Object.keys(term).length;
    const rand = Math.floor(Math.random() * count);
    const movie = term[rand];
    bot.sendMessage(msg.chat.id, `
            <b>${movie.title}</b>
            Year: ${movie.year}
            ⌚: ${movie.runtime}
            ⭐ : <b>${movie.rating}</b>   
            🗳:  <b>${movie.votes}</b> 
            Plot of the movie
            <b>${movie.plot}</b>
            If you are intersted about it you can further check on it ${movie.imdb_url}
        `, { parse_mode: 'HTML' });
})



//Math.floor(Math.random() * 20);