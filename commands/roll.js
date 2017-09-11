exports.run = (client, message, args) => {
  let num = message.content.split(" ").slice(1);
  let [a1, a2] = num.join(" ").replace(/ /g, "").split("-");
  let str;
  if (!a2) {
    [a1, a2] = ["1", a2]
  }
  if (!a1) {
    [a1, a2] = ["1", "100"]
  }
  if (!a1.toNumber() || !a2.toNumber()) return message.reply("Please use numbers only.");
  message.reply('You rolled :game_die:' + Math.floor(Math.random() * a1 + a2)).then(m=>m.react('🎲'));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'roll',
  description: 'Rolls a random number from specified numbers. Rolls from 1 to 100 if no number specified.',
  usage: 'roll number1 - number2',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
