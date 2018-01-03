const settings = require("./config.json");
const server = require("./util/servers.json");
const emoji = require("./util/emojis.json");
const {writeFile} = require("fs");
const Discord = require('discord.js');
const {RichEmbed} = require("discord.js");
const points = require("./util/users.json");
const client = new Discord.Client();



const users = require("/app/util/users.json");

module.exports = message => {
	
  let client = message.client;
  let prefix = [settings.prefix];

  if(message.channel.type !== "dm"){ 
    if(server[message.guild.id]){ 
      if (server[message.guild.id].prefix !== "") prefix = [server[message.guild.id].prefix, settings.prefix];
    }
  }
  
  for(const thisPrefix of prefix) {
    if(message.content.startsWith(thisPrefix)) prefix = thisPrefix;
  }
  if (message.author === client.user || message.author.bot) return;
  const reply = {
    "<prefix>": "Prefix here is `" + prefix[0] + "`",
  }
  if (reply[message.content.toLowerCase()]) {
    message.reply(reply[message.content]).then(m=>m.delete(7000));
  }
  
  const color = [0xF44336, 0xE91E63, 0x9C27B0, 0x673AB7, 0x3F51B5, 0x2196F3, 0x03A9F4, 0x00BCD4, 0x009688, 0x4CAF50, 0x8BC34A, 0xCDDC39, 0xFFEB3B, 0xFFC107, 0xFF9800, 0xFF5722, 0x795548, 0x9E9E9E, 0x607D8B, 0x000000, 0xFFFFFF]

var random = Math.floor(Math.random()*color.length);

let randomColor = color[random];
  
  if (message.channel.type === "dm" && settings.forwardBotDMsToOwner && !message.content.startsWith(prefix) && message.author.id !== settings.botOwner) {
    const embed = new RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setColor(3447003)
      .setTitle("DM from " + message.author.username)
      .setDescription(message.content)
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.id, client.user.avatarURL);
    client.users.get(settings.botOwner).send({embed});
  }

  if (message.channel.type === "dm" && !message.content.startsWith(prefix[0])) message.channel.send("`" + prefix[0] + "h` for help My owner is @Arun Kapil#2297 for more help join my server https://discord.gg/N7n2W2k");

  
/* Server Exclusive */

if (message.channel.type === "text") {
if (message.channel.id === "323690694742900748") {
  message.react(message.guild.emojis.get(emoji.fblike));
  message.react(message.guild.emojis.get(emoji.fblove));
}
  



  
/* Main Code */
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.toLowerCase().split(' ')[0].slice(prefix.length);
  let args = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  
  
  if (cmd && message.channel.type !== "text" && cmd.conf.guildOnly) return message.reply('This command is not avaliable in DMs. Please run this command in a server.');
  if (cmd) {
    let user = require("./util/users.json")[message.author.id];
    if (user) {
      if (user.blacklisted) return message.reply("You can't use commands anywhere because you are blacklisted.");
      if (server[message.guild.id]) {
        if (server[message.guild.id].blacklistedUsers[message.author.id]) return message.reply("You are blacklisted from this server.");
      }
    }
    if (perms < cmd.conf.permLevel) return;
    message.channel.startTyping();
    setTimeout(() => {
        message.channel.stopTyping();
        cmd.run(client, message, args, randomColor);
      }, settings.typingtime);
  }

};
};