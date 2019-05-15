const bot = require('./bot').bot;
const pagi = require('../helpers/pagination');
var bookPages = 100;


bot.onText(/\/book/, function (msg) {
    bot.sendMessage(msg.chat.id, 'Page: 25', pagi.getPagination(25, bookPages));
});

bot.on("polling_error", (err) => console.log(err));

bot.on('callback_query', function (message) {
    var msg = message.message;
    const x = message.data;
    switch (true) {
        case (x <= 100):
            var editOptions = Object.assign({}, pagi.getPagination(parseInt(message.data), bookPages), { chat_id: msg.chat.id, message_id: msg.message_id });
            bot.editMessageText('Page: ' + message.data, editOptions);
            bot.sendMessage(msg.chat.id, `Hey ${msg.chat.first_name} you have just clicked ${message.data}`)
    }


});
