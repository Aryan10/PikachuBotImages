const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setTitle("List Of Servers")
    .setColor(3447003)
    .setDescription(client.guilds.map(g=>g.name).join(", "));
  if (embed.description.length > 1998) return message.reply("**Discord API Error**\nCan't send large messages.");
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['guilds'],
  permLevel: 0
};

exports.help = {
  name: 'servers',
  description: 'Shows all the servers the bot is in',
  usage: 'servers',
  module: 'Other',
  permit: ' ',
  alias: '/ guilds'
}; 
