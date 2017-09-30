exports.run = (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You don't have the permission to use this command.");
  const members = message.guild.members.filter(member => member.user.presence.game && /(discord\.(gg|io|me|li)\/.+|discordapp\.com\/invite\/.+)/i.test(member.user.presence.game.name));
  if (members === "") return message.channel.send('No invite links found.');
  message.channel.send("**List Of People with Invite Link in there playing field.**" + members.map(member => `${member.tag} (${member.user.presence.game.name})`).join('\n')); 
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ads', 'checkads'],
  permLevel: 0
}

exports.help = {
  name: 'adcheck', 
  description: 'Shows a list of users with invite links in game.', 
  usage: 'adcheck', 
  module: 'Admin', 
  permit: 'Requires Manage Server Permission', 
  alias: ' '
}