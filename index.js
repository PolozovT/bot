process.env["NTBA_FIX_319"] = 1;

var TelegramBot = require('node-telegram-bot-api');

var Twit = require('twit');

var TOKEN = '756950534:AAEIZHfD-ejbXkvOdNqRcRBPIbQnlHFKs7Y';

var bot = new TelegramBot(TOKEN, {polling: true });
/*
var T = new Twit({

});
*/
const urlPhoto = "https://memepedia.ru/wp-content/uploads/2016/08/fdKZ-ZpN7iw.jpg";

const optQuestion1 = {
    parse_mode: 'markdown',
    disable_web_page_preview: false,
    reply_markup:JSON.stringify({
        inline_keyboard: [
            [{text: 'you', callback_data: 'you'},
                {text: 'nobody', callback_data: 'nobody'}],
            [{text: 'weather', callback_data: 'weather'},
                {text: 'twitter', callback_data: 'twitter'}]
        ]
    })
};

const optQuestion2 = {
    parse_mode: 'markdown',
    disable_web_page_preview: false,
    reply_markup:JSON.stringify({
        inline_keyboard: [
            [{text: 'What are you need?', callback_data: 'What'},
                {text: 'Gi', callback_data: 'gi'}]
        ]
    })
};

bot.on('text', function (msg) {     //msg - Объект, который возвращает этот метод, когда приходит сообщение,
	//посмотрите через консоль из чего он состоит.

  var messageChatId = msg.chat.id;

  var messageText = msg.text;

  if ((messageText ==='Го') || (messageText ==='го')) {

      bot.sendPhoto(messageChatId, urlPhoto);

      bot.sendMessage(messageChatId, 'Who you need?', optQuestion1);

  }

});

bot.on('callback_query', function (msg) {


    if (msg.data === 'you') {
        console.log("YOU");
        answer1 = "What?";
        bot.sendMessage(msg.from.id, answer1, optQuestion2);
    }

    if (msg.data === "nobody") {
        console.log("NOBODY");
        answer1 = "BB";
        bot.sendMessage(msg.from.id, answer1);
    }

    if (msg.data === "weather") {
        console.log("WEATHER");
        urlGismeteo = "https://www.gismeteo.ru/weather-moscow-4368/3-days";
        bot.sendMessage(msg.from.id, urlGismeteo);
    }

    if (msg.data === "twitter") {
        console.log("TWITTER");
        urlTwitter = "https://www.twitter.com";
        bot.sendMessage(msg.from.id, urlTwitter);
    }
});


bot.on('callback_query', function (msg) {


    if (msg.data === 'What') {
        console.log("WHAT");
        answerWhat = "What?";
        bot.sendMessage(msg.from.id, answerWhat);
    }

    if (msg.data === 'gi') {
        console.log("GI");
        answerGi = "Gi";
        bot.sendMessage(msg.from.id, answerGi);
    }

});

