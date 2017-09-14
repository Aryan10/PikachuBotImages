module.exports = (guild, user) => {
  user.send(`You have been banned from ${guild.name}!`);
  let log = guild.channels.filter(c=>c.name.toLowerCase().includes("log")).first();
  if (!log) {
    if (!guild.defaultChannel) return;
    log = guild.defaultChannel;
  }
  log.send({embed: {
    color:3447003,
    title:'User Banned',
    description:`**${user.tag}** is banned from **${guild.name}**!`
  }});
  }
