exports.run = (client, message, args) => {
    let msg = message.content.split(" ").slice(1).join(" ");
    if (!msg) return;
    message.delete(1);
    return message.channel.send(msg);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Says something through the bot.',
  usage: 'say [message]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
