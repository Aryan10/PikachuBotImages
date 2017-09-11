exports.run = (client, message, args) => {
const config = require('../config.json');
let sigh = message.content.split(" ").slice(1);
let psymsg = sigh.join(" ");
if (!psymsg) return message.reply("Please specify what to report ???");
message.channel.send('Reported!');
client.users.get(config.botOwner).send(`${message.author.tag} from ${message.guild.name} have reported: ` + psymsg);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'report',
  description: 'Reports something to the bot owner.',
  usage: 'report [msg]',
  module: 'Other',
  permit: ' ',
  alias: ' '
};
