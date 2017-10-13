const db = require("../util/pikabot.json");
const servers = require("../util/servers.json");
const users = require("../util/users.json");
const { RichEmbed } = require('discord.js');
const { writeFile } = require("fs");

exports.run = (client, message, args) => {
  let user = users[message.author.id];
  if (user.registered) return message.reply("You are already registered.");
  let curr = db.defaultCurrencySign;
  if (message.channel.type !== "dm") {
    let serverData = servers[message.guild.id];
    if (servers) {
      if (servers.currency !== "") curr = servers.currency;
    }
  }
  user.registered = true;
  user.money += 100;
  message.reply("Registered " + message.author.tag + " and added 100 " + curr + " to account.");
  writeFile('../util/users.json', JSON.stringify(users), (err) => {
    if (err) console.error(err);
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'register', 
  description: 'Register and get free money.', 
  usage: 'register', 
  module: 'Gambling', 
  permit: ' ', 
  alias: ' '
}