const config = require('../config.json')

module.exports = guild => {
  let client = guild.client;
  client.emit("ready");
  client.channels.get(config.botlogchannel).send(`Left Server **${guild.name}**`);
}
