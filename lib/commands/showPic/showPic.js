const { getRandomPicGoogle } = require('./getGooglePic')
const { getRandomPicYandex } = require('./getYandexPic')
const { replyDecoratorPic } = require('../../decorators')

const showPic = () => async (ctx) => {
    const searchText = ctx.message.text.toLowerCase().replace('покажи ', '')
    let picUrl;

    try {
        picUrl = await getRandomPicYandex(searchText);
        console.log({
            "server": 'yandex message- ',
            "message": ctx.message.text,
            picUrl
        })
    } catch (e) {
        picUrl = await getRandomPicGoogle(searchText).catch(err => console.error(err));
        console.log({
            "server": 'google message- ',
            "message": ctx.message.text,
            picUrl
        })
    }

    if (picUrl) {
        if (!/^http/.test(picUrl)) {
            picUrl = 'https:' + picUrl;
        }
        return replyDecoratorPic(ctx, picUrl)
    } else {
        ctx.telegram.sendMessage(ctx.message.chat.id, 'не могу найти это ')
    }
}
module.exports = { showPic }