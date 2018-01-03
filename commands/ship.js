const { RichEmbed } = require("discord.js");

exports.run = (client, message, args) => {
  let m = message.mentions.users;
  if (!m.first() || !m.last()) return message.reply("Mention two users to use this command.");
const mention = `<@${message.mentions.users.first().id}>`;
const mention2 = `<@${message.mentions.users.last().id}>`;  
  const user = m.first();
  const user2 = m.last();
  if (mention === mention2) return message.reply("Both users can't be same.");
  	var num = Math.floor((Math.random() * 100) + 1); 
  	let result;
  	if (num<50) result = `Not good 😞`;
  	if (num<10) result = `Very bad match😱`;
  	if (num >50) result = `Nice match 👍`;
  	if (num > 70) result = `Good 👌`;
  	if (num >90) result = `Perfect 😘`;
  	if (num > 95) result =  `You are made for each other 💑`;
  	
// do some checks to see if num is over a certain value to give that comment at the end
// const comment = "eeeee";
    const color = [0xF44336, 0xE91E63, 0x9C27B0, 0x673AB7, 0x3F51B5, 0x2196F3, 0x03A9F4, 0x00BCD4, 0x009688, 0x4CAF50, 0x8BC34A, 0xCDDC39, 0xFFEB3B, 0xFFC107, 0xFF9800, 0xFF5722, 0x795548, 0x9E9E9E, 0x607D8B, 0x000000, 0xFFFFFF]
    const numc = Math.floor(Math.random()*color.length);
  const bot = client.user;
  const embed = new RichEmbed()
  .setColor(color[numc])
  .setTitle(`💗MATCH MAKING💗`)
  .setDescription(`_💒**${user.username}**_\n_💒**${user2.username}**_\n${num}% ${"<:Bar:370534553267470358>".repeat(Math.floor(num/10))}\n${result}`)
  .setFooter(bot.username, bot.avatarURL)
  .setTimestamp();
  message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ship',
  description: 'Ship two users.',
  usage: 'ship [mention] [mention]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
