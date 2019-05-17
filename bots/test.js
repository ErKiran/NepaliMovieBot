const bot = require('./bot').bot;
const pagi = require('../helpers/pagination');
const { exp } = require('./callback_query');
const db = require('../data/index');


bot.onText(/\/book/, function (msg) {
    bot.sendMessage(msg.chat.id, 'Page: 25', pagi.getPagination(25, exp.bookpage));
});

bot.on("polling_error", (err) => console.log(err));

bot.on('callback_query', function (message) {
    var msg = message.message;
    const x = message.data;
    switch (true) {
        case (x <= 100):
            /*  const opts = {
                  reply_markup: {
                      inline_keyboard: voted_movies.map((obj) => ([{
                          text: obj.title,
                          callback_data: JSON.stringify({
                              query: `${obj.title}`
                          })
                      }])),
                  }
              }*/
            if (exp.vote) {
                const voted_movies = db.vote(exp.vote);
                console.log(exp.bookpage)
                bot.sendMessage(msg.chat.id, `Here is the List`, {
                    reply_markup: {
                        inline_keyboard: voted_movies.slice(0, exp.bookpage).map((obj) => ([{
                            text: obj.title,
                            callback_data: JSON.stringify({
                                query: `${obj.title}`
                            })
                        }])),
                    }
                })
                var editOptions = Object.assign({}, pagi.getPagination(parseInt(message.data), exp.bookpage), { chat_id: msg.chat.id, message_id: msg.message_id });
                bot.editMessageText('Page: ' + message.data, editOptions);
                bot.sendMessage(msg.chat.id, `Hey ${msg.chat.first_name} you have just clicked ${message.data}`)
            }
    }


});

/*bot.on('message', msg => {
    console.log(msg)
     if (msg) {
         if ((msg.entities.map(i => i.type)[0]) == 'bot_command') {
             if (msg.text == '🎬 /movie') {
                 console.log('hey')
             }
         }
     }
})
*/