const pikabot = require("../config.json");
const games = require("../util/games.json");
const today = new Date();
function checkDate(date, month) {
  if (today.getDate() == date && today.getMonth() == month) return true;
  else return false;
}

module.exports = client => {
  const bot = client.user;
  if (checkDate(31, 9)) bot.setAvatar("./images/avatar/pikachu_magic.png");
  else if (checkDate(24, 11) || checkDate(25, 11)) bot.setAvatar("./images/avatar/pikachu_christmas.png");
  else if (checkDate(31, 11) || checkDate(1, 0)) bot.setAvatar("./images/avatar/pikachu_celebrate.png");
  else bot.setAvatar("./images/avatar/pikachu_alola.png");
  
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
