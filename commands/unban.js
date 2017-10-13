const Discord = require("discord.js");

exports.run = (client, message, args) => {
  return;
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You don't have the permission to unban someone.");
  let guild = message.guild;
  let argss;
  let memberToUnban;
  let bans = guild.fetchBans;
  let member = client.users.find("tag", argss);
  if (member) {
    if (!bans.get(member.id)) return message.reply("That member isn't banned."); 
    memberToUnban = member.id;
  }else if (!bans.get(argss)) {
    return message.reply("That member isn't banned.");
    memberToUnban = member;
  }else {
    return message.reply("Can't find user.");
  }
  
  // embed //
  member = bans.get(memberToUnban);
  const embed = new Discord.RichEmbed()
    .setColor(0x595959)
    .setDescription(`**${member.user.tag}** is unbanned from **${guild.name}** by **${message.author.tag}**.`)
    .setFooter("User UnBan")
    .setTimestamp();
  // end of embed //
  message.channel.send({embed});
  
  // unban //
  memberToUnban.unban();
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ub'],
  permLevel: 0
}

exports.help = {
  name: 'unban', 
  description: 'Unbans a specified user by id or tag.', 
  usage: 'unban [user id or tag]', 
  module: 'Admin', 
  permit: 'Requires Ban Member Server Permission', 
  alias: '/ ub'
}
