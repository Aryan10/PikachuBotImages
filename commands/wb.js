exports.run = (client, message, args) => {
  const Discord = require('discord.js');
  if (!args[0]) return;
  message.delete(1)
  let wbname = `${client.user.username}'s Assistant`;
  let wbav = "../images/avatar/pikachu_kanto.png";
  message.channel.createWebhook(wbname, wbav).then(hook => hook.edit(wbname, wbav)).then(wb => new Discord.WebhookClient(wb.id, wb.token).send(message.content.split(" ").slice(1).join(" ")));
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['saywb'],
  permLevel: 0
};

exports.help = {
  name: 'wb',
  description: 'Says something in a webhook.',
  usage: 'wb [message]',
  module: 'Fun',
  permit: ' ',
  alias: '/ saywb'
};
