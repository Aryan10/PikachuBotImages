const config = require ('../config.json');
const servers = require("../util/servers.json");
const users = require("../util/users.json");
const db = require("../util/pikabot.json");
const { RichEmbed } = require("discord.js");
const { writeFile } = require("fs");

exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if (!user) return message.reply("Mention someone to use this command.");
  let money = args[0];
  if (!money) return message.reply("Specify money to give.");
  if (isNaN(money)) return message.reply("Specify numbers only.");
  let userData = users[message.author.id];
  let targetData = users[user.id];
  if (!targetData || !userData) return;
  if (money > userData.money) return message.reply("You don't have that much money.");
  userData.money -= money;
  targetData.money += parseInt(money);
  message.reply("Transferred :thumbsup:");
  writeFile("../util/users.json", JSON.stringify(users), (err) => {
    if (err) console.error(err)
  });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'give', 
  description: 'Transfer someone your money.', 
  usage: 'give <amount> @mention', 
  module: 'Gambling', 
  permit: ' ', 
  alias: ' '
}