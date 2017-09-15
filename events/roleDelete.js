module.exports = role => {
  let guild = role.guild;
  let log = guild.channels.filter(c=>c.name.includes("log")).first();
  if (!log) {
    if (!guild.defaultChannel) return;
    log = guild.defaultChannel;
  }
  let embedtitle = "Role Deleted"
  if (role.name.toLowerCase() === "new role") {
    embedtitle = "New " + embedtitle;
  }
  log.send({embed: {
    color:3447003,
    title:embedtitle,
    description:`Name: ${role.name}\nID: ${role.id}`
  }});
}
