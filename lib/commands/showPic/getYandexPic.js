const cheerio = require('cheerio')
const fetch = require('node-fetch')

const picSelector = '.serp-item__thumb'

async function getRandomPicYandex(request) {
    getRandomPicYandex.yandexBlockTime = getRandomPicYandex.yandexBlockTime || 0;
    if ((Date.now() < getRandomPicYandex.yandexBlockTime + 1000 * 60 * 60)) {
        throw new Error('yandex blocked timeout');
    }

    const query = request.replace(" ", "+")
    const body = await fetch(`https://yandex.ru/images/search?text=${encodeURI(query)}`, {
        "credentials": "include",
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "accept-language": "en-US,en;q=0.9,ru;q=0.8",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36',
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        "referrer": `https://yandex.ru/images/search?text=${encodeURI(query)}`,
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": null,
        "method": "GET",
        "mode": "cors"
    })
        .then(body => body.text())
    const $ = cheerio.load(body)
    const urls = Array.from($(picSelector)).map(e => e.attribs.src)
    const picUrl = urls[Math.floor(Math.random() * urls.length)]
    if (picUrl) {
        return picUrl
    } else {
        getRandomPicYandex.yandexBlockTime = Date.now();
        throw new Error('no image avaliable on yandex')
    }
}

module.exports = { getRandomPicYandex }