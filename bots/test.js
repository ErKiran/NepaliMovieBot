const bot = require('./bot').bot;
const pagination = require('./pagination');
const bookPages = 7;

bot.onText(/\/book/, function (msg) {
    bot.sendMessage(msg.chat.id, 'Page: 08', pagination.page(10, bookPages));
});
