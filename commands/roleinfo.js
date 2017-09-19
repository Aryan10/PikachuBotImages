const Discord = require("discord.js");
const config = require("../config.json");
exports.run = (client, message, args) => {
  const guild = message.guild;
  let params = message.content.split(" ").slice(1).join(" ");
  let role = message.mentions.roles.first();
  if (role === undefined) {
    role = guild.roles.find("name", params);
    if (!role) return message.reply("Please specify a valid role name or mention a role.\n_Type `" + config.prefix + "roles` for a list of roles in this server._");
  }
  let hoist = "null";
  if (role.hoist) {
    hoist = "Yes";
  }else {
    hoist = "No";
  }
  let mention = "null";
  if (role.mentionable) {
    mention = "Yes";
  }else {
    mention = "No";
  }
  let botrole = "null";
  if (role.managed) {
    botrole = "Yes";
  }else {
    botrole = "No";
  }
  let m_map = role.members.map(m=>m.displayName).join(", ");
  if (m_map === "") {
    m_map = "_None_";
  }
  if (m_map.length > 1999) m_map = "Too much members, can't display.";
  
  const embed = new Discord.RichEmbed()
    .setAuthor(role.name, guild.iconURL)
    .setColor(role.hexColor)
    .addField("Role ID", role.id)
    .addField("Colour", role.hexColor.toUpperCase())
    .addField("Visible (Hoist)", hoist)
    .addField("Mentionable", mention)
    .addField("Bot Role", botrole)
    .addField("Members", m_map)
    .addField("Created At", role.createdAt)
    .setFooter(client.user.username, client.user.avatarURL)
    .setTimestamp();
  message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rinfo'],
  permLevel: 0
}

exports.help = {
  name: 'roleinfo', 
  description: 'Shows info on a specified role.', 
  usage: 'roleinfo <role mention or role name>', 
  module: 'Other', 
  permit: ' ', 
  alias: '/ rinfo'
}
