const pikabot = require("../config.json");
const games = require("../util/games.json");
module.exports = client => {
  console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  let streaming = pikabot.streaming;
  let a = ` | ${pikabot.prefix} Prefix | ${client.guilds.size} Servers`
  client.user.setStatus(pikabot.status);
  if (pikabot.rotategame && games.length > 0) {
    setInterval(() => {
      const game = games[~~(Math.random() * games.length)]
      if (!streaming) {
        client.user.setGame(game + a)
      }else {
        client.user.setGame(game + a, pikabot.streamingurl);
      }
    }, pikabot.rotategametime)
  }else {
    if (streaming) {
      client.user.setGame(`${pikabot.game + a}` , pikabot.streamingurl);
    } else {
      client.user.setGame(pikabot.game + a);
    }	
  }

};
