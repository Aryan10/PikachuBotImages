const config = require ('../config.json');
const servers = require("../util/servers.json");
const users = require("../util/users.json");
const { RichEmbed } = require("discord.js");
const { writeFile } = require("fs");


exports.run = (client, message, args) => {
  if (!args[0]) return message.reply("Specify amount that you want to bet.");
  if (!args[1]) return message.reply("Pick heads or tails after amount.");
  if (isNaN(args[0])) return message.reply("Specify numbers only.");
  let choice = args[1].toLowerCase();
  if (args[0] > users[message.author.id].money) return message.reply("You don't have that much money.");
  const choices = ["Heads", "Tails"];
  var randomInt = Math.floor(Math.random() * choices.length);
  let botChoice = choices[randomInt];
  let userChoice = "";
  if (choice.startsWith("t")) userChoice = "Tails";
  if (choice.startsWith("h")) userChoice = "Heads";
  if (userChoice === "") return message.reply("Invalid Choice!");
  let result = 2;
  let stringResult = "Won";
  if (botChoice !== userChoice) {
    stringResult = "Lost";
    result = -1;
  }
  let wonAmount = args[0] * result;
  let displayAmount = wonAmount;
  if (displayAmount < 0) displayAmount = 0;
  message.channel.send(`You got ${botChoice}.\nYou won ${displayAmount}!`, {files: ["./images/coins/" + botChoice.toLowerCase() + ".png"]});
  users[message.author.id].money += wonAmount;
  writeFile("../util/users.json", JSON.stringify(users), (err) => {
    if (err) console.error(err)
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bf'],
  permLevel: 0
}

exports.help = {
  name: 'betflip', 
  description: 'Bet money on coin flip.', 
  usage: 'betflip <amount> <h or t>', 
  module: 'Gambling', 
  permit: ' ', 
  alias: ' '
}