module.exports = role => {
  let guild = role.guild;
  let log = guild.channels.filter(c=>c.name.includes("log")).first();
  if (!log) {
    if (!guild.defaultChannel) return;
    log = guild.defaultChannel;
  }
  log.send({embed: {
    color:3447003,
    title:'New Role Created',
    description:`Name: ${role.name}\nID: ${role.id}`
  }});
}
