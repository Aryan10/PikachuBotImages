exports.run = (client, message, args) => {

let sprite = message.content.toLowerCase().split(' ').slice(1).join(" ");
if (!sprite) return;
if(args[0] === "example"){
message.channel.send("**Examples**\n`charizard` `pikachu female` `alakazam mega` `charizard megax` `mewtwo megay`\nYou can also use `back/` and `shiny/` before pokemon name to get back and shiny images respectively.\nAdd ` 2` ` 3` ` 4` etc at end of name to get move animations.\n\nNote: Oras Megas, Primals, Oras Forms and Sun/Moon Pokemon are not added yet.");
}else {
message.channel.send({files: [`http://www.pokestadium.com/sprites/xy/${sprite.replace(/ /g,'-')}.gif`]});
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
