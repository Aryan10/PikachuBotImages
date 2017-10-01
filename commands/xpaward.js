const config = require("../config.json");
const users = require("../util/users.json");
const fs = require("fs");

exports.run = (client, message, args) => {
  const author = message.author;
  if (author.id !== config.botOwner) return message.reply("This command is Bot Owner Only!");
  let mention = message.mentions.users.first();
  if (!mention) return message.reply("Mention someone to award.");
  let newxp = args[1];
  if (!newxp) message.reply("Provide xp to award.");
  let data = users[author.id];
  if (!data) return message.reply(mention.tag + " doesn't have any database info.");
  data.xp += newxp;
  fs.writeFile('../util/users.json', JSON.stringify(data), (err) => {
    if (err) console.error(err);
  });
  message.reply("Added " + newxp + " xp to " + mention.tag + " :thumbsup:");
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'xpaward', 
  description: 'Awards XP to a mentioned user.', 
  usage: 'xpaward @mention [xp to award]', 
  module: 'XP', 
  permit: 'Bot Owner Only', 
  alias: ' '
}