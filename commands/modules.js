const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setTitle("List Of Modules")
    .setColor(4447003)
    .setDescription(client.modules.map(m => `• ${m.moduledata.name}`).join("\n"))
    .setFooter(`ℹType \`${config.prefix}cmds <ModuleName>\` to get a list of commands in that module. The module name should be some keywords from start of module name.`);
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mdls'],
  permLevel: 0
};

exports.help = {
  name: 'modules',
  description: 'List all bot modules.',
  usage: 'modules',
  module: 'Help',
  permit: ' ',
  alias: '/ mdls'
};
