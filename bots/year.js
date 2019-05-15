const bot = require('./bot').bot;
const data = require('../data/index');

bot.onText(/\/year (.+)/, async (msg, match) => {
    const res = match[1];
    const movie = await data.year(res);
    if (movie === undefined || movie.length == 0) {
        bot.sendMessage(msg.chat.id, `Sorry! We are unable to find movie released in the year ${res} in our Database`)
    }
    else {
        const text = `Movies Released in the year ${res}`
        bot.sendMessage(msg.chat.id, text, {
            reply_markup: {
                inline_keyboard: movie.map((obj) => ([{
                    text: obj.title,
                    callback_data: JSON.stringify({
                        query: `${obj.title}`
                    })
                }])),
            }
        })
    }
})

bot.onText(/\/year/, msg => {
    bot.sendMessage(msg.chat.id, `Try /year 2010 to get Detail Info of the movie released in that year`)
})


