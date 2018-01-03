const Discord = require("discord.js");
const points = require("/app/util/users.json");
const { writeFile } = require("fs");
const users = require("../util/users.json");
exports.run = (client, message, args) => {
  let user = message.author;
  let data = points[user.id];
  if (!data) return;
 if (message.guild.id === 278135637293531136 && message.channel.id === "330638764529680405") {
    message.channel.send(`you've successfully claimed your shiny money`);
   users[user.id].money += users[user.id].shiny;
   users[user.id].shiny = 0;


writeFile("/app/util/users.json", JSON.stringify(users), (err) => {
    if (err) console.error(err)
  });
}
else{ message.channel.send(`This command only work in my official server Channel <#330638764529680405>`); 
user.send("my official server = https://discord.gg/rSsBhn5");
}

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'shinymoney', 
  description: 'get your  shinymoney', 
  usage: 'shinymoney', 
  module: 'Gambling', 
  permit: ' ', 
  alias: ' '
}
