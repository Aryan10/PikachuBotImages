const pikabot = require("../config.json");
module.exports = client => {

console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
client.user.setGame(pikabot.game, pikabot.streamingurl);
client.user.setStatus(pikabot.status);										    
}
