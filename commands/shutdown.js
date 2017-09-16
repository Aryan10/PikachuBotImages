const config = require("../config.json");

exports.run = (client, message, args) => {
  if (message.author.id !== config.botOwner) return message.reply("this command can be used by bot owner only.");
  message.reply("Shutting down...");
  process.exit()
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'shutdown', 
  description: 'Shut downs the bot.', 
  usage: 'shutdown', 
  module: 'Admin', 
  permit: 'Bot Owner Only', 
  alias: ' '
}
