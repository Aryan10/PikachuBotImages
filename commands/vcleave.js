exports.run = (client, message, args) => {
  const vc = client.user.voiceChannel;
  if (!vc) return message.reply("I am not in a voice channel.")
  vc.leave();
  message.reply("Left Voice Channel: **" + vc.name + "**");
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['leavevc'],
  permLevel: 0
}

exports.help = {
  name: 'vcleave', 
  description: 'Leaves the joined voice channel.', 
  usage: 'vcleave', 
  module: 'Music', 
  permit: ' ', 
  alias: ' '
}