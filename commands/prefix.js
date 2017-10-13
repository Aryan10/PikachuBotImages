const servers = require("../util/servers.json");
const { writeFile } = require("fs");
const config = require("../config.json");

exports.run = (client, message, args) => {
  const reply = (string) => message.reply(string);
  let oldPrefix = config.prefix;
  let serverData = servers[message.guild.id];
  if (serverData) {
    if (serverData.prefix !== "") oldPrefix = `"${serverData.prefix}" and the default prefix is "${config.prefix}".`;
  };
  let newPrefix = args[0].replace(/ /g, "");
  if (!args[0]) return reply("Prefix here is " + oldPrefix + "\n_Provide a new prefix to change it._");
  if (!message.member.hasPermission("MANAGE_GUILD") && newPrefix !== "") return reply("You don't have permission.");
  if (newPrefix.length > 3) return reply("You can't use a prefix longer than 3 digits.");
  serverData.prefix = newPrefix;
  writeFile('../util/servers.json', JSON.stringify(servers), (err) => {
    if (err) reply(err);
  });
  reply("Prefix changed to " + newPrefix + "\n_**Note:** You can still use default prefix._");
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['setprefix'],
  permLevel: 0
}

exports.help = {
  name: 'prefix', 
  description: 'Show or change custom prefix.', 
  usage: 'prefix or prefix <new prefix>', 
  module: 'Admin', 
  permit: 'Requires Manage Server Permission', 
  alias: ' '
}