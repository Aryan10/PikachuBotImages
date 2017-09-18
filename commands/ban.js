const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let member = message.mentions.members.first();
  let guild = message.guild;
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You don't have the permission to ban someone.");
  if (!member) {
    return message.reply('Invalid command usage, you must mention to ban someone.');
  }
  if (!member.kickable || !member.bannable) return message.channel.send(`You cant ban **${member.user.username}**.`);
  let banreason = message.content.split(" ").slice(2).join(" ");
  if (!banreason) banreason = "Unknown!";
  member.send("You have been banned from **" + guild.name + "**\n\n__Reason__: " + ban);
  member.ban({days : 7, reason : banreason});
  // embed //
  const embed = new Discord.RichEmbed()
    .setColor(0x595959)
    .setDescription(`**${member.user.tag}** is banned from **${guild.name}** by **${message.author.tag}**.\n__Reason__: ${banreason}`)
    .setFooter("User Ban")
    .setTimestamp();
  // end of embed //
  message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['b'],
  permLevel: 0
}

exports.help = {
  name: 'ban', 
  description: 'Ban a mentioned user.', 
  usage: 'ban [mention] <reason>', 
  module: 'Admin', 
  permit: 'Requires Ban Member Server Permission', 
  alias: '/ b'
}
