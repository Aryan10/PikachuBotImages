exports.run = (client, message, args) => {
  if (!args[0]) return message.reply("mention someone to use this command.");
  const bot = `<@${client.user.id}>`;
  const mention = `<@${message.mentions.users.first().id}>`;
  const author = `<@${message.author.id}>`;
  
  
  if (bot === mention) return message.reply(`thanks for patting me :yes:`, {
    file: "http://i1.wp.com/www.thebakingspoon.com/wp-content/uploads/2013/12/patt.gif" // Or replace with FileOptions object
});
 if (author === mention) return message.reply(`patting yourself :pikasad:`, {
    file: "https://media.giphy.com/media/TlK63Eot2xTSuLMlUpq/giphy.gif" // Or replace with FileOptions object
});
 
  return  message.channel.send(`_${author} patted ${mention}!_`, {
    file: "https://media.giphy.com/media/SHyuhBtRr8Zeo/giphy.gif" // Or replace with FileOptions object
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
  description: 'pat someone ',
  usage: 'pat [mention]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
 
