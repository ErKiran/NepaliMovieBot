const bot = require('./bot').bot;
const keyboard = require('./keyboard');

bot.onText(/\/start/, (msg) => {
    const opts = {
        reply_to_message_id: msg.message_id,
        reply_markup:
            keyboard.startkeyboard
    };
    bot.sendMessage(msg.chat.id, 'Welcome to World of 🇳🇵🎥. Use Custom Keyboard Type /help for more info', opts);
});
