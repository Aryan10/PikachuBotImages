const { RichEmbed } = require("discord.js");

exports.run = (client, message, args) => {
  let msg = message.content.split(" ").slice(2).join(" ");
  let user = message.mentions.users.first();
  let mod = message.author;
  if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You don't have permission!");
  if (!user) return message.reply("Mention someone to use this command.");
  if (!msg) msg = "Not specified";
  const embed = new RichEmbed()
    .setTitle("Warning")
    .setColor(0x00FF00)
    .addField("Server", message.guild.name)
    .addField("Moderator", mod.tag)
    .addField("Reason", msg)
    .setFooter(user.tag, client.user.avatarURL)
    .setTimestamp();
  user.send({embed});
  message.channel.send(`${user.tag} is warned by ${mod.tag} for Reason:\n${msg}`);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'warn', 
  description: 'Warns a mentioned user.', 
  usage: 'warn [mention] <reason>', 
  module: 'Admin', 
  permit: 'Requires Manage Server Permission', 
  alias: ' '
}