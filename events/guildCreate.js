const Discord = require("discord.js");
const config = require("../config.json");
const emoji = require("../util/emojis.json");

module.exports = guild => {
  let client = guild.client;
  let blobwave = client.emojis.get(emoji.blobwave).toString();
  const bot = client.user;
  const botOwner = client.channels.get(config.botlogchannel);
  botOwner.send(`Joined Server **${guild.name}**`);
  let msg = `${blobwave} Hey there! I am $**{bot.username}**.\nType \`${config.prefix}h\` for a list of commands.\nI am a bot that aims to increase user activity on your Discord Servers.`;
  
  const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setDescription(msg);
  let ch = guild.defaultChannel;
  if (!ch) {
  ch = guild.channels.filter(c=>c.name.toLowerCase().includes("general")).first();
  if (!ch) return;
  }
  ch.send({embed});
  client.emit("ready");
}