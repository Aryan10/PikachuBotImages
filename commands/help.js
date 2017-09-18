const Discord = require("discord.js");
const settings = require('../config.json');
const config = require('../config.json');
exports.run = (client, message, args) => {
  if (!args[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    
    /* new code starts here, delete this part if not works, replace with original if not works */
    const embed = new Discord.RichEmbed()
      .setAuthor("List Of Modules & there Commands", client.user.avatarURL)
      .addField("Admin", `\`\`\`${client.commands.filter(c=>c.help.module === "Admin").map(cmd=>`${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}\n\`\`\``)
      .addField("Fun", `\`\`\`${client.commands.filter(c=>c.help.module === "Fun").map(cmd=>`${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}\n\`\`\``)
      .addField("Help", `\`\`\`${client.commands.filter(c=>c.help.module === "Help").map(cmd=>`${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}\n\`\`\``)
      .addField("Utility", `\`\`\`${client.commands.filter(c=>c.help.module === "Other").map(cmd=>`${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}\n\`\`\``)
      .addField("Pokemon", `\`\`\`${client.commands.filter(c=>c.help.module === "Pokemon").map(cmd=>`${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}\n\`\`\``)
      .addField("Pokedex", `\`\`\`${client.commands.filter(c=>c.help.module === "Pokedex").map(cmd=>`${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}\n\`\`\``)
      .setColor(3447003)
    message.author.send({embed});
    message.author.send(`To add me to your server, use this link -> https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=214695859\nYou can use \`${config.prefix}modules\` command to see a list of all modules.\nYou can use \`${config.prefix}commands ModuleName\`\n(for example \`${config.prefix}commands Fun\`) to see a list of all of the commands in that module.\nFor a specific command help, use \`${config.prefix}help CommandName\` (for example \`${config.prefix}help 8ball\`)\n\n**LIST OF COMMANDS CAN BE FOUND BY TYPING \`${config.prefix}help\`**\n\nPikaBot Support Server: ${config.serverinvite}`);
    message.author.send({embed: {
      color:4447003,
      description:`Type ${settings.prefix}help <commandname> for details on a specific command.\nType ${settings.prefix}modules for a list of modules.`}});
    message.reply("Check your Direct Message!");
    /* new code ends here */
  } else {
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
    }else if (client.aliases.has(command)) {
      command = client.commands.get(client.aliases.get(command));
    }else {
      return message.reply("Can't find that command.");
    }
      const cmdhelp = new Discord.RichEmbed()
      .setColor(4447003)
      .setDescription(`\`${settings.prefix}${command.help.name} ${command.help.alias}\`\n${command.help.description}\n**${command.help.permit}**`)
      .addField(`Usage`, `\`${settings.prefix}${command.help.usage}\``)
      .setFooter(`Module: ${command.help.module}`)
      message.channel.send({embed: cmdhelp});
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands or info on a certain command.',
  usage: 'help or help [command]',
  module: 'Help',
  permit: ' ',
  alias: '/ h'
};

/* Help & Conf example

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: ' ',
  description: ' ',
  usage: ' ',
  module: ' ',
  permit: ' ',
  alias: ' '
};

exports.run = (client, message, args) => {
// code here
};

// aliases example

aliases: ['h', 'help'],

example ends here */

/* perm levels (incomplete)
0 = ???
1 = Requires Manage_Messages
2 = Requires Manage_Server
3 = Requires Administration
4 = Requires Bot Ownership
*/
