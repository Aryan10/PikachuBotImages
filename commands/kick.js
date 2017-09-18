const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let member = message.mentions.members.first();
  let guild = message.guild;
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You don't have the permission to kick someone.");
  if (!member) return message.reply('Invalid command usage, you must mention the user to kick someone.');
  if (!member.kickable) return message.channel.send(`You cant kick **${member.user.username}**`);
  let reason = message.content.split(" ").slice(2).join(" ");
  if (!reason) reason = "Unknown!";
  member.send("You have been kicked from **" + guild.name + "**\n\n__Reason__: " + reason);
  member.kick(reason);
  // embed //
  const embed = new Discord.RichEmbed()
    .setColor(0x595959)
    .setDescription(`**${member.user.tag}** is kicked from **${guild.name}** by **${message.author.tag}**.\n__Reason__: ${reason}`)
    .setFooter("User Kicked")
    .setTimestamp();
  // end of embed //
  message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['k'],
  permLevel: 0
}

exports.help = {
  name: 'kick', 
  description: 'Kicks a mentioned user.', 
  usage: 'kick [mention] <reason>', 
  module: 'Admin', 
  permit: 'Requires Kick Member Server Permission', 
  alias: '/ k'
}
