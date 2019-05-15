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
        case 'star_1':
        case 'star_2':
        case 'star_3':
        case 'star_4':
        case 'star_5':
        case 'star_6':
        case 'star_7':
        case 'star_8':
        case 'star_9':
            const num = parseInt((data.query).substring(5, 6));
            const values = db.moviesbyrating(num);

            const text = `Movies having rating between ${num} and ${num + 1}`;
            const endtext = `${Object.keys(values).length} ${text}`;
            if (Object.keys(values).length > 20) {
                bot.sendMessage(chatId, text, {
                    reply_markup: {
                        inline_keyboard: values.slice(0, 10).map((obj) => ([{
                            text: obj.title,
                            callback_data: JSON.stringify({
                                query: `${obj.title}`
                            })
                        }])),
                    }
                })
            }
            else {
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
            }

            setTimeout(function () { bot.sendMessage(chatId, `${endtext}`) }, 500);
            break

        case 'vote_100':
        case 'vote_250':
        case 'vote_500':
        case 'vote_501':
            const votes = parseInt((data.query).substring(5, 8));
            const voted_movies = db.vote(votes);
            bot.sendMessage(chatId, 'Here', {
                reply_markup: {
                    inline_keyboard: voted_movies.map((obj) => ([{
                        text: obj.title,
                        callback_data: JSON.stringify({
                            query: `${obj.title}`
                        })
                    }])),
                }
            })
            break
    }
})