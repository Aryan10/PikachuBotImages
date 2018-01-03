const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let mention = message.mentions.users.first();
  let target = message.mentions.members.first();
  let params = message.content.split(" ").slice(1).join(" ");
  if (mention === undefined) {
    mention = message.author;
    target = message.member;
    if (message.guild.members.find("displayName", params)) {
      mention = message.guild.members.find("displayName", params).user;
      target = message.guild.members.find("displayName", params);
    }
  }
  let game;
  if (mention.presence.game === null) {
    game = "*Nothing*"
  }else {
    game = mention.presence.game.name;
  }
  let isBot = mention.bot;
  if (isBot) {
    isBot = "Yes";
  }else if (!isBot) {
    isBot = "No";
  };
  
  const embed = new Discord.RichEmbed()
    .setAuthor(mention.username, mention.avatatURL)
    .setThumbnail(mention.avatarURL)
    .setColor(4447003)
    .addField("User ID", mention.id)
    .addField("Name", `${target.displayName}`)
    .addField("Tag", mention.tag)
    .addField("Joined Server", target.joinedAt)
    .addField("Joined Discord", mention.createdAt)
    .addField("Status", `${capitalizeFirstLetter(mention.presence.status)}\n_Playing_ ${game}`)
    .addField("Bot", isBot)
    .addField(`Roles [${target.roles.size}]`, target.roles.map(r=>r.name).join(", "))
    .setFooter(client.user.username, client.user.avatarURL)
    .setTimestamp();
message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['uinfo'],
  permLevel: 0
};

exports.help = {
  name: 'userinfo',
  description: 'Shows info on a user.',
  usage: 'userinfo [user]',
  module: 'Other',
  permit: ' ',
  alias: '/ uinfo'
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
