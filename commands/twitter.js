exports.run = (client, message, args) => {
  const Discord =require('discord.js');
const color = [0xF44336, 0xE91E63, 0x9C27B0, 0x673AB7, 0x3F51B5, 0x2196F3, 0x03A9F4, 0x00BCD4, 0x009688, 0x4CAF50, 0x8BC34A, 0xCDDC39, 0xFFEB3B, 0xFFC107, 0xFF9800, 0xFF5722, 0x795548, 0x9E9E9E, 0x607D8B, 0x000000, 0xFFFFFF]
    const num = Math.floor(Math.random()*color.length);
    const embed = new Discord.RichEmbed()
    .setThumbnail('https://lh3.googleusercontent.com/d3NOFKMFZyKnjT2grtdN1CWPacR9sGhqUQdpRlqRa1FkBWPuJUXjDBysJkRDCKPvcxUx=s115')
    .setColor(color[num])
    .setDescriotion('Twitter is an online news and social networking service /n/ where users post and interact with messages, called "tweets." ')
      .addField("MY owner Twitter",'https://twitter.com/GainTrapadrive','Follow him')

message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'twitter',
  description: 'get all info of twitter',
  usage: 'twitter',
  module: 'utility',
  permit: ' ',
  alias: ''
};