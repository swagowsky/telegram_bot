const fetch = require('node-fetch')
const { replyDecorator } = require('../../decorators')

const kit = () => async (ctx) => {
  let pic = await fetch('https://aws.random.cat/meow').then(body => body.json()).then(res => res.file)

  if (/.gif$/.test(pic)) {
    ctx.telegram.sendAnimation(ctx.message.chat.id, pic)
      .catch(() => {
        return replyDecorator(ctx, 'котиков пока нет')
      })
  }
  else {
    ctx.telegram.sendPhoto(ctx.message.chat.id, pic)
      .catch(() => {
        return replyDecorator(ctx, 'котиков пока нет')
      })
  }
}

module.exports = { kit }
