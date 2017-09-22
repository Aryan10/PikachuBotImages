const config = require("../config.json");
const servers = require("../util/servers.json");

exports.run = (client, message, args) => { 
  // defines
  return message.reply("It's temporary disabled for some database updates.");
  let params = args.join(" ");
  let guild = message.guild;
  let botOwner = client.users.get(config.botOwner);
  let registered = false;
  let msg = "Description of this server is\n\n" + servers[guild.id].desc + "\n\nProvide the new description together with command to change it.";
  
  // check changes
  if (servers[guild.id]) {
    registered = true;
    msg = "No Description provided.\nProvide the new description together with command to change it.";
  }
  
  // returning default prefix
  if (!args[0]) return message.reply(msg);
  
  // owner check
  if (message.member !== guild.owner) return message.reply("Only the Server Owner can change server's description.");
  
  // defining code
  let format = `  "${guild.id}" : {\n  "prefix" : "+",\n "desc" : "${params}"\n},`;
  if (registered) format = `"${guild.id}" : {\n    "prefix" : "${servers[guild.id].prefix}",\n    "desc" : "${params}"\n},`;
  
  // sendIt()
  botOwner.send(`${guild.name} wants to change there description to\n\n${params}`);
  botOwner.send("```json\n\n" + format + "```");
  return message.reply("Request accepted. It will take some while to process the request.");
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['setserverdesc'],
  permLevel: 0
}

exports.help = {
  name: 'setservertopic', 
  description: 'Changes or shows the current server description.', 
  usage: 'setservertopic [new desc]', 
  module: 'Admin', 
  permit: 'Server Owner Only', 
  alias: '/ setserverdesc'
}
