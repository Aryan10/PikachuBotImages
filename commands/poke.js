exports.run = (client, message, args) => {
  if (!args[0]) return message.reply("mention someone to use this command.");
  const bot = `<@${client.user.id}>`;
  const mention = `<@${message.mentions.users.first().id}>`;
  const author = `<@${message.author.id}>`;
  if (bot === mention) return message.reply(`_got poked_`, {
    files: ["https://media.tenor.com/images/679a99608b5cbb13db715606ce6fe3bc/tenor.gif"] // Or replace with FileOptions object
});
  return  message.channel.send(`_${author} poked ${mention}!_`, {
    files: ["https://media.tenor.com/images/679a99608b5cbb13db715606ce6fe3bc/tenor.gif"] // Or replace with FileOptions object
});
    
                         
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'poke',
  description: 'Poke someone.',
  usage: 'poke [mention]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
