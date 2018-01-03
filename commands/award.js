const config = require ('../config.json');
const servers = require("../util/servers.json");
const users = require("../util/users.json");
const { RichEmbed } = require("discord.js");
const { writeFile } = require("fs");
const db = require("../util/pikabot.json");

exports.run = (client, message, args) => {
  const Discord = require (`discord.js`);
    const color = [0xF44336, 0xE91E63, 0x9C27B0, 0x673AB7, 0x3F51B5, 0x2196F3, 0x03A9F4, 0x00BCD4, 0x009688, 0x4CAF50, 0x8BC34A, 0xCDDC39, 0xFFEB3B, 0xFFC107, 0xFF9800, 0xFF5722, 0x795548, 0x9E9E9E, 0x607D8B, 0x000000, 0xFFFFFF]
    const num = Math.floor(Math.random()*color.length);
  let currency = db.defaultCurrencySign;
  let user = message.mentions.users.first();
  if (message.author.id !== config.botOwner) return message.reply("you are not my owner.");
  if (!user) user = message.author;
  let money = args[0];
  if (!money) money = 0;
  users[user.id].money += parseInt(money);
  message.channel.send(`Awarded ${money} to ${user.tag}!`);


   const embed = new Discord.RichEmbed()
    .addField("`**you received** ${money} + ${currency} \n by Bot Owner **Arun Kapil#2297**`")
    .setColor(color[num]);
    
user.send({embed});
  writeFile("/app/util/users.json", JSON.stringify(users), (err) => {
    if (err) console.error(err)
  });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'award', 
  description: 'Award someone money.', 
  usage: 'award <money> @mention', 
  module: 'Gambling', 
  permit: 'Bot Owner Only', 
  alias: ' '
}




