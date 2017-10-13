exports.run = (client, message, args) => {
  // defines
  let member = message.member;
  let guild = message.guild;
  let params = message.content.split(' ').slice(1).join(" ");
  
  // checks and more defining vc
  if (!args[0] && !member.voiceChannel) return message.reply("Specify or be in a voice channel to make me join one.");
  let vc;
  if (!args[0]) vc = guild.channels.get(member.voiceChannelID);
  if (!member.voiceChannel) {
    vc = guild.channels.find(c=>c.name.toLowerCase() === params);
    if (!vc) return message.reply("Can't find voice channel.");
  }
  
  // joining the vc
  vc.join();
  message.reply(`Joined Voice Channel: **${vc.name}**`);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['joinvc'],
  permLevel: 0
}

exports.help = {
  name: 'vcjoin', 
  description: 'Joins a specified or user\'s voice channel.', 
  usage: 'vcjoin or vcjoin <channel name>', 
  module: 'Music', 
  permit: ' ', 
  alias: ' '
}