const users = require("../util/users.json");
const servers = require("../util/servers.json");
const db = require("../util/pikabot.json");
const config = require("../config.json");
const {RichEmbed} = require("discord.js");

exports.run = (client, message, args) => {
  const argss = message.content.split(" ").slice(1).join(" ");
  const guild = message.guild;
  let user = message.mentions.users.first();
  if (!user && args[0]) user = client.users.find("tag", argss);
  if (!user && args[0]) user = client.users.find("username", argss);
  if (!user && args[0]) user = guild.members.find("displayName", argss);
  if (!user) user = message.author;
  let userData = require("../util/users.json")[user.id];
  let currency = db.defaultCurrencySign;
  if (servers[guild.id]) {
    if (servers[guild.id].currency !== "") currency = servers[guild.id].currency
  }
  if (!userData.registered) message.channel.send("You are not registered, register to get free 100" + currency + ", register now by typing `" + config.prefix + "register`"); 
  if (user.bot) return;
  const embed = new RichEmbed()
    .setDescription(`**${user.tag}** has ${userData.money} ${currency}${db.debugmsg}`)
    .setColor(3447003);
  message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['currency', '$', 'money'],
  permLevel: 0
}

exports.help = {
  name: 'cash', 
  description: 'Check how much cash a person have.', 
  usage: 'cash or cash <mention>', 
  module: 'Gambling', 
  permit: ' ', 
  alias: ' '
}