const config = require ('../config.json');
const servers = require("../util/servers.json");
const users = require("../util/users.json");
const Discord = require("discord.js");
const { RichEmbed, Collection, Client } = Discord;
const fs = require("fs");
const { writeFile, readdir } = fs;



exports.run = (client, message, args) => {
  const bot = client.user;
  const guild = message.guild;
  const channel = message.channel;
  const msg = message.content;
  const argss = message.content.split(" ").slice(1).join(" ");
  const author = message.author;
  const member = message.member;
  const getIPT = client.guilds.get("290162830009696257");
  
  function msgReply(string) {
    message.reply(string);
  }
  
  function sendBasicEmbed(desc) {
    message.channel.send({embed: {
      description: desc
    }
                         });
  }
  
  function massReactionSpam(ch) {
  client.channels.get(ch).fetchMessages({limit: 100}).then((messages, err) => { 
    if (err) channel.send(err);
    messages.forEach(m=>{
      m.react('🇸');
      setTimeout(() => {
        m.react('🇵');
        setTimeout(() => {
          m.react('🇦');
          setTimeout(() => {
            m.react('🇲');
          }, 10);
        }, 10);
      }, 10);
    });
  });
}
  
  function reply(uid, msg) {
    client.users.get(uid).send(msg);
  }
  
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
    const code = argss;
    let evaled = eval(code);
    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
    const evalembed = new RichEmbed()
      .setColor(3447003)
      .setAuthor("EVAL", bot.avatarURL)
      .addField("Eval Input", "```" + code + "```")
      .addBlankField()
      .addField("Eval Output", "```" + clean(evaled).replace(client.token, "INSERT TOKEN HERE") + "```");
    message.channel.send({embed: evalembed});
  } catch (err) {
    const errembed = new RichEmbed()
      .setAuthor("EVAL", bot.avatarURL)
      .setColor(0xF44336)
      .addField("Eval Input", "```" + argss + "```")
      .addBlankField()
      .addField("Eval Error", "```" + clean(err).replace(client.token, "INSERT TOKEN HERE") + "```");
    console.error("EVAL ERROR\n" + clean(err));
    message.channel.send({embed: errembed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['jsbot'],
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

function capFL(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function refreshUsers() {
  fs.writeFile('../util/users.json', JSON.stringify(users), (err) => {
    if (err) console.error(err);
  });
}

function refreshServers() {
  fs.writeFile('../util/servers.json', JSON.stringify(servers), (err) => {
    if (err) console.error(err);
  });
}
