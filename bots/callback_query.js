const bot = require('./bot').bot;
const db = require('../data/index');
const pagi = require('../helpers/pagination');
let exp = {};


bot.on('callback_query', query => {
    const chatId = query.from.id;
    const messageId = query.message.message_id;
    let data;
    try {
        data = JSON.parse(query.data)
    } catch (e) {
        throw new Error('Data is not an object')
    }
    switch (true) {
        case (data.query >= 1001 && data.query <= 1009):
            const num = parseInt((data.query).toString().substring(3, 4));
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
        case (data.query >= 5100 && data.query <= 5501):
            const votes = parseInt((data.query).toString().substring(1, 4));
            exp.vote = votes;
            const voted_movies = db.vote(votes);
            const total_len = Object.keys(voted_movies).length;
            const pages = total_len / 15;
            if (pages > 1) {
                bot.sendMessage(chatId, `Here is the List`, {
                    reply_markup: {
                        inline_keyboard: voted_movies.slice(0, Math.round(pages)).map((obj) => ([{
                            text: obj.title,
                            callback_data: JSON.stringify({
                                query: `${obj.title}`
                            })
                        }])),
                    }
                })

                exp.bookpage = Math.round(pages);
                setTimeout(function () { bot.sendMessage(chatId, 'Page: 1', pagi.getPagination(1, exp.bookpage)) }, 500);
            }
            else {
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
            }
            break

    }
})
module.exports = {
    exp
}