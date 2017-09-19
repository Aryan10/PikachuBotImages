const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

exports.run = (client, message, args) => {
  if (args.length < 1) return message.reply("Please provide some text to clapify.");
  message.channel.send(args.map(randomizeCase).join(':clap:'));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['clap'],
  permLevel: 0
}

exports.help = {
  name: 'clapify', 
  description: 'Clapifies some text.', 
  usage: 'clapify [text]', 
  module: 'Fun', 
  permit: ' ', 
  alias: '/ clap'
}
