exports.run = (client, message, args) => {
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return message.reply("You don't have the permission to create instant invite.");
  message.guild.channels.get(message.channel.id).createInvite().then(invite => 
    message.channel.send("Invite Link of **" + message.guild.name + "**.\n\n" + invite.url));
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['inv'],
  permLevel: 0
}

exports.help = {
  name: 'serverinvite', 
  description: 'Sends the current server\'s invite url.',
  usage: 'serverinvite', 
  module: 'Admin', 
  permit: 'Create Instant Invite Server Permission', 
  alias: '/ inv'
}
