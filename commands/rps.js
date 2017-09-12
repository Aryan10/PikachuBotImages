const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (client, message, args) => {
  const rps = ["Rock", "Paper", "Scissor"]
  var random = Math.floor(Math.random()*rps.length);
  const choice = args[0].toLowerCase();
  const mychoice = rps[random];
  const draw = "it's a draw";
  const won = "you won";
  const loss = "you lost";
  var result;
  const emoji_rock = "💎";
  const emoji_scissor = "✂";
  const emoji_paper = "🗞";
  let emoji;
  let my_emoji;
  if (choice === "rock") {
  emoji = emoji_rock;
  }else if (choice === "scissor") {
  emoji = emoji_scissor;
  }else if (choice === "paper") {
  emoji = emoji_paper;
  }else {
  emoji = "❔";
  }
  if (mychoice === "Rock") {
  my_emoji = emoji_rock;
  }else if (mychoice === "Scissor") {
  my_emoji = emoji_scissor;
  }else if (mychoice === "Paper") {
  my_emoji = emoji_paper;
  }
  if (choice === mychoice.toLowerCase()) {
  result = draw;
  }else if (choice === "rock" && mychoice === "Scissor") {
  result = won;
  }else if (choice === "rock" && mychoice === "Paper") {
  result = loss;
  }else if (choice === "scissor" && mychoice === "Paper") {
  result = won;
  }else if (choice === "scissor" && mychoice === "Rock") {
  result = loss;
  }else if (choice === "paper" && mychoice === "Rock") {
  result = won;
  }else if (choice === "paper" && mychoice === "Scissor") {
  result = loss;
  }else {
  result = `... nothing idiot :angry: ${args[0]} is not a thing in Rock/Paper/Scissors!!!`;
  }
  const embed = new Discord.RichEmbed()
    .setColor([3447003, 4447003, 9447003][random])
    .setDescription(`I picked ${mychoice}${my_emoji}. And your choice was ${args[0]}${emoji} :thinking:\nSo ${result}!`);
  return message.channel.send({embed});
        
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rps',
  description: 'Play Rock/Paper/Scissor with bot.',
  usage: 'rps [your choice]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
}; 
