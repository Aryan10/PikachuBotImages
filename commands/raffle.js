exports.run = (client, message, args) => {
message.channel.send(`Congratulation ${message.guild.members.random().displayName}\nYou are really lucky! 🎉`).then(m=>m.react('🎉'));
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'raffle',
  description: 'Raffles an random user from the server.',
  usage: 'raffle',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
