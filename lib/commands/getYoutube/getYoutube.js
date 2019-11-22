const fetch = require('node-fetch')
const { replyDecorator} = require('../../decorators')
const { google_api_key } = require('../../config.json')

const getYoutube = () => async (ctx) => {
    const searchText = ctx.message.text.toLowerCase().replace('видосик ', '').replace('', '+')
    const youtubeLink = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${encodeURI(searchText)}&part=snippet&type=video&maxResults=1&videoEmbeddable=true&key=${google_api_key}`)
        .then(body => body.json())
        .then(data => { return data.items[0].id.videoId })
        .catch(err => { console.log(err) })

    if (youtubeLink) {
        console.log({
            "server": 'youtube ',
            "message": ctx.message.text,
            url: `https://www.youtube.com/watch?v=${youtubeLink}&has_verified=1`
        })
        replyDecorator(ctx, `https://www.youtube.com/watch?v=${youtubeLink}&has_verified=1`)
    }
    else {
        replyDecorator(ctx, 'не могу найти это ')
    }
}

module.exports = { getYoutube }