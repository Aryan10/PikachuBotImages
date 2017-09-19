const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setTitle("List Of Channels")
    .setColor(3447003)
    .setFooter(`Type ${config.prefix}cinfo <channel> to get info on a specific channel.`)
    .addField("Text", message.guild.channels.filter(c=>c.type === "text").map(c=>c.name).join(", "))
    .addField("Voice", message.guild.channels.filter(c=>c.type === "voice").map(c=>c.name).join(", "));
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'channels',
  description: 'Gives a list of channels in that server.',
  usage: 'channels',
  module: 'Other',
  permit: ' ',
  alias: ' '
}; 
