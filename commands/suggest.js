exports.run = (client, message, args) => {
const config = require('../config.json');
let sigh = message.content.split(" ").slice(1);
let psymsg = sigh.join(" ");
if (!psymsg) return message.reply("Please specify what you want to suggest ???");
message.channel.send('Suggested!');
client.users.get(config.botOwner).send(`${message.author.tag} from ${message.guild.name} have suggested: ` + psymsg);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'suggest',
  description: 'suggests something to the bot owner.',
  usage: 'suggest [msg]',
  module: 'Other',
  permit: ' ',
  alias: ' '
};
