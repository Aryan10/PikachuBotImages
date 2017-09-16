const config = require("../config.json");

exports.run = (client, message, args) => {
  if (message.author.id !== config.botOwner) return message.reply("this command can be used by bot owner only.");
  let params = message.content.toLowerCase().split(" ").slice(1).join(" ");
  let guild = message.guild;
  let user = message.mentions.users.first();
  let member = message.mentions.members.first();
  if (params.includes("guildmemberadd")) {
    client.emit("guildMemberAdd", member);
  }else if (params.includes("guildmemberremove") || params.includes("kick")) {
    client.emit("guildMemberRemove", member)
  }else if (params.includes("guildbanadd") || params.includes("ban")) {
    client.emit("guildBanAdd", guild, user)
  }else if (params.includes("guildbanremove")) {
    client.emit("guildBanRemove", guild, user)
  }else {
    message.reply('Not supported event yet,\n\nSupported Events: `guildMemberAdd, guildMemberRemove, guildBanAdd, guildBanRemove');
}
  message.reply("Excuting event: "+ params);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['test', 'action'],
  permLevel: 0
}

exports.help = {
  name: 'execute', 
  description: 'Executes an event.', 
  usage: 'excute <event> [mention]', 
  module: 'Admin', 
  permit: 'Bot Owner Only', 
  alias: ' / test / action'
}
