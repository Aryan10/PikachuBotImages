exports.run = (client, message, args) => {

  let sprite = message.content.toLowerCase().split(' ').slice(1).join(" ");
  if (!sprite) return;
  message.channel.send({files: [`http://www.pokestadium.com/sprites/xy/${sprite.replace(/ /g,'-')}.gif`]});
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pkmn', 'poke'],
  permLevel: 0
};

exports.help = {
  name: 'pokemon',
  description: 'Sends the Pokemon\'s gif from Gen6.',
  usage: 'pokemon [pokemon name]',
  module: 'Pokemon',
  permit: ' ',
  alias: '/ pkmn / poke'
};
