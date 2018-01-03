

exports.run = (client, message, args) => {
const cheerio = require('cheerio');
const snekfetch = require('snekfetch')
const querystring = require('querystring');
    let searchMessage = message.reply('Searching...');
   let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(message.content)}`;
   return snekfetch.get(searchUrl).then((result) => {
      let $ = cheerio.load(result.text);
      let googleData = $('.r').first().find('a').first().attr('href');
      googleData = querystring.parse(googleData.replace('/url?', ''));
      message.channel.send("Result found!", {embed: {title: "Google", color: 3447003, description: googleData.q}});
  }).catch((err) => {
     searchMessage.edit('No results found!');
  }); 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['google', 'search'],
  permLevel: 0
}

exports.help = {
  name: 'googlesearch', 
  description: 'Search Google for something.', 
  usage: 'googlesearch <query>', 
  module: 'Other', 
  permit: ' ', 
  alias: ' '
}