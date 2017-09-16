exports.run = (client, message, args) => {
const config = require("../config.json");
let guild = message.guild;
let params = message.content.split(" ").slice(1).join(" ");
if (message.author.id === config.botOwner && client.guilds.find("name", params)) {
guild = client.guilds.find("name", params);
}
let ch;
if (!guild.defaultChannel) {
ch = "_None_";
}else {
ch = guild.defaultChannel.name;
}
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()
.setColor(3447003)
.setAuthor(guild.name, guild.iconURL)
.setThumbnail(guild.iconURL)
.setFooter(`Type \`${config.prefix}roles\` to get a full list of roles.`)
.addField("Server ID", guild.id)
.addField("Server Owner", guild.owner.displayName)
.addField("Members", `${guild.memberCount} Total | ${guild.members.filter(m=>m.user.bot).size} Bots\n${guild.members.filter(m => m.presence.status === 'online').size} Online | ${guild.members.filter(m => m.presence.status === 'idle').size} Idle | ${guild.members.filter(m => m.presence.status === 'dnd').size} Do Not Disturb`)
.addField("Channels", `${guild.channels.size} Total\n${guild.channels.filter(c=>c.type === "text").size} Text | ${guild.channels.filter(c=>c.type === "voice").size} Voice\n__Default Channel__: **${guild.defaultChannel.name}**`)
.addField("Roles", `${guild.roles.size} Total`)
.addField("Region", capitalizeFirstLetter(guild.region))
.addField("Emojis", `${guild.emojis.size} Total`)
.addField("Created On", guild.createdAt)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sinfo', 'ginfo', 'guildinfo'],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: 'Shows info on server.',
  usage: 'serverinfo',
  module: 'Other',
  permit: ' ',
  alias: '/ sinfo / guildinfo / ginfo'
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
