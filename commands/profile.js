const Discord = require("discord.js");
const points = require("/app/util/users.json");

exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if (!user) user = message.author;
  let data = points[user.id];
  if (user.bot) return;
  if (!data) return;
  const embed = new Discord.RichEmbed()
    .setAuthor(user.username, user.avatarURL)
    .setTitle("Profile👤")
    .setThumbnail(user.avatarURL)
    .addField("Rank", `:star2: | Level: ${data.lv}\n:speech_balloon: | Total XP: ${data.xp}`)
    .addField("📋stats",`🌀 | Total Shiny: ${data.shiny}\n👮Reputation: ${data.reps}`)
.addField("Pokecoin",`<:Pokecoin:288630946171846656>: ${data.money}`)
    .setFooter("Profile👤", client.user.avatarURL)
    .setTimestamp()
    .setColor(3447003);
  message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'profile', 
  description: 'Shows your or someone full profile', 
  usage: 'profile @mention', 
  module: 'XP', 
  permit: ' ', 
  alias: ' '
}