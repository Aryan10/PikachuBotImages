const settings = require("./config.json");
const server = require("./util/servers.json");
module.exports = message => {
  let client = message.client;
  let prefix = settings.prefix
  if(message.channel.type !== "dm"){ 
    if(server[message.guild.id] && server[message.guild.id].prefix !== ""){ 
      prefix = server[message.guild.id].prefix;
    }
  }
  if (message.author === client.user || message.author.bot) return;
  const reply = {
    "<@318700956244115457>": "Prefix here is `" + prefix + "`"
  }
  if (reply[message.content]) {
    message.channel.send(reply[message.content]);
  }
  if (message.channel.type === "dm") return message.reply(`Commands are disabled in DM for now.\nType \`${config.prefix}h\` in a server for help.`);
  if (message.channel.type === "group") return;
  
/* Pokémon Flame Yellow Exclusive */

if (message.channel.id === "323690694742900748") {
  message.react(message.guild.emojis.get("357348246881828864"));
  message.react(message.guild.emojis.get("357348246483370006"));
}

/* Main Code */
  if (!message.content.startsWith(settings.prefix)) return;
  let command = message.content.split(' ')[0].slice(settings.prefix.length);
  let args = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, args);
  }

};
