const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const chalk = require("chalk");
const moment = require("moment");
const firebase = require("firebase-admin");
const serviceAccount = require("./util/database/pikabot-firebase.json");
const config = require("./config.json");
const http = require('http');
const express = require('express');
const app = express();

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");  
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

if(process.version.slice(1).split('.')[0]<8) throw new Error('Node 8.0.0 or higher is required. Update Node on your system.');

require("./util/eventLoader.js")(client);

client.login(process.env.TOKEN);

const log = message => {
console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
}; 

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://pikabot-discordjs.firebaseio.com"
});
var ref = firebase.database();

let levelsData = {};
let levels = ref.ref('/level');
let serverData = {};
let servers = ref.ref('/servers');
let moneyData = {};
let money = ref.ref('/money');
let userData = {};
let users = ref.ref('/users');

function databaseUpdate(reference, file){
    reference.update(file);
  }

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err); 
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`); 
    log(`Loading Command: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.modules = new Discord.Collection();
fs.readdir('./modules/', (err, modules) => {
  if (err) console.error(err); 
  log(`Loading a total of ${modules.length} modules.`);
  modules.forEach(m => {
    let loadData = require(`./modules/${m}`); 
    log(`Loading Module: ${loadData.moduledata.name}`);
    client.modules.set(loadData.moduledata.name, loadData);
  });
});

fs.readdir('./events/', (err, events) => {
  if (err) console.error(err); 
  log(`Loading a total of ${events.length} events.`);
  events.forEach(e => {
    let loadData = require(`./events/${e}`);
    log(`Loading Event: ${e}`);
  });
});

client.reload = command => { 
  return new Promise((resolve, reject) => {
    try { 
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

/* Function needs testing */
client.elevation = message => {
  let permlvl = 0;
  if (message.author.id === config.botOwner) permlvl = 4;
  return permlvl;
};
/* End of function Elevation */

process.on("unhandledRejection", err => {
console.log(err.stack);
});
