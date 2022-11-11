const Telegraf = require("Telegraf").Telegraf
const bot = new Telegraf('5639808305:AAFr2fH46mhjuzsF12GHYCH9P9AwEGZctKE')
const entradasF1 = 166
const entradasF2 = 167
const entradasF3 = 167

bot.start((ctx) => {
  ctx.reply('hola, bienvienido a la compra de entradas de TCP \n' + 'Para comprar entrada utilize el comando /comprar')
})

bot.command('comprar', (ctx) => {
  const EntradasF1Venta = (entradasF1) =>{
    
  }
})

bot.launch()