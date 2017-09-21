const Discord = require("discord.js");

exports.run = (client, message, args) => {
  // defines
  let member = message.member;
  let guild = message.guild;
  let bot = client.user;
  let mention = message.mentions.members.first();
  let muterolename = bot.username.toLowerCase() + "-mute";
  let muterole = guild.roles.find("name", muterolename);
  
  // perm check
  if (!member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS") || !member.hasPermission("MUTE_MEMBERS")) return message.reply("You don't have the permission to mute someone.");
  
  // mention check
  if (!mention) return message.reply("Please mention someone to use this command.");
  
  // mute role check
  if (!muterole) {
    guild.createRole({name: muterolename});
    guild.channels.forEach(c => c.overwritePermissions(guild.roles.find(r=>r.name === muterolename), {
      SEND_MESSAGES: false,
      ADD_REACTIONS: false,
      CREATE_INSTANT_INVITE: false,
      ATTACH_FILES: false,
      SEND_TTS_MESSAGES: false,
      EMBED_LINKS: false,
      CONNECT: false,
      SPEAK: false
    }));
  }
  
  // muting the mention and sending embed
  mention.addRole(muterole);
  const embed = new Discord.RichEmbed()
    .setAuthor(member.user.tag, member.user.avatarURL)
    .setTitle("User Muted")
    .setFooter("User Muted", bot.avatarURL)
    .setTimestamp()
    .setDescription("Muted user **" + mention.user.tag + "** from text and voice channels.");
  return message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'mute', 
  description: 'Mutes a mentioned user.', 
  usage: 'mute <mention>', 
  module: 'Admin', 
  permit: 'Requires Manage Roles Server Permission', 
  alias: ' '
}
