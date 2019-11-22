const { replyDecorator } = require('../../decorators')

const roll = () => (ctx) => {
  let score = Math.floor(Math.random() * (900000)) + 100000
  let scoreSplited = String(score).split("")
  let outputString = `${scoreSplited[0].concat('', scoreSplited[1], scoreSplited[2])} ${scoreSplited[3].concat('', scoreSplited[4], scoreSplited[5])}`
  /*the code is shit, but it works*/
  const match = (firstIndex, secondIndex) => {
    return scoreSplited[firstIndex - 1] == scoreSplited[secondIndex - 1]
  }
  if (match(1, 2) && match(1, 3) && match(1, 4) && match(1, 5) && match(1, 6)) {
    return replyDecorator(ctx, `у вас РОЯПЛ: ${outputString}`)
  }
  if (match(2, 3) && match(2, 4) && match(2, 5) && match(2, 6)) {
    return replyDecorator(ctx, `КВИНТИПЛ: ${outputString}`)
  }
  if (match(1, 2) && match(3, 4) && match(3, 5) && match(3, 6) || match(1, 2) && match(1, 3) && match(1, 4) && match(5, 6)) {
    return replyDecorator(ctx, `ДАБЛхКВАДРИПЛ: ${outputString}`)
  }
  if (match(3, 4) && match(3, 5) && match(3, 6)) {
    return replyDecorator(ctx, `КВАДРИПЛ: ${outputString}`)
  }
  if (match(1, 2) && match(1, 3) && match(5, 6) || match(4, 5) && match(4, 6) && match(2, 3)) {
    return replyDecorator(ctx, `ДАБЛxТРИПЛ: ${outputString}`)
  }
  if (match(1, 2) && match(1, 3) && match(4, 5) && match(4, 6)) {
    return replyDecorator(ctx, `2xТРИПЛ: ${outputString}`)
  }
  if (match(1, 2) && match(1, 3) || match(4, 5) && match(4, 6)) {
    return replyDecorator(ctx, `ТРИПЛ: ${outputString}`)
  }
  if (match(2, 3) && match(5, 6) && match(3, 6)) {
    return replyDecorator(ctx, `КАРЕПЛ: ${outputString}`)
  }
  if (match(2, 3) && match(5, 6)) {
    return replyDecorator(ctx, `2xДАБЛ: ${outputString}`)
  }
  if (match(1, 2) && match(3, 4) && match(5, 6)) {
    return replyDecorator(ctx, `3xДАБЛ: ${outputString}`)
  }
  if (!match(1, 2) && match(2, 3) || !match(4, 5) && match(5, 6)) {
    return replyDecorator(ctx, `ДАБЛ: ${outputString}`)
  }
  if (match(1, 4) && match(2, 5) && match(3, 6)) {
    return replyDecorator(ctx, `у вас псевдоДАБЛ: ${outputString}`)
  }
  if (!match(2, 3) && !match(5, 6)) {
    return replyDecorator(ctx, `${outputString}`)
  }
}

module.exports = { roll }