exports.run = (client, message, args) => {
  if (!args[0]) return message.reply("mention someone to use this command.");
  const bot = `<@${client.user.id}>`;
  const mention = `<@${message.mentions.users.first().id}>`;
  const author = `<@${message.author.id}>`;
  
  
  if (author === mention || !mention) return message.reply(`Alone\n:C don't be sad I will hug you!`, {
    files: ["https://media.tenor.com/images/f32c20bad2f5dfa59113ac0bfdfc26b1/tenor.gif"] // Or replace with FileOptions object
});
 
  return  message.channel.send(`${author} _hugged_ ${mention}!`, {
    files: ["https://media.giphy.com/media/8tpiC1JAYVMFq/giphy.gif"] // Or replace with FileOptions object
});
    
                         
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hug',
  description: 'Hug someone or yourself.',
  usage: 'hug [mention]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
 
