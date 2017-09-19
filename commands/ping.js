const config = require("../config.json");
exports.run = (client, message, args) => {
  let pong = "Pong?";
  if (message.content.toLowerCase().startsWith(config.prefix + "pong") pong = "Ping?";
    message.channel.send(pong).then(sent => {   
    sent.edit(`:ping_pong: Pong!\nTook :blue_heart:${sent.createdTimestamp - message.createdTimestamp}ms\nAPI Latency - ${Math.round(client.ping)}ms`);
    sent.react('🏓');
    });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pong'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping Pong command.',
  usage: 'ping',
  module: 'Fun',
  permit: ' ',
  alias: '/ pong'
};
