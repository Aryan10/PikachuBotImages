module.exports = member => {

  var nummsg = Math.floor((Math.random() * 7) + 1);
  let guild = member.guild;
  let client = member.client;
  const Discord = require("discord.js");
  var msg;
  if (nummsg == 1)
  {
  msg=`\nPlease say goodbye to **${member.user.tag}** we will miss you!\n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 2)
  {
  msg=`\n**${member.user.tag}** Ran away seeing a :beetle: !!!\n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 3)
  {
  msg=`\n**${member.user.tag}** Ran away seeing a :snake::stuck_out_tongue_winking_eye:\n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 4)
  {
  msg=`\n**${member.user.tag}** left without saying bye :neutral_face:\n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 5) 
  {
  msg=`\nWe have lost our player **${member.user.tag}**!\n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 6) 
  {
  msg=`\nI have sensed something weird about ${member.user.tag}!\n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else 
  {
  msg=`\n**${member.user.username}** ran away in a hurry.\n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  const embed = new Discord.RichEmbed()
  .setAuthor(client.user.username,client.user.avatarURL)
  .setColor(0xE0082d)
  .setDescription(msg)
  .setThumbnail(member.user.displayAvatarURL)
  .setFooter(`User Leave`)
  .setTimestamp()
  let ch = guild.channels.filter(c=>c.name.includes("bye")).first();
  if (!ch) {
    ch = guild.channels.filter(c=>c.name.includes("leave")).first();
    if (!ch) return;
  }
  ch.send({embed});								    
}
