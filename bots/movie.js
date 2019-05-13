const bot = require('./bot').bot;
const data = require('../data/index');

bot.onText(/\/movie (.+)/, async (msg, match) => {
    const res = match[1];
    const movie = await data.name(res);
    if (movie === undefined || movie.length == 0) {
        bot.sendMessage(msg.chat.id, `Sorry! We are unable to find ${res} in our Database`)
    }
    else {
        bot.sendMessage(msg.chat.id, `<b>${movie[0].title}</b>
        \n Year: ${movie[0].year}
        The Runtime of the movie is ${movie[0].runtime}
        ${movie[0].title} has got <b>${movie[0].rating}</b> rating  amongs the <b>${movie[0].votes}</b>
        Plot of the movie
        <b>${movie[0].plot}</b>
        If you are intersted about it you can further check on it ${movie[0].imdb_url}
    `, { parse_mode: 'HTML' });
    }
})

bot.onText(/\/movie/, msg => {
    bot.sendMessage(msg.chat.id, `Try / movie Movie_Name to get Detail Info of the movie`)
})


