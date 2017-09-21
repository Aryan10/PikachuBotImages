exports.run = (client, message, args) => {
  const string = ["heads", "tails"]
  var random = Math.floor(Math.random() * string.length);
  const str = string[random];
  message.channel.send("You flipped **"+ capFL(str) + "**.", {files: [`./images/coins/${str}.png`]});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['flip', 'coin'],
  permLevel: 0
}

exports.help = {
  name: 'coinflip', 
  description: 'Flips a Pokémon coin.', 
  usage: 'coinflip', 
  module: 'Pokemon', 
  permit: ' ', 
  alias: ' '
}

function capFL(string) { 
  return string.charAt(0).toUpperCase() + string.slice(1);
}
