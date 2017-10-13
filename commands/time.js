// main defines
const today = new Date();
const { RichEmbed } = require("discord.js");

// more defines
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
var ss = today.getSeconds();
var min = today.getMinutes();
var hh = today.getHours();
var day = today.getDay();
let hours = "am";

// some defines changes
if (hh > 12) {
  hours = "pm";
  hh -= 12;
}
if (min < 10) min = "0" + min;
if (ss < 10) ss = "0" + ss;
if (dd < 10) dd = "0" + dd;
if (mm < 10) dd = "0" + dd;

// arrays
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

exports.run = (client, message, args) => {
  const embed = new RichEmbed()
    .setDescription(`${months[mm - 1].substring(0, 3)} ${dd}, ${yyyy}`)
    .setColor(3447003)
    .addField("Time", `${hh}:${min}:${ss} ${hours.toUpperCase()}`)
    .addField("Month", months[mm - 1])
    .addField("Day", days[day])
    .setAuthor("Current Time", client.user.avatarURL)
    .setFooter("GMT 0", message.guild.iconURL)
    .setTimestamp();
  message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'time', 
  description: 'Get Current Time.', 
  usage: 'time', 
  module: 'Other', 
  permit: ' ', 
  alias: ' '
}