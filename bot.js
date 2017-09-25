const settings = require("./config.json");
const server = require("./util/servers.json");
const emoji = require("./util/emojis.json");

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
  if (message.content.toLowerCase().includes(`discord.${`gg`||`io`||`li`||`me`}`)) {
    message.delete(300);
    return message.reply("Don't send invite links.").then(m=>m.delete(5000));
  }


  
/* Pokémon Flame Yellow Exclusive */

if (message.channel.id === "323690694742900748") {
  message.react(message.guild.emojis.get(emoji.fblike));
  message.react(message.guild.emojis.get(emoji.fblove));
}

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
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, args);
  }

};
