const snekfetch = require('snekfetch');

exports.run = (client, message, args) => {
  const params = message.content.split(' ').slice(1)
  let [title, contents] = params.join(" ").split("| ");
  if (!title) return message.reply("You must give an achievement description.");
  if(!contents) {
    [title, contents] = ["Achievement", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);
  if(title.length > 22 || contents.length > 22) return message.channel.send("Too much characters. Max Length is 22 Characters.");
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>message.channel.send("", {files:[{attachment: r.body}]}));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'achievement',
  description: 'Get an achievement of something.',
  usage: 'achievment [title] | [content]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
