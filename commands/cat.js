const Discord = require("discord.js");

const randomCat = require('random-cat');

exports.run = function(client, message) {

var url = randomCat.get();

const embed = new Discord.RichEmbed()

.setColor(0xFFB200)

.setTimestamp()

.addField(`Here's a catto, `, `${message.author.username}!`)

.setImage(`${url}`)

.setFooter(`Meowed by ${message.author.username}.`)

return message.channel.send({embed})

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};


exports.help = {

  name: 'cat',

  description: 'Sends a random cat image.',

  usage: 'cat',

  module: 'Fun',

  permit: ' ',

  alias: ' ',

};


