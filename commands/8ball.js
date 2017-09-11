const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (client, message, args) => {
  const question = message.content.split(" ").slice(1).join(" ");
  if (!question) return;
  const answer = ["Yes", "No", "Ask me again later", "It is uncertain", "Most definitely yes", "Don't count on it", "For sure", "Most likely no", "Probably not", "Maybe", "Don't even think about it", "Not sure", "Perhaps", "Ah I see it, yes", "My sources say no", "Outlook good", "My sources say yes"]
  var random = Math.floor(Math.random()*answer.length);
  const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .addField(":question: Question", question)
    .addField(":8ball: 8Ball", `${answer[random]}`);
    return message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Ask 8ball a yes/no question.',
  usage: '8ball [question]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
}; 
