const bot = require('./bot').bot;
const keyboard = require('./keyboard');

bot.onText(/\/rating/, msg => {
    const opts = {
        reply_to_message_id: msg.message_id,
        reply_markup:
            keyboard.movie_rating
    };
    bot.sendMessage(msg.chat.id, 'Choose the Movies according to ratings', opts)
})

bot.on('callback_query')