const Discord = require("discord.js");
const config = require("../config.json");
const moment = require("moment");
const fs = require("fs");
const pack = require("../package.json");
require("moment-duration-format");

exports.run = (client, message, args) => {
  const bot = client.user;
  const clientOwner = client.users.get(config.botOwner);
  const botOwner = config.botOwner;
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], M [mins], S [secs]");
  
  fs.readdir('./', (err, files) => {
    fs.readdir('../modules/', (errmdls, file) => {
  const embed = new Discord.RichEmbed()
    .setAuthor(`${bot.username} v${pack.version}`, bot.avatarURL)
    .setColor(0x00AE86)
    .setFooter(`Type ${config.prefix}servers to get a full list of servers the bot is in.`)
    .setThumbnail(bot.avatarURL)
    .setDescription(`A Discord.js Bot for Fun, Mod, Pokemon and Misc Commands\n__Devloped by ${clientOwner.tag}__`)
    .addField("Client ID", bot.id)
    .addField("Bot Owner ID(s)", botOwner)
    .addField("Presence", `${client.guilds.size} Servers\n${client.channels.size} Channels\n${client.users.size} Users`)
    .addField("Uptime", duration)
    .addField("Memory Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
    .addField("Bot Info", `${files.length} Commands\n${file.length} Modules`)
    .addField("Statistics", `DiscordJs v${Discord.version}\nNodeJs ${process.version}`);
  message.channel.send({embed});
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['binfo', 'botinfo'],
  permLevel: 0
};

exports.help = {
  name: 'stats',
  description: 'Shows info on bot.',
  usage: 'stats',
  module: 'Other',
  permit: ' ',
  alias: '/ binfo / botinfo'
};
