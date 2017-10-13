// main defines
const games = require("../util/games.json");
const config = require("../config.json");
const { prefix } = config;
const { writeFile } = require("fs");
const { RichEmbed } = require("discord.js");

exports.run = (client, message, args) => {
  // functions
  const reply = (string) => message.reply(string);
  
  // no args check
  if (!args[0]) return reply(`\nType \`${prefix}botgame list\` for list of current games.\nType \`${prefix}botgame add\` to add a game to list.\nType \`${prefix}botgame remove\` to remove a game from list.\nType \`${prefix}botgame togglerotate <new time in ms>\` to toggle game rotation.\nType ${prefix}setgame <new game> to set a game (if not rotating)`);
  
  // defines
  const func = args[0].toLowerCase();
  
  // functions
  const checkArgs = (string) => func === string;
  
  // owner check
  if (message.author.id !== config.botOwner);
  
  // toggle rotate function
  if (checkArgs("togglerotate")) {
    if (config.rotategame) config.rotategame === false;
    else config.rotategame === true;
    if (!isNaN(args[1])) config.rotategametime == args[1];
    writeFile('../config.json', JSON.stringify(config), (err) => {
      if (err) reply(err);
    });
    message.reply("Toggled rotation of game!");
  }
  
  // game map function
  if (checkArgs("list")) {
    message.channel.send({embed:
    new RichEmbed().setColor(4447003).setDescription("__Default Game__: " + config.game + "\n__Rotate Game__: " + config.rotategame + "\n__Rotate Game Time (ms)__: " + config.rotategametime + "\n__Streaming__: " + config.streaming).addField("List Of Games", games.map(m=>`\`${games.indexOf(m)}\` ${m}`).join("\n"))}
    );
  }
  
  // game add function
  if (checkArgs("add")) {
    if (games.size == 20) return reply("Maximum of 20 games possible, delete some to add more.");
    if (!args[1]) return reply("Specify new game too.");
    let newgame = args[1].join(" ");
    games[games.size + 1] = newgame;
    writeFile("../util/games.json", games, (err) => {
      if (err) reply(err);
    });
    reply("Added **" + newgame + "** to list.");
  }
  
  // more functions here
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'botgame', 
  description: 'Info about bot\'s game system.', 
  usage: 'botgame', 
  module: 'Admin', 
  permit: 'Bot Owner Only', 
  alias: ' '
}