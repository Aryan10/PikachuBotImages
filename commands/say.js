

exports.run = (client, message, args) => {
  const config = require('../config.json');
  const Discord = require ('discord.js');
if(message.author.id === config.botOwner){
    let msg = message.content.split(" ").slice(1).join(" ");
    if (!msg) return;
    message.delete(1);
    return message.channel.send(msg);
}else{
  message.channel.send("You're not my owner.");
  }
  
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Make bot say something.',
  usage: 'say',
  module: 'Admin',
  permit: 'Bot Owner Only',
  alias: ' '
};


  





