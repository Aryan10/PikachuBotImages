const pikabot = require("../config.json");
const games = require("../util/games.json").game;
module.exports = client => {
  console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  let streaming = pikabot.streaming;
  client.user.setStatus(pikabot.status);
  if (pikabot.rotategame && games.length > 0) {
    setInterval(() => {
      const game = games[~~(Math.random() * games.length)]
      if (streaming) {
        client.user.setGame(game)
      }else {
        client.user.setGame(game, streamingurl);
      }
    }, pikabot.rotategametime)
  }else {
    if (streaming) {
      client.user.setGame(`${pikabot.game} | ${client.guilds.size} Servers` , pikabot.streamingurl);
    } else {
      client.user.setGame(pikabot.game)
    }	
  }

};
