const Telegraf = require('telegraf')
const { kit, roll, showPic, getYoutube } = require('./lib/commands')
const { checkMessage } = require('./lib/decorators')
const { token, commands } = require('./lib/config.json')
const { row1, row2, row3, row4, row5 } = commands
const bot = new Telegraf(token)

bot
  .start((ctx) => ctx.reply(row1 + row2 + row3 + row4 + row5))
  .help((ctx) => ctx.reply('бог тебе в помощь'))
  .command('kit', kit())
  .hears(textMessage => /(если дабл|на дабл|если трипл|на трипл|роллим)/.test(textMessage.toLowerCase()), roll())
  .hears(textMessage => checkMessage(textMessage, 'покажи'), showPic())
  .hears(textMessage => checkMessage(textMessage, 'видосик'), getYoutube())
  .launch()
