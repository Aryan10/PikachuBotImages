const Discord = require("discord.js");

module.exports = (oldch, newch) => {
  const channel = oldch;
  const guild = oldch.guild;
  let embed;
  let log = guild.channels.filter(c=>c.name.toLowerCase().includes("log")).first();
  if (!log) {
    if (!guild.defaultChannel) return console.log("undefined guild.defaultChannel in " + guild.name);
    log = guild.defaultChannel;
  }
  if (oldch.type !== "text" || newch.type !== "text") return;
  if (oldch.name !== newch.name) {
    embed = new Discord.RichEmbed()
      .setTitle("Channel Name Changed")
      .addField("Old Name", oldch.name)
      .addField("New Name", newch.name)
      .setColor(3447003)
      .setTimestamp()
      .setFooter(" ", guild.iconURL);
    log.send({embed});
  }
  if (oldch.topic !== newch.topic) {
    embed = new Discord.RichEmbed()
      .setTitle("Channel Topic Changed")
      .addField("Channel", oldch.name)
      .addField("Old Topic", oldch.topic)
      .addField("New Topic", newch.topic)
      .setColor(3447003)
      .setTimestamp()
      .setFooter(" ", guild.iconURL);
    log.send({embed});
  }
};
