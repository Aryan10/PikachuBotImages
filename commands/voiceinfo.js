const { RichEmbed } = require("discord.js");

exports.run = (client, message, args) => {
  let argss = message.content.split(" ").slice(1).join(" ");
  let vc = message.guild.channels.find("name", argss);
  if (!vc) return message.reply("Can't find that channel.");
  if (vc.type !== "voice") return message.reply("This command is for voice channels only.");
  var uLimit = vc.userLimit;
  if (uLimit == 0) uLimit = "Unlimited";
  let joinedMembers = vc.members.map(m=>m.displayName).join(", ");
  if (joinedMembers === "") joinedMembers = "*No members.*";
  if (joinedMembers.length > 1990) joinedMembers = "*Can't display.*";
  const embed = new RichEmbed()
    .setTitle(vc.name)
    .addField("Channel ID", vc.id)
    .addField("Created At", vc.createdAt)
    .addField("Bit Rate", vc.bitrate)
    .addField("User Limit", uLimit)
    .addField("Members", vc.members.size)
    .addField("Joined Members", joinedMembers)
    .setColor(0x4444FF);
  message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['vcinfo'],
  permLevel: 0
}

exports.help = {
  name: 'voiceinfo', 
  description: 'Shows info on a voice channel.', 
  usage: 'voiceinfo <channel name>', 
  module: 'Music', 
  permit: ' ', 
  alias: ' '
}