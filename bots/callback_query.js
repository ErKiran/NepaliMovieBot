const bot = require('./bot').bot;
const db = require('../data/index');

bot.on('callback_query', query => {
    const chatId = query.from.id;
    const messageId = query.message.message_id;
    let data;
    try {
        data = JSON.parse(query.data)
    } catch (e) {
        throw new Error('Data is not an object')
    }
    switch (data.query) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            const values = db.moviesbyrating(data.query);
            const text = `Movies having rating between ${data.query} and ${data.query + 1}`;
            const endtext = `${Object.keys(values).length} ${text}`
            bot.sendMessage(chatId, text, {
                reply_markup: {
                    inline_keyboard: values.map((obj) => ([{
                        text: obj.title,
                        callback_data: JSON.stringify({
                            query: `${obj.title}`
                        })
                    }])),
                }
            })
            setTimeout(function () { bot.sendMessage(chatId, `${endtext}`) }, 500);
    }
})