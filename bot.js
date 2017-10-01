if (!server[message.guild.id] {
  server[message.guild.id] = {
    "prefix" : "",
    "desc" : "",
    "muteRole": "",
    "autoRole": "",
    "selfAssignRoles": [],
    "joinChanels": [],
    "joinType": "",
    "joinMsg": "",
    "joinDM": false,
    "byeChannels": [],
    "byeType": "",
    "byeMsg": "",
    "byeDM": false,
    "currency": "",
    "xpSystem": true,
    "lvlUpMsg": "",
    "channelCreate": false,
    "channelDelete": false,
    "chanconst settings = require("./config.json");
const server = require("./util/servers.json");
const emoji = require("./util/emojis.json");
const fs = require("fs");
const points = require("./util/users.json");

module.exports = message => {
  let client = message.client;
  let prefix = [settings.prefix];
  if(message.channel.type !== "dm"){ 
    if(server[message.guild.id]){ 
      prefix = [settings.prefix, server[message.guild.id].prefix];
    }
  }
  for(const thisPrefix of prefix) {
    if(message.content.startsWith(thisPrefix)) prefix = thisPrefix;
  }
  if (message.author === client.user || message.author.bot) return;
  const reply = {
    "<@318700956244115457>": "Prefix here is `" + prefix[0] + "`",
  }
  if (reply[message.content.toLowerCase()]) {
    message.reply(reply[message.content]).then(m=>m.delete(7000));
  }
  let msginc = (string) => message.content.toLowerCase().includes("discord." + string + "/");
  if (msginc("gg") || msginc("io") || msginc("me") || msginc("li")) {
    return message.reply("Don't send invite links.").then(m=>m.delete(5000));
  }


  
/* Pokémon Flame Yellow Exclusive */

if (message.channel.id === "323690694742900748") {
  message.react(message.guild.emojis.get(emoji.fblike));
  message.react(message.guild.emojis.get(emoji.fblove));
}

// level code //
  if (!points[message.author.id]) points[message.author.id] = {
    xp: 0,
    lv: 0,
    blacklisted: false,
    money: 0
  };
  let userData = points[message.author.id];
  userData.xp++;
  let curLevel = Math.floor(0.1 * Math.sqrt(userData.xp));
  if (curLevel > userData.lv) {
    // Level up!
    userData.lv = curLevel;
    let msg = `Congratulations, you just leveled up to **Level ${curLevel}**.`;
    if (server[message.guild.id]) {
      if (server[message.guild.id].lvlUpMsg !== "") msg = server[message.guild.id].lvlUpMsg;
    }
    message.reply(msg);
  }
  fs.writeFile("./util/users.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
  
  
  
/* Main Code */
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
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
    setTimeout(function(){
        message.channel.stopTyping();
        cmd.run(client, message, args);
      }, settings.typingtime);
  }

};
