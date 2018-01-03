
exports.run = (client, message, args) => {
  if (!args[0]) return message.reply("mention someone to use this command.");
  const bot = `<@${client.user.id}>`;
  const mention = `<@${message.mentions.users.first().id}>`;
  const author = `<@${message.author.id}>`;
  
  
  if (author === mention) return message.reply(`laughing on yourself`, {
    file: "http://i.imgur.com/u8Z66kO.gif" // Or replace with FileOptions object
});
 
  return  message.channel.send(`_${author} laughed on ${mention}!_`, {
    file: "http://i.imgur.com/1AkDb.gif" // Or replace with FileOptions object
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
  description: 'laugh on someone',
  usage: 'laugh [mention]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
