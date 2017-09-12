const pikabot = require("../config.json");

module.exports = client => {

console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);

let streaming = true;
client.user.setStatus(pikabot.status);

if (streaming === true) {
client.user.setGame(pikabot.game, pikabot.streamingurl);
} else {
client.user.setGame(pikabot.game)
}	

}
