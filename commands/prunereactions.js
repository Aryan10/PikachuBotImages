exports.run = (client, message, args) => {
  if (!message.guild.members.me.hasPermission("MANAGE_MESSAGES")) return message.reply("I don't have the permission to clear reactions from messages.");
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the permission to clear reactions from messages.");
  if (!parseInt(args[0],10)) return message.reply(`Please provide a number of messages to clean reactions from!`);
  message.channel.messages.fetch({limit:parseInt(args[0],10)}).then(msg => {
    message.channel.send("Clearning reactions from this channel for " + args[0] + "messages...");
    msg.forEach(mesg => mesg.clearReactions());
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cr'],
  permLevel: 0
}

exports.help = {
  name: 'prunereactions', 
  description: 'Clears reactions from X number of messages', 
  usage: 'prunereactions X', 
  module: 'Admin', 
  permit: 'Requires Manage Messages', 
  alias: '/ cr'
}
