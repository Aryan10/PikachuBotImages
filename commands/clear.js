exports.run = (client, message, args) => {

let guild = message.guild;
const params = message.content.split(" ").slice(1);

if (guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
{
    if(guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    {
        /* deleting the message */
        let messagecount = parseInt(params[0]) + 1;
        if(messagecount > 100){messagecount=100;}
        message.channel.fetchMessages({limit: messagecount}).then(messages => {
            let msg_array = messages.array(); 
            message.channel.bulkDelete(msg_array);
            messagecount = msg_array.length;
            message.channel.send(":warning: " + messagecount + ` message has been deleted from **${message.channel.name}** !!!`).then(m => m.delete(7000));
            console.log(messagecount + ` message has been deleted from **${message.channel.name}** on server **${message.guild.name}** by **${message.author.username}**`);
            });
        /* deleting ends here */
    }else{
        message.channel.send("I dont have the permission to delte messages.").then(m => m.delete(7000));
    }
}else{
    message.author.send("You dont have the permission to delete messages.").then(m => m.delete(7000));
}
return;
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['clr', 'prune', 'purge'],
  permLevel: 0
};

exports.help = {
  name: 'clear',
  description: 'Clears X number of messages.',
  usage: 'clear [number]',
  module: 'Admin',
  permit: 'Requires Manage Messages Server Permission',
  alias: '/ clr / prune / purge'
};
