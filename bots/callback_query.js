const bot = require('./bot').bot;
const db = require('../data/index');
const getPagination = require('./pagination');
const bookPages = 08;

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
            console.log(num)
            const values = db.moviesbyrating(num);
            const text = `Movies having rating between ${num} and ${num + 1}`;
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
            break
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            console.log(data.query)
            var editOptions = Object.assign({}, getPagination.page(parseInt(data.query), bookPages), { chat_id: chatId, message_id: messageId });
            bot.editMessageText('Page: ' + data.query, editOptions);
            break
        default:
            const moviename = data.query
            const movie = db.name(moviename);
            bot.sendMessage(chatId, `<b>${movie[0].title}</b>
            \n Year: ${movie[0].year}
            The Runtime of the movie is ${movie[0].runtime}
            ${movie[0].title} has got <b>${movie[0].rating}</b> rating  amongs the <b>${movie[0].votes}</b> numbers of vote
            Plot of the movie
            <b>${movie[0].plot}</b>
            If you are intersted about it you can further check on it ${movie[0].imdb_url}
        `, { parse_mode: 'HTML' });
    }
})