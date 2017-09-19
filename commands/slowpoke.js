exports.run = (client, message, args) => {
  setTimeout(() => {
    message.channel.send('', {
      file: {
        attachment: './images/slowpoke/slowpoke.png'
      }
    });
  }, 45000);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['slow'],
  permLevel: 0
}

exports.help = {
  name: 'slowpoke', 
  description: 'Sends an image like a slowpoke.', 
  usage: 'slowpoke', 
  module: 'Fun', 
  permit: ' ', 
  alias: '/ slow'
}
