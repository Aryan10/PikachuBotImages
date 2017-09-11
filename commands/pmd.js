exports.run = (client, message, args) => {

let pmdicon = message.content.toLowerCase().split(' ').slice(1).join(" ");
if (!pmdicon) return;
message.channel.send({file: `http://www.pokestadium.com/assets/img/sprites/misc/pmd2/${pmdicon}.png`});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pmd',
  description: 'Sends the Pokemon\'s icon from Pokemon Mystery Dungeon: Explorers Of Sky.',
  usage: 'pmd [pokemon name]',
  module: 'Pokemon',
  permit: ' ',
  alias: ' '
};
