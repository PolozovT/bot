process.env["NTBA_FIX_319"] = 1;

var TelegramBot = require('node-telegram-bot-api');

var TOKEN = '756950534:AAEIZHfD-ejbXkvOdNqRcRBPIbQnlHFKs7Y';

var bot = new TelegramBot(TOKEN, {polling: true });

const urlPhoto = "https://memepedia.ru/wp-content/uploads/2016/08/fdKZ-ZpN7iw.jpg";

const optQuestion1 = {
    parse_mode: 'markdown',
    disable_web_page_preview: false,
    reply_markup:JSON.stringify({
        inline_keyboard: [
            [{text: 'you', callback_data: 'you'},
                {text: 'nobody', callback_data: 'nobody'}]
        ]
    })
};

bot.on('text', function (msg) {     //msg - Объект, который возвращает этот метод, когда приходит сообщение,
	//посмотрите через консоль из чего он состоит.

  var messageChatId = msg.chat.id;

  var messageText = msg.text;

  if ((messageText ==='Го') || (messageText ==='го')) {

     bot.sendMessage(messageChatId, 'Вам кого?', optQuestion1);

     bot.sendPhoto(messageChatId, urlPhoto);
  }

});

bot.on('callback_query', function (msg) {


    if (msg.data === 'you') {
        console.log("YOU");
        answer1 = "YOU";
    }

    if (msg.data === "nobody") {
        console.log("NOBODY");
        answer1 = "NOBODY";
    }

    bot.sendMessage(msg.from.id, answer1);
    
});
