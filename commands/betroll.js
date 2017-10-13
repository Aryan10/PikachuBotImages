const config = require ('../config.json');
const servers = require("../util/servers.json");
const users = require("../util/users.json");
const { RichEmbed} = require("discord.js");
const {writeFile} = require("fs");


exports.run = (client, message, args) => {
  if (!args[0]) return message.reply("Specify amount that you want to bet.");
  if (isNaN(args[0])) return message.reply("Specify numbers only.");
  if (args[0] > users[message.author.id].money) return message.reply("You don't have that much money.");
  const br = Math.floor(Math.random() * 100);
  let result = -1;
  if (br > 50) result = 2;
  if (br > 66) result = 3;
  if (br > 90) result = 4;
  if (br == 100) result = 5;
  let wonAmount = args[0] * result;
  let displayAmount = wonAmount;
  if (displayAmount < 0) displayAmount = 0;
  message.channel.send(`You rolled ${br}.\nYou won ${displayAmount}!`);
  users[message.author.id].money += wonAmount;
  writeFile("../util/users.json", JSON.stringify(users), (err) => {
    if (err) console.error(err)
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['br'],
  permLevel: 0
}

exports.help = {
  name: 'betroll', 
  description: 'Bet money on roll.', 
  usage: 'betroll <amount>', 
  module: 'Gambling', 
  permit: ' ', 
  alias: ' '
}