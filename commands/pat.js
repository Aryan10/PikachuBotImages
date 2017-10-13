exports.run = (client, message, args) => {
  if (!args[0]) return message.reply("mention someone to use this command.");
  const bot = `<@${client.user.id}>`;
  const mention = `<@${message.mentions.users.first().id}>`;
  const author = `<@${message.author.id}>`;
  
  
  if (bot === mention) return message.reply(`Thanks for patting me :3`, {
    files: ["http://i1.wp.com/www.thebakingspoon.com/wp-content/uploads/2013/12/patt.gif"] // Or replace with FileOptions object
});
 if (author === mention) return message.reply(`Patting yourself xD :c`, {
    files: ["https://media.giphy.com/media/TlK63Eot2xTSuLMlUpq/giphy.gif"] // Or replace with FileOptions object
});
 
  return  message.channel.send(`${author} _patted_ ${mention}!`, {
    files: ["https://media.giphy.com/media/SHyuhBtRr8Zeo/giphy.gif"] // Or replace with FileOptions object
});
    
                         
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pat',
  description: 'Pat someone.',
  usage: 'pat [mention]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
 
