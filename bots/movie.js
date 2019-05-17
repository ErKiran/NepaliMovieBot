const bot = require('./bot').bot;
const database = require('../data/index');

bot.onText(/\/movie/, msg => {
    bot.once('message', async msg => {
        const res = msg.text;
        const movie = await database.name(res);
        if (movie === undefined || movie.length == 0) {
            bot.sendMessage(msg.chat.id, `Sorry! We are unable to find ${res} in our Database`)
        }
        else {
            bot.sendMessage(msg.chat.id, `<b>${movie[0].title}</b>
            \n Year: ${movie[0].year}
            The Runtime of the movie is ${movie[0].runtime}
            ${movie[0].title} has got <b>${movie[0].rating}</b> rating  amongs the <b>${movie[0].votes}</b> numbers of vote
            Plot of the movie
            <b>${movie[0].plot}</b>
            If you are intersted about it you can further check on it ${movie[0].imdb_url}
        `, { parse_mode: 'HTML' });
        }
    })
    bot.sendMessage(msg.chat.id, `🔍 Search the name of the movie you are willing to explore`)
})


bot.on('callback_query', query => {
    const chatId = query.from.id;
    let data;
    try {
        data = JSON.parse(query.data)
    } catch (e) {
        throw new Error('Data is not an object')
    }
    switch (true) {
        case database.allmoviename().includes(data.query):
            const movie = database.name(data.query);
            bot.sendMessage(chatId, `
             <b>${movie[0].title}</b>
             Year: ${movie[0].year}
             ⌚: ${movie[0].runtime}
             ⭐ : <b>${movie[0].rating}</b>
             🗳:  <b>${movie[0].votes}</b>
             Plot of the movie
             <b>${movie[0].plot}</b>
             If you are intersted about it you can further check on it ${movie[0].imdb_url}
         `, { parse_mode: 'HTML' });
    }
})