
const Discord = require("discord.js");
const config = require("../config.json")
const snekfetch = require('snekfetch')

module.exports = guild => {
  
 

  let client = guild.client;
  const bot = client.user;
  const botOwner = client.users.get(config.botOwner);
  botOwner.send(`Someone invited me in ${guild.name}, I will do my best there.`);
  const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setDescription(`Hello there, I am **${bot.username}**, a Discord.js Bot made by **${botOwner.tag}**.\n\nType \`${config.prefix}h\` for a list of commands.\n\nAdditionally, I will send cool welcome and goodbye messages in a channel with some words like "welcome", "greet", "leave" etc.\nBe sure to make one if you want embedded greet-and-bye messages. \n my official server for more help https://discord.gg/N7n2W2k`);
  let ch = guild.defaultChannel;
  if (!ch) {
  ch = guild.channels.filter(c=>c.name.toLowerCase().includes("general")).first();
  if (!ch) return;
  }
  ch.send({embed});
  
  snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
   .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1ODc4NTAyMzI4Njk2ODMyMyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTA3MDI3Njc3fQ.RqxVecke_uzCccCZfMR4ChqvkLMxMQVUcGZho2PBIpc')
  .send({ server_count: client.guilds.size })
  .then(() => console.log('Updated discordbots.org stats.'))
  .catch(err => console.error(`Whoops something went wrong: ${err.body}`));
  
  
  const str = `Guild Joined: ${guild.name}\nGuild ID: ${guild.id}\nTotal Members: ${guild.memberCount}`;
  const embed2 = new Discord.RichEmbed()
  .setAuthor(bot.username, bot.avatarURL)
  .setTitle("New Server Joined")
  .setColor(0xFF0000)
  .setDescription(str)
  .setFooter("Guild Join")
  .setTimestamp();
  
  return client.channels.get(config.botlogchannel).send({embed: embed2});
  
  
  
  
  
  
};