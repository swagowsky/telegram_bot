const replyDecorator = (ctx, message) => ctx.telegram.sendMessage(ctx.message.chat.id, message, {
    reply_to_message_id: ctx.message.message_id
}).catch((err) => { console.log(err) })

const replyDecoratorPic = (ctx, message) => {
    ctx.telegram.sendPhoto(ctx.message.chat.id, message, {
        reply_to_message_id: ctx.message.message_id
    })
        .catch(() => {
            console.log('битая ссылка -  ', message)
            ctx.telegram.sendMessage(ctx.message.chat.id, 'битая ссылка', {
                reply_to_message_id: ctx.message.message_id
            })
        })
}

const checkMessage = (textMessage, firstWord) => {
    let [command] = textMessage.split(' ')
    if (command.toLowerCase() == firstWord) {
        return true
    }
}

module.exports = { replyDecorator, replyDecoratorPic, checkMessage }