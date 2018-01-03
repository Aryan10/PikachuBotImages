exports.run = (client, message, args) => {
const yoMamma = require('yo-mamma').default;
 let insult;
insult = yoMamma(); 
message.channel.send(insult);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'jokes',
  description: 'get random jokes',
  usage: 'jokes',
  module: 'fun',
  permit: ' ',
  alias: ' '
}; 