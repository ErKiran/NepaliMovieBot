const bot = require('./bot').bot;
const data = require('../data');

bot.onText(/\/genre/, async (msg) => {
    const value = await data.genre();
    value.map(i =>
        bot.sendMessage(msg.chat.id, i))
})