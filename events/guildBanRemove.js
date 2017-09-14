module.exports = (guild, user) => {
  let log = guild.channels.filter(c=>c.name.toLowerCase().includes("log")).first();
  if (!log) {
    if (!guild.defaultChannel) return;
    log = guild.defaultChannel;
  }
  log.send({embed: {
    color:3447003,
    title:'User Unbanned',
    description:`${user.tag} is unbanned from ${guild.name}!`
  }});
}
