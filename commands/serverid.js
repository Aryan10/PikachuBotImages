const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (client, message, args) => {
  const channel = message.guild;
  const embed = new Discord.RichEmbed()
    .setColor(0x00FF00)
    .setDescription(`:id: of this server is \`${channel.id}\``)
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sid'],
  permLevel: 0
};

exports.help = {
  name: 'serverid',
  description: 'Shows the current server\'s id.',
  usage: 'channelid',
  module: 'Other',
  permit: ' ',
  alias: '/ sid'
}; 

