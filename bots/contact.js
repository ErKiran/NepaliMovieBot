const bot = require('./bot').bot;
const keyboard = require('./keyboard');
/*const summary = {};
const passenger_data = {};
const booking_data = {}*/

bot.onText(/\/contact/, msg => {
    bot.sendMessage(msg.chat.id, "What is your contact Number? Please Click on Contact Button!!", {
        reply_markup: keyboard.contact_keyboard
    });
})

bot.on('contact', async (msg) => {
    bot.sendMessage(msg.chat.id, 'Just to make Conversation Going')
    bot.once('message', msg => {
        bot.sendMessage(msg.chat.id, "Please Enter a full name?")
    }).then(msg => {
        bot.once('message', msg => {
            bot.sendMessage(msg.chat.id, 'Do I need to ask another Question')
        })
    })
})
/*bot.on('contact', async (msg) => {
    passenger_data.phone_number = msg.contact.phone_number;
    bot.sendMessage(msg.chat.id, "Please Enter a full name?", { reply_markup: { force_reply: true } })
        .then((msg) => {
            const chatId = msg.chat.id;
            const messageId = msg.message_id;
            bot.onReplyToMessage(chatId, messageId, (msg) => {
                passenger_data.name = msg.text;
                bot.sendMessage(msg.chat.id, "Please! Enter your Street and House Number?", { reply_markup: { force_reply: true } })
                    .then((msg) => {
                        const chatId = msg.chat.id;
                        const messageId = msg.message_id;
                        bot.onReplyToMessage(chatId, messageId, (msg) => {
                            passenger_data.street_and_house_number = msg.text;
                            bot.sendMessage(msg.chat.id, "Please! Enter your Postal Code?", { reply_markup: { force_reply: true } })
                                .then((msg) => {
                                    const chatId = msg.chat.id;
                                    const messageId = msg.message_id;
                                    bot.onReplyToMessage(chatId, messageId, (msg) => {
                                        passenger_data.postal_code = msg.text;
                                        bot.sendMessage(msg.chat.id, "Enter Your Current City?", { reply_markup: { force_reply: true } })
                                            .then((msg) => {
                                                const chatId = msg.chat.id;
                                                const messageId = msg.message_id;
                                                bot.onReplyToMessage(chatId, messageId, (msg) => {
                                                    passenger_data.city = msg.text;
                                                    bot.sendMessage(msg.chat.id, "Enter your Current Country", { reply_markup: { force_reply: true } })
                                                        .then((msg) => {
                                                            const chatId = msg.chat.id;
                                                            const messageId = msg.message_id;
                                                            bot.onReplyToMessage(chatId, messageId, (msg) => {
                                                                passenger_data.country = msg.text;
                                                                bot.sendMessage(msg.chat.id, "Enter your E-Mail Address?", { reply_markup: { force_reply: true } })
                                                                    .then((msg) => {
                                                                        const chatId = msg.chat.id;
                                                                        const messageId = msg.message_id;
                                                                        bot.onReplyToMessage(chatId, messageId, (msg) => {
                                                                            passenger_data.email_address = msg.text;
                                                                            passenger_data.is_client = 1;
                                                                            if (msg.text) {
                                                                                bot.sendMessage(msg.chat.id, `The summary for the booking is \n
                                                                                                                Name of Hotel:<b> ${summary.hotel_name} </b>
                                                                                                                Total Number of People:<b> ${booking_data.passenger_count} </b>
                                                                                                                Starting Date: <b> ${booking_data.start_date} </b>
                                                                                                                Time Span: <b> ${summary.number_of_days} </b>`,
                                                                                    { parse_mode: 'HTML' });
                                                                                setTimeout(function () { bot.sendMessage(msg.chat.id, "Proceed to Stripe Payment", { reply_markup: keyboard.stripe }); }, 500);
                                                                            }

                                                                        })
                                                                    })
                                                            })
                                                        })


                                                });
                                            })
                                    });
                                })
                        })
                    })
            })
        })
})
*/