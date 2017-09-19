const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (client, message, args) => {
  let ch = message.mentions.channels.first()
  if (!ch) ch = message.guild.channels.find("name", args[0]);
  if (!ch) ch = message.channel;
  let topic = ch.topic;
  if (!topic) topic = "No topic set.";

  const embed = new Discord.RichEmbed()
    .setTitle(ch.name)
    .setDescription(topic)
    .setColor(4447003)
    .setFooter(`Type ${config.prefix}channels to get a full list of channels of ${ch.guild.name}!`)
    .addField("Channel ID", ch.id)
    .addField("Created At", ch.createdAt)
    .addField("Users", ch.members.size);
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cinfo'],
  permLevel: 0
};

exports.help = {
  name: 'channelinfo',
  description: 'Shows info on a channel.',
  usage: 'cinfo [channel]',
  module: 'Other',
  permit: ' ',
  alias: '/ cinfo'
};
