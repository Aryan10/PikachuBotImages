exports.run = (client, message, args) => {
const Discord = require("discord.js");
if (!args[0]) return message.reply("mention someone to use this command.");
const mention = `<@${message.mentions.users.first().id}>`;
const author = `<@${message.author.id}>`;

var nummsg = Math.floor((Math.random() * 10) + 1);
 var msg

 if (nummsg == 1)

  {

  msg = `https://media.giphy.com/media/5GdhgaBpA3oCA/giphy.gif`;

  }

  else if (nummsg == 2)

  {

  msg =`https://media.giphy.com/media/3o7qDVQ2GrFAf1MVgc/giphy.gif`;

  }

  else if (nummsg == 3)

  {

  msg =`https://media.giphy.com/media/KMuPz4KDkJuBq/giphy.gif`;

  }

  else if (nummsg == 4)

  {

  msg =`https://media.giphy.com/media/3og0IvIXD1UrcEvNmw/giphy.gif`;

  }


  else if (nummsg == 5)

  {

  msg =`https://media.giphy.com/media/COhjzNhZAeDmw/giphy.gif`;

  }


  else if (nummsg == 6)

  {

  msg =`https://media.giphy.com/media/7jkW8DHHawCg8/giphy.gif`;

  }

else if (nummsg == 7)

  {

  msg =`https://media.giphy.com/media/CE1sk31EVmjNS/giphy.gif`;

}

else if (nummsg == 8)

  {

  msg =`https://media1.giphy.com/media/G3va31oEEnIkM/200.webp#117-grid1`;

}


  else if (nummsg == 9)

  {

  msg =`https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif`;

  }

  else if (nummsg == 10)

  {

  msg =`https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif`;

  }
  message.channel.send( `_${author} kissed ${mention}!_` , {files: [msg]});

}




exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};


exports.help = {

  name: 'kiss',

  description: 'kiss someone 💑',

  usage: 'kiss [mention]',

  module: 'Fun',

  permit: ' ',

  alias: ' '

};
