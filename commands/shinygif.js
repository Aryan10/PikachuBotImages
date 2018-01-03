
exports.run = (client, message, args) => {
  let sprite = message.content.toLowerCase().split(' ').slice(1).join(" ");
  if (!sprite) return;

        const Discord =require('discord.js');
const color = [0xF44336, 0xE91E63, 0x9C27B0, 0x673AB7, 0x3F51B5, 0x2196F3, 0x03A9F4, 0x00BCD4, 0x009688, 0x4CAF50, 0x8BC34A, 0xCDDC39, 0xFFEB3B, 0xFFC107, 0xFF9800, 0xFF5722, 0x795548, 0x9E9E9E, 0x607D8B, 0x000000, 0xFFFFFF]
    const num = Math.floor(Math.random()*color.length);
    const embed = new Discord.RichEmbed()
      .setColor(color[num])
    .setImage(`https://play.pokemonshowdown.com/sprites/xyani-shiny/${sprite}.gif`);
message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'shinygif',
  description: 'Sends the Pokemon shiny and mega gifs.',
  usage: 'shinygif `pokemon name` or `pokemon name-mega`',
  module: 'Pokemon',
  permit: ' ',
  alias: ''
};
