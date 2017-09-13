const Discord = require("discord.js");

module.exports = (oldch, newch) => {
  const channel = oldch;
  const guild = oldch.guild;
  let embed;
  if (oldch.type !== "text" || newch.type !== "text") return;
  if (oldch.name !== newch.name) {
    embed = new Discord.RichEmbed()
      .setTitle("Channel Name Changed")
      .addField("Old Name", oldch.name)
      .addField("New Name", newch.name)
      .setColor(3447003);
      .setTimestamp()
      .setFooter(" ", guild.iconURL);
  }
  if (oldch.topic !== newch.topic) {
    embed = new Discord.RichEmbed()
      .setTitle("Channel Topic Changed")
      .addField("Channel", oldch.name)
      .addField("Old Name", oldch.topic)
      .addField("New Name", newch.topic)
      .setColor(3447003)
      .setTimestamp()
      .setFooter(" ", guild.iconURL);
  }
  let log = channel.guild.channels.find("name.includes()", "log");
  if (!log) {
    if (!guild.defaultChannel) return console.log("undefined guild.defaultChannel in " + guild.name);
    log = guild.defaultChannel;
  }
  log.send({embed});
};
