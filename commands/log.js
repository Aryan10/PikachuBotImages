const config = require("../config.json");

exports.run = (client, message, args) => {
  if (message.author.id !== config.botOwner) return message.reply("you are not my owner!");
  const log = message.content.split(" ").slice(1).join(" ");
  console.log(log);
  message.reply("Logged:\n```md\n\n" + log + "```");
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'log', 
  description: 'Logs something to bot's console.', 
  usage: 'log [message]', 
  module: 'Admin', 
  permit: 'Bot Owner Only', 
  alias: ' '
}
