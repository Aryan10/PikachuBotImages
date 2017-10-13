exports.run = (client, message, args) => {
  if (!args[0]) return message.reply("mention someone to use this command.");
  const bot = `<@${client.user.id}>`;
  const mention = `<@${message.mentions.users.first().id}>`;
  const author = `<@${message.author.id}>`;
  if (bot === mention) return message.reply("Don't kiss me!", {
    files: ["http://data.whicdn.com/images/105177044/original.gif"] // Or replace with FileOptions object
});
  
  if (author === mention) return message.reply("Alone?", {
    files: ["https://media.tenor.com/images/b73520359caa037281030e2bc198fc99/tenor.gif"] // Or replace with FileOptions object
});
 
  return  message.channel.send(`${author} _kissed_ ${mention}!`, {
    files: ["https://24.media.tumblr.com/5ddfcb32553007fe6c414152ea9b53a6/tumblr_mzei1iugTt1rdyy7wo1_500.gif"] // Or replace with FileOptions object
});
    
                         
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kiss',
  description: 'Kiss someone.',
  usage: 'kiss [mention]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
 
