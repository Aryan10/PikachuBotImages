exports.run = (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the permission to clear reactions from messages.");
  if (!parseInt(args[0],10)) return message.reply(`Please provide a number of messages to clean reactions from!`);
  message.channel.fetchMessages({limit:parseInt(args[0],10)}).then(msg => {
    message.channel.send(":warning: Cleared reactions from this channel for " + args[0] + " messages.").then(m=>m.delete(5000));
    msg.forEach(mesg => mesg.clearReactions());
  });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
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
