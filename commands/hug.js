exports.run = (client, message, args) => {
const Discord = require("discord.js");
if (!args[0]) return message.reply("mention someone to use this command.");
const mention = `<@${message.mentions.users.first().id}>`;
const author = `<@${message.author.id}>`;

var nummsg = Math.floor((Math.random() * 10) + 1);
 var msg

 if (nummsg == 1)

  {

  msg = `https://media.giphy.com/media/mwPFQgr7vrwDm/giphy.gif`;

  }

  else if (nummsg == 2)

  {

  msg =`https://m.popkey.co/fe4b34/A6Y1m.gif`;

  }

  else if (nummsg == 3)

  {

  msg =`https://media.tenor.com/images/630763778dde12ea9fe4a03f1e9a325d/tenor.gif`;

  }

  else if (nummsg == 4)

  {

  msg =`https://media.tenor.com/images/f8d7f88c57e7111614002aafd22f3976/tenor.gif`;

  }


  else if (nummsg == 5)

  {

  msg =`https://media.tenor.com/images/65a94929912b4c5ab8143595631b6e8e/tenor.gif`;

  }


  else if (nummsg == 6)

  {

  msg =`https://68.media.tumblr.com/e790af0168cd80394b7d792dde07407b/tumblr_o76qfcMiFn1sk1rjvo1_400.gif`;

  }

else if (nummsg == 7)

  {

  msg =`https://68.media.tumblr.com/a9a8189543ae717cf91982cc59ce7180/tumblr_oo66uowE8K1sori6yo1_250.gif`;

}

else if (nummsg == 8)

  {

  msg =`https://media2.giphy.com/media/vDdPekIaWDzKE/giphy_s.gif`;

}


  else if (nummsg == 9)

  {

  msg =`https://media.tenor.com/images/cb5e6e46932ee62b697557ddad51693d/tenor.gif`;

  }

  else if (nummsg == 10)

  {

  msg =`https://media.giphy.com/media/8tpiC1JAYVMFq/giphy.gif`;

  }
  message.channel.send( `_${author} hugged ${mention}!_` , {files: [msg]});

}




exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};


exports.help = {

  name: 'hug',

  description: 'hug someone 💑',

  usage: 'hug [mention]',

  module: 'Fun',

  permit: ' ',

  alias: ' '

};
