exports.run = (client, message, args)=> {
  const config = require('../config.json'); 
  if (!args[0]) return message.reply("mention someone to use this command.");
  const bot = `<@${client.user.id}>`;
  const mention = `<@${message.mentions.users.first().id}>`;
  const author = `<@${message.author.id}>`;
  const owner =  `<@${config.botOwner}>`;
  if (owner === mention) return message.reply(`Don't punch my owner 😬`, {
    files: ["http://i.imgur.com/coxlGCK.gif"] // Or replace with FileOptions object
});
  if (author === mention) return message.reply(`Don't punch  yourself XD, let me practice!`, {
    files: ["https://media.tenor.com/images/69fac3d7f1abfbd74bbd2f395cb53702/tenor.gif"] // Or replace with FileOptions object
});
  if (mention === bot) return message.reply(`Don't punch me 😭`, {
    files: ["https://media.giphy.com/media/dICjAqixKQFnG/giphy.gif"] // Or replace with FileOptions object
});
  return message.channel.send(`${author} _punched_ ${mention}!`, {
    files: ["https://i.makeagif.com/media/8-22-2015/nbEwdI.gif"] // Or replace with FileOptions object
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'punch',
  description: 'Punches someone for fun.',
  usage: 'punch [mention]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
