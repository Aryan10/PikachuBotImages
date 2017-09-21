const config = require('../config.json')

module.exports = guild => {
  let client = guild.client;
  client.emit("ready");
  client.users.get(config.botOwner).send(`Someone kicked/banned me from ${guild.name}, I don't know what I did. Or maybe that server got deleted :thinking:`);
}
