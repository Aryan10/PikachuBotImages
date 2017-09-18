const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let member = message.mentions.members.first();
  let guild = message.guild;
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You don't have the permission to soft ban someone.");
  if (!member) {
    return message.reply('Invalid command usage, you must mention to soft ban someone.');
  }
  if (!member.kickable || !member.bannable) return message.channel.send(`You cant soft ban **${member.user.username}**.`);
  let sbreason = message.content.split(" ").slice(2).join(" ");
  if (!sbreason) sbreason = "Unknown!";
  member.send("You have been soft banned from **" + guild.name + "**\n\n__Reason__: " + ban);
  member.ban({days : 7, reason : sbreason}).then(m=>m.guild.unban(m.id));
  // embed //
  const embed = new Discord.RichEmbed()
    .setColor(0x595959)
    .setDescription(`**${member.user.tag}** is soft banned from **${guild.name}** by **${message.author.tag}**.\n__Reason__: ${sbreason}`)
    .setFooter("User Soft Ban")
    .setTimestamp();
  // end of embed //
  message.channel.send({embed})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sb'],
  permLevel: 0
}

exports.help = {
  name: 'softban', 
  description: 'Soft Bans a mentioned user.', 
  usage: 'softban [mention] <reason>', 
  module: 'Admin', 
  permit: 'Requires Ban Member Server Permission', 
  alias: '/ sb'
}
