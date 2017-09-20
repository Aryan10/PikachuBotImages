const config = require("../config.json");
const servers = require("../util/servers.json");

exports.run = (client, message, args) => { 
  // defines
  let guild = message.guild;
  let botOwner = client.users.get(config.botOwner);
  let registered = false;
  if (servers[guild.id]) registered = true;
  
  // returning default prefix
  if (!registered && !args[0]) return message.reply("Prefix of this server is `" + config.prefix + "`\nProvide the new prefix together with command to change it.");
  if (registered && !args[0]) return message.reply("Prefix of this server is `" + servers[guild.id].prefix + "`\nProvide the new prefix together with command to change it.");
  
  // owner check
  if (message.member !== guild.owner) return message.reply("Only the Server Owner can change server's prefix.");
  
  // defining code
  let format = `  "${guild.id}" : {\n  "prefix" : "${args[0]}",\n "desc" : "No Description provided."\n},`;
  if (registered) format = `"${guild.id}" : {\n  "prefix" : "${args[0]}",\n "desc" : "${servers[guild.id].desc}"\n},`;
  
  // sendIt()
  botOwner.send(`${guild.name} wants to change there prefix to ${args[0]}`);
  botOwner.send("```json\n\n" + format + "```");
  return message.reply("Request accepted. It will take some while to process the request.");
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['setprefix'],
  permLevel: 0
}

exports.help = {
  name: 'prefix', 
  description: 'Changes or shows the current prefix.', 
  usage: 'prefix or prefix +', 
  module: 'Admin', 
  permit: 'Server Owner Only', 
  alias: '/ setprefix'
}
