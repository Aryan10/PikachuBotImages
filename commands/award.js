const config = require ('../config.json');
const servers = require("../util/servers.json");
const users = require("../util/users.json");
const { RichEmbed } = require("discord.js");
const { writeFile } = require("fs");


exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if (message.author.id !== config.botOwner) return message.reply("you are not my owner.");
  if (!user) user = message.author;
  let money = args[0];
  if (!money) money = 0;
  users[user.id].money += parseInt(money);
  message.channel.send(`Awarded ${money} to ${user.tag}!`);
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
  name: 'award', 
  description: 'Award someone money.', 
  usage: 'award <money> @mention', 
  module: 'Gambling', 
  permit: 'Bot Owner Only', 
  alias: ' '
}