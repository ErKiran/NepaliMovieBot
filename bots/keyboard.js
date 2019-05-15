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
                    query: 'star_1'
                })
            },
            {
                text: '2+',
                callback_data: JSON.stringify({
                    query: 'star_2'
                })
            },
            {
                text: '3+',
                callback_data: JSON.stringify({
                    query: 'star_3'
                })
            },

            ],
            [{
                text: '4+',
                callback_data: JSON.stringify({
                    query: 'star_4'
                })
            },
            {
                text: '5+',
                callback_data: JSON.stringify({
                    query: 'star_5'
                })
            },
            {
                text: '6+',
                callback_data: JSON.stringify({
                    query: 'star_6'
                })
            },
            ],
            [{
                text: '7+',
                callback_data: JSON.stringify({
                    query: 'star_7'
                })
            },
            {
                text: '8+',
                callback_data: JSON.stringify({
                    query: 'star_8'
                })
            },
            {
                text: '9+',
                callback_data: JSON.stringify({
                    query: 'star_9'
                })
            },],

        ]
    },
    movie_voting: {
        inline_keyboard: [
            [{
                text: '0-100',
                callback_data: JSON.stringify({
                    query: 'vote_100'
                })
            },
            {
                text: '100-250',
                callback_data: JSON.stringify({
                    query: 'vote_250'
                })
            },
            ],
            [{
                text: '250-500',
                callback_data: JSON.stringify({
                    query: 'vote_500'
                })
            },
            {
                text: '500+',
                callback_data: JSON.stringify({
                    query: 'vote_501'
                })
            },
            ],

        ]
    },
}