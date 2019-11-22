const fetch = require('node-fetch')
const { cx, google_api_key } = require('../../config.json')

async function getRandomPicGoogle(request) {
    const query = request.replace(" ", "+")
    return await fetch(`https://www.googleapis.com/customsearch/v1?q=${encodeURI(query)}&cx=${cx}&searchType=image&key=${google_api_key}`)
        .then(body => body.json())
        .then(res => {
            return res.items[Math.floor(Math.random() * res.items.length)].link
        })
}

module.exports = { getRandomPicGoogle }