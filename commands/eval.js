exports.run = (client, message, args) => {
const config = require ('../config.json');
const Discord = require("discord.js");
const bot = client.user;
const guild = message.guild;
const channel = message.channel;
const msg = message.content;
const author = message.author;
if(message.author.id !== config.botOwner) return message.reply ('you are not my owner!');
if (!args[0]) return;
const clean = text => {
if (typeof(text) === "string") {
return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
}else {
return text;
}

}
try {
const args = message.content.split(' ').slice(1);
const code = args.join(' ');
let evaled = eval(code);
if (typeof evaled !== 'string')
evaled = require('util').inspect(evaled);
message.channel.send({embed: {
color:3447003,
title:'EVAL',
description:`**EVAL INPUT:**\n\`\`\`${code}\`\`\`\n\n**EVAL OUTPUT:**\n\`\`\`${clean(evaled)}\`\`\``
}});
} catch (err) {
      message.channel.send({embed: {
      title:'EVAL ERROR',
      description:`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``
      }});
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'eval',
  description: 'Runs a code from the bot.',
  usage: 'eval [code]',
  module: 'Admin',
  permit: 'Bot Owner Only',
  alias: ' '
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
