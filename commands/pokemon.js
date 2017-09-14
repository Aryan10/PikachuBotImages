exports.run = (client, message, args) => {

  let sprite = message.content.toLowerCase().split(' ').slice(1).join(" ");
  if (!sprite) return;
  if (sprite.isNaN()) {
    message.channel.send({files: [`https://play.pokemonshowdown.com/sprites/xyani/${sprite.replace(/ /g,'-')}.gif`]});
  }else {
    message.channel.send("Coming soon");
  }
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
