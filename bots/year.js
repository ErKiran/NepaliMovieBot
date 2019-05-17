const bot = require('./bot').bot;
const data = require('../data/index');

bot.onText(/\/year/, msg => {
    bot.once('message', async msg => {
        const res = msg.text;
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
    bot.sendMessage(msg.chat.id, `🔍 Search the year to get movies released in the particular year`)
})


