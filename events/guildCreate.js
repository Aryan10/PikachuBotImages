const Discord = require("discord.js");
const config = require("../config.json")

module.exports = guild => {
  let client = guild.client;
  const bot = client.user;
  const botOwner = client.users.get(config.botOwner);
  botOwner.send(`Someone invited me in ${guild.name}, I will do my best there.`);
  const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setDescription(`Hello there, I am **${bot.username}**, a Discord.js Bot made by **${botOwner.tag}**.\n\nType \`${config.prefix}h\` for a list of commands.\n\nAdditionally, I will send cool welcome and goodbye messages in a channel with some words like "welcome", "greet", "leave" etc.\nBe sure to make one if you want embedded greet-and-bye messages.`);
  let ch = guild.defaultChannel;
  if (!ch) {
  ch = guild.channels.filter(c=>c.name.toLowerCase().includes("general")).first();
  if (!ch) return;
  }
  ch.send({embed});
  client.emit("ready");
}
