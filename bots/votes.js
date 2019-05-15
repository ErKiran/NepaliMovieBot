const bot = require('./bot').bot;
const keyboard = require('./keyboard');

bot.onText(/\/votes/, msg => {
    const opts = {
        reply_to_message_id: msg.message_id,
        reply_markup:
            keyboard.movie_voting
    };
    bot.sendMessage(msg.chat.id, 'Choose the Movies according to number of voting', opts)
})

