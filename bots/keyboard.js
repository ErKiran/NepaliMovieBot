module.exports = {
    startkeyboard: {
        resize_keyboard: true,
        keyboard: [
            ['🎬 /movie', '🔘 /genre'],
            ['👍 /rating', '🗳️ /votes'],
            ['🌞 /Year'],
            ['ℹ️ /help'],
        ]
    },
    movie_rating: {
        inline_keyboard: [
            [{
                text: '1+',
                callback_data: JSON.stringify({
                    query: 1
                })
            },
            {
                text: '2+',
                callback_data: JSON.stringify({
                    query: 2
                })
            },
            {
                text: '3+',
                callback_data: JSON.stringify({
                    query: 3
                })
            },

            ],
            [{
                text: '4+',
                callback_data: JSON.stringify({
                    query: 4
                })
            },
            {
                text: '5+',
                callback_data: JSON.stringify({
                    query: 5
                })
            },
            {
                text: '6+',
                callback_data: JSON.stringify({
                    query: 6
                })
            },
            ],
            [{
                text: '7+',
                callback_data: JSON.stringify({
                    query: 7
                })
            },
            {
                text: '8+',
                callback_data: JSON.stringify({
                    query: 8
                })
            },
            {
                text: '9+',
                callback_data: JSON.stringify({
                    query: 9
                })
            },],

        ]
    },
}