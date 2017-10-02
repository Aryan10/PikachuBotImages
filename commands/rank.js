const Discord = require("discord.js");
const points = require("../util/users.json");

exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if (!user) user = message.author;
  let data = points[user.id];
  if (user.bot) return;
  if (!data) return;
  const embed = new Discord.RichEmbed()
    .setAuthor(user.username, user.avatarURL)
    .setTitle("🗒 Rank")
    .setThumbnail(user.avatarURL)
    .addField("Global", `:star2: | Level: ${data.lv}\n:speech_balloon: | Total XP: ${data.xp}`)
    .addField("Server", "_Coming soon :)_")
    .setFooter("Level XP", client.user.avatarURL)
    .setTimestamp()
    .setColor(3447003);
  message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['xp'],
  permLevel: 0
}

exports.help = {
  name: 'rank', 
  description: 'Shows your or someone\'s global XP and Level.', 
  usage: 'rank @mention', 
  module: 'XP', 
  permit: ' ', 
  alias: ' '
}