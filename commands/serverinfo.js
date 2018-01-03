const config = require("../config.json");
const servers = require("../util/servers.json");
const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let guild = message.guild;
  let params = message.content.split(" ").slice(1).join(" ");

  if (message.author.id === config.botOwner && client.guilds.find("name", params)) {
    guild = client.guilds.find("name", params);
}

  /*let ch;
  if (!guild.defaultChannel) {
    ch = "_None_";
  }else {
    ch = guild.defaultChannel.name;
  }*/

  let verlvltxt = message.guild.verificationLevel;
  if (verlvltxt == 0) verlvltxt = "None";
  if (verlvltxt == 1) verlvltxt = "Must have verified email on the Discord account.";
  if (verlvltxt == 2) verlvltxt = "Must be registered on Discord for longer than 5 mins.";
  if (verlvltxt == 3) verlvltxt = "Must be member of this server for longer than 10 mins.";
  if (verlvltxt == 4) verlvltxt = "Must have a phone verified on their discord account.";

  const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(guild.name, guild.iconURL)
    .setThumbnail(guild.iconURL)
    .setFooter(`Type \`${config.prefix}roles\` to get a full list of roles.`)
    .addField("Server ID", guild.id)
    .addField("Server Owner", guild.owner.user.tag)
    .addField("Members", `${guild.memberCount} Total | ${guild.members.filter(m=>m.user.bot).size} Bots\n${guild.members.filter(m => m.presence.status === 'online').size} Online | ${guild.members.filter(m => m.presence.status === 'idle').size} Idle | ${guild.members.filter(m => m.presence.status === 'dnd').size} Do Not Disturb`)
    .addField("Channels", `${guild.channels.size} Total\n${guild.channels.filter(c=>c.type === "text").size} Text | ${guild.channels.filter(c=>c.type === "voice").size} Voice`)
    .addField("Roles", `${guild.roles.size} Total`)
    .addField("Region", capitalizeFirstLetter(guild.region))
    .addField("Emojis", `${guild.emojis.size} Total`)
    .addField("Verification Level", verlvltxt)
    .addField("Created On", guild.createdAt)
    .setFooter(client.user.username, client.user.avatarURL)
    .setTimestamp();
  
  if (servers[guild.id] !== undefined && servers[guild.id].desc !== "")  embed.setDescription(servers[guild.id].desc);
  else embed.setDescription("No Description provided.\nUse `" + config.prefix + "setservertopic` command to set one.");
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
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
