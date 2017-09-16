const config = require("../config.json");

exports.run = (client, message, args) => {
  if (message.author.id !== config.botOwner) return message.reply("this command can be used by bot owner only.");
  let params = message.content.toLowerCase().split(" ").slice(1);
  let guild = message.guild;
  let user = message.mentions.users.first();
  let member = message.mentions.members.first();
  if (params === "guildmemberadd") {
    client.emit("guildMemberAdd", member);
  }else if (params === "guildmemberremove" || params === "kick") {
    client.emit("guildMemberRemove", member)
  }else if (params === "guildbanadd" || params === "ban") {
    client.emit("guildBanAdd", guild, user)
  }else if (params === "guildbanremove") {
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
  name: 'excute', 
  description: 'Excutes an event.', 
  usage: 'excute <event> [mention]', 
  module: 'Admin', 
  permit: 'Bot Owner Only', 
  alias: ' / test / action'
}
