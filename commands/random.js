exports.run = (client, message, args) => {
const users = require("../util/users.json");
const { writeFile } = require("fs");
var shiny = Math.floor(Math.random() * 8);
if(shiny == 4) {
shinyzer='xy-animated-shiny'
msg='Wow, you are lucky, you got a Shiny Pokemon.'
users[message.author.id].shiny += 1;
  writeFile("/app/util/users.json", JSON.stringify(users), (err) => {
    if (err) console.error(err)
  });
}else {
shinyzer='xy-animated'
msg='You got an awesome Pokemon.'
}
let party = Math.floor(Math.random() * 719);
message.channel.send(msg, { files: [`https://pldh.net/media/pokemon/gen6/${shinyzer}/${party}.gif`] });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'shinyhuntr',
  description: 'Shiny hunting.',
  usage: 'shinyhuntr',
  module: 'Pokemon',
  permit: ' ',
  alias: ' '
};



