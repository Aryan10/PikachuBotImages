const Discord = require("discord.js");

module.exports = (oldch, newch) => {
  const channel = oldch;
  const channel = oldch.guild;
  if (oldch.type !== "text" || newch.type !== "text") return;
  if (oldch.name !== newch.name) {
    const embed = new Discord.RichEmbed()
      .setTitle("Channel Name Changed")
      .addField("Old Name", oldch.name)
      .addField("New Name", newch.name)
      .setTimestamp();
  }else if (oldch.topic !== newch.topic) {
    const embed = new Discord.RichEmbed()
      .setTitle("Channel Topic Changed")
      .addField("Channel", oldch.name)
      .addField("Old Name", oldch.topic)
      .addField("New Name", newch.topic)
      .setTimestamp();
  }
  let log = channel.guild.channels.find("name.inclides()", "log");
  if (!log) {
    if (!guild.defaultChannel) return console.log("undefined guild.defaultChannel in " + guild.name);
    log = guild.defaultChannel;
  }
  log.send({embed});
};
