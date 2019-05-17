module.exports = {
    startkeyboard: {
        resize_keyboard: true,
        keyboard: [
            ['🎬 /movie', '🔘 /genre'],
            ['⭐ /rating', '🗳️ /votes'],
            ['🌞 /year', '/recommend_me'],
            ['ℹ️ /help'],
        ]
    },
    movie_rating: {
        inline_keyboard: [
            [{
                text: '1+',
                callback_data: JSON.stringify({
                    query: 1001
                })
            },
            {
                text: '2+',
                callback_data: JSON.stringify({
                    query: 1002
                })
            },
            {
                text: '3+',
                callback_data: JSON.stringify({
                    query: 1003
                })
            },

            ],
            [{
                text: '4+',
                callback_data: JSON.stringify({
                    query: 1004
                })
            },
            {
                text: '5+',
                callback_data: JSON.stringify({
                    query: 1005
                })
            },
            {
                text: '6+',
                callback_data: JSON.stringify({
                    query: 1006
                })
            },
            ],
            [{
                text: '7+',
                callback_data: JSON.stringify({
                    query: 1007
                })
            },
            {
                text: '8+',
                callback_data: JSON.stringify({
                    query: 1008
                })
            },
            {
                text: '9+',
                callback_data: JSON.stringify({
                    query: 1009
                })
            },],

        ]
    },
    movie_voting: {
        inline_keyboard: [
            [{
                text: '0-100',
                callback_data: JSON.stringify({
                    query: 5100
                })
            },
            {
                text: '100-250',
                callback_data: JSON.stringify({
                    query: 5250
                })
            },
            ],
            [{
                text: '250-500',
                callback_data: JSON.stringify({
                    query: 5500
                })
            },
            {
                text: '500+',
                callback_data: JSON.stringify({
                    query: 5501
                })
            },
            ],

        ]
    },
}