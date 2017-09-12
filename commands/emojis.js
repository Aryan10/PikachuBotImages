const Discord = require("discord.js");

exports.run = (client, message, args) => {

  const guild = message.guild;
  const embed = new Discord.RichEmbed()
    .setAuthor(`${guild.name}'s Custom Emojis`, guild.iconURL)
    .setDescription(guild.emojis.map(e=>e.toString()).join(" "));
  message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emotes'],
  permLevel: 0
}

exports.help = {
  name: 'emojis', 
  description: 'Shows all current server custom emojis.', 
  usage: 'emojis', 
  module: 'Other', 
  permit: ' ', 
  alias: '/ emotes'
}
