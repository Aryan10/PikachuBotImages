const {RichEmbed} = require("discord.js");

exports.run = (client, message, args) => {
  if (!message.mentions.users.first()) return message.reply("Mention some waifu to use this command.");
  const mention = `<@${message.mentions.users.first().id}>`;
  const user = message.mentions.users.first();
  const num = Math.floor((Math.random() * 100) + 1); 
  
  	let result;
  	if (num>40) result = `Not good 👎`;
  	if (num>30) result = `Awful 😒`;
  	if (num>20) result = `Ugly waifu 😶`;
  	if (num<50) result = `Bad waifu 😝`;
  	if (num<10) result = `Not even a waifu 😐`;
  	if (num>50) result = `Nice waifu 👍`;
  	if (num>70) result = `Good waifu 👌`;
  	if (num>90) result = `Perfect 😘`;
  	if (num>95) result =  `**Super 💋Awesome 👰 Waifu 👸**`;
  	
// do some checks to see if num is over a certain value to give that comment at the end 
  const bot = client.user;
  const embed = new RichEmbed()
  .setTitle(`💗WAIFU RATING💗`)
  .setAuthor(user.username, user.avatarURL)
  .setColor(0x008DCD)
  .setFooter(bot.username, bot.avatarURL)
  .setTimestamp()
  .setDescription(`*The rating of **${user.username}** as a waifu:* 👰\n${num}% ${"<:Bar:370534553267470358>".repeat(Math.floor(num/10))}\n${result}`);
  message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ratewaifu'],
  permLevel: 0
};

exports.help = {
  name: 'rate',
  description: 'Rate a waifu.',
  usage: 'rate [mention]',
  module: 'Waifu',
  permit: ' ',
  alias: ' '
};