const config = require('../config.json');

exports.run = (client, message, args) => {
  if(message.author.id !== config.botOwner) return message.reply('you are not my owner!!!'); 
  let announcemsg = message.content.split(" ").slice(1).join(' ');
  if (!announcemsg) return;
  message.channel.send("Announced");
  client.guilds.forEach(guild => {
    if (!guild.defaultChannel) return;
    guild.defaultChannel.send({embed: {
      color:3447003,
      title:`Announcement Message from Bot Owner ${message.author.tag}!`,
      description:announcemsg
    }});
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'announce',
  description: 'Announces a message in every server the bot is in.',
  usage: 'announce [message]',
  module: 'Admin',
  permit: 'Bot Owner Only',
  alias: ' '
};
