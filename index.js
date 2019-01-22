
process.env["NTBA_FIX_319"] = 1;

var TelegramBot = require('node-telegram-bot-api');

var TOKEN = '756950534:AAEIZHfD-ejbXkvOdNqRcRBPIbQnlHFKs7Y';

var bot = new TelegramBot(TOKEN, {polling: true }); // Создаём экземпляр объекта бота через конструктор,
                                              //если по простому, то мы будем обращаться к bot за нашими методами api

const urlPhoto = "https://memepedia.ru/wp-content/uploads/2016/08/fdKZ-ZpN7iw.jpg";

bot.on('text', function (msg) {     //msg - Объект, который возвращает этот метод, когда приходит сообщение,
	//посмотрите через консоль из чего он состоит. Далее получим id чата, чтобы разделять написавших и само сообщение

  var messageChatId = msg.chat.id;

  var messageText = msg.text;

   if (messageText === 'Го' || 'го') {

     bot.sendMessage(messageChatId, 'Вам кого?');

     bot.sendPhoto(messageChatId, urlPhoto);
   }

});








/*
const Telegraf = require('telegraf');
const app = new Telegraf('756950534:AAEIZHfD-ejbXkvOdNqRcRBPIbQnlHFKs7Y');

app.hears('hi', ctx => {
    return ctx.reply('Hey!');
});

app.startPolling();
*/