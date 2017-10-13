const settings = require("./config.json");
const server = require("./util/servers.json");
const emoji = require("./util/emojis.json");
const {writeFile} = require("fs");
const {RichEmbed} = require("discord.js");
const points = require("./util/users.json");
const users = require("./util/users.json");

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
    "<@318700956244115457>": "Prefix here is `" + prefix[0] + "`",
  }
  if (reply[message.content.toLowerCase()]) {
    message.reply(reply[message.content]).then(m=>m.delete(7000));
  }
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


  
/* Server Exclusive */

if (message.channel.type === "text") {
if (message.channel.id === "323690694742900748") {
  message.react(message.guild.emojis.get(emoji.fblike));
  message.react(message.guild.emojis.get(emoji.fblove));
}
  
if (message.guild.id === "290162830009696257") {
      message.react('🇸');
      setTimeout(() => {
        message.react('🇵');
        setTimeout(() => {
          message.react('🇦');
          setTimeout(() => {
            message.react('🇲');
          }, 1000);
        }, 1000);
      }, 1000);
  const spyEmbed = new RichEmbed()
  .setAuthor(message.member.displayName, message.author.avatarURL)
  .setColor(3447003)
  .setThumbnail(message.author.avatarURL)
  .setFooter("<@" + message.author.id + ">", client.user.avatarURL)
  .setDescription(message.content);
  client.guilds.find("id", "336041241487736832").channels.find("name", message.channel.name).send({embed: spyEmbed});
    }
  
  if (message.guild.id === "336041241487736832" && message.channel.id !== "365764590409351180") {
    client.guilds.find("id", "290162830009696257").channels.find("name", message.channel.name).send(message.content);
  }

// level code //
  if (!points[message.author.id]) points[message.author.id] = {
    xp: 0,
    lv: 0,
    money: 0,
    dailyTimer: false,
    reps: 0,
    repTimer: false,
    blacklisted: false,
    registered: false,
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
  if (userData.money === undefined) userData.money = 0;
  if (!userData.xp) userData.xp = 0;
  if (require("./util/users.json")[message.author.id].blacklisted && message.author.id === settings.botOwner) !userData.blacklisted;
  writeFile("./util/points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
 /* writeFile("./util/users.json", JSON.strinfify(users), (err) => {
    if (err) console.error(err)
  }); */
}
  
  // server add
if (message.channel.type === "text") {
if (!server[message.guild.id]) {
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
    "channelUpdate": false,
    "guildBanAdd": false,
    "guildBanRemove": false,
    "userUpdate": false,
    "roleCreate": false,
    "roleDelete": false,
    "roleUpdate": false,
    "logChannels": [],
    "disabledCmds": [],
    "disabledMdls": [],
    "disabledAllMdls": false,
    "blacklistedUsers": [],
    "badWords": []
  }
  writeFile('./util/servers.json', JSON.stringify(server), (err) => {
    if (err) console.log(err);
  });
}
};
  
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
  if (!cmd) return message.reply("Command not found!");
  if (!cmd.conf.enabled) return message.reply("Command is disabled!");
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
        cmd.run(client, message, args);
      }, settings.typingtime);
  }

};
