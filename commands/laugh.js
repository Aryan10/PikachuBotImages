
exports.run = (client, message, args) => {
  if (!args[0]) return message.reply("mention someone to use this command.");
  const bot = `<@${client.user.id}>`;
  const mention = `<@${message.mentions.users.first().id}>`;
  const author = `<@${message.author.id}>`;
  
  
  if (author === mention) return message.reply(`Laughing on yourself :joy:`, {
    files: ["http://i.imgur.com/u8Z66kO.gif"] // Or replace with FileOptions object
});
 
  return  message.channel.send(`${author} _laughed on_ ${mention}!`, {
    files: ["http://i.imgur.com/1AkDb.gif"] // Or replace with FileOptions object
});
    
                         
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'laugh',
  description: 'Laugh on someone or yourself.',
  usage: 'laugh [mention]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
