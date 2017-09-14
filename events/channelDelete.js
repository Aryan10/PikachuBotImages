module.exports = channel => {
  const guild = channel.guild;
  if (channel.type !== "text") return;
  let log = guild.channels.filter(c=>c.name.toLowerCase().includes("log")).first();
  if (!log) {
    if (!guild.defaultChannel) return;
    log = guild.defaultChannel;
  }
  log.send({embed: {
    color:3447003,
    title:'Channel Deleted',
    description:`Name: **${channel.name}**\nOld Topic: **${channel.topic}**\nOld ID: **${channel.id}**`
  }});
}
