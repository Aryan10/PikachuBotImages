module.exports = member => {

  var nummsg = Math.floor((Math.random() * 22) + 1);
  let guild = member.guild;
  let client = member.client;
  const Discord = require("discord.js");
  var msg
  if (nummsg == 1)
  {
  msg =`\nPlease welcome **${member.user.username}** to **${guild.name}** \n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 2)
  {
  msg=`\n**${member.user.username}** Is coming with a :knife: ... RUN !!! \n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 3)
  {
  msg=`\nWhy to fear when **${member.user.username}** is here. :smiley:  \n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 4)
  {
  msg=`\n**${member.user.username}** survived the terrorist attack ... **${member.user.username}** will be safe here ... \n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 5)
  {
  msg=`\n**${member.user.username}** is the latest discovery around **${guild.name}**. \n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 6)
{
msg=`\n${member.user.tag}, forget the **DOGS** Beware of **KIDS**😜\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 7)
{
msg=`\n${member.user.tag}, SIT LONG, TALK MUCH, LAUGH OFTEN\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 8)
{
msg=`\nSee ${member.user.tag}, have joined the party.\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 9)
{
msg=`\nYou are looking great👌 ${member.user.tag}. \n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 10)
{
msg=`\n${member.user.tag} DOORBELL BROKEN! Yell **"DING DONG"** loudly :smiley:\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 11)
{
msg=`\nYay, you made it ${member.user.tag}. Now the party can start :smiley:\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 12)
{
msg=`\nWelcome ${member.user.tag}, now time to rock!\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 13)
{
msg=`\nWelcome, ${member.user.tag}, be WISE, don't break rules :slight_smile;\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 14)
{
msg=`\nHey, ${member.user.tag} is now with us. Cheers!\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 15)
{
msg=`\nAwesome, ${member.user.tag} finally arrived :smiley:\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 16)
{
msg=`\nWelcome ${member.user.tag}, hope you will enjoy your stay.\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 17)
{
msg=`\nCome in ${member.user.tag}, we are *Awesome!!!*\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 18)
{
msg=`\n${member.user.tag} wants to be the __very best__!\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 19)
{
msg=`\nEveryone, meet my dearest friend, ${member.user.tag}!\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 20)
{
msg=`\nWow, ${member.user.tag} is now with us!\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 21)
{
msg=`\nMeet ${member.user.tag}, the luckiest person ever!\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
  else 
  {
  msg=`\nPlease welcome **${member.user.username}** to **${guild.name}** \n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  const embed = new Discord.RichEmbed()
  .setAuthor(client.user.username,client.user.avatarURL)
  .setColor(0x66CC00)
  .setDescription(msg)
  .setThumbnail(member.user.displayAvatarURL)
  .setFooter(`User Join`)
  .setTimestamp()
  let ch = guild.channels.filter(c=>c.name.includes("welcome")).first();
  if (!ch) {
    ch = guild.channels.filter(c=>c.name.includes("greet")).first();
    if (!ch) {
      ch = guild.channels.filter(c=>c.name.includes("join")).first();
      if (!ch) return;
    }
  }
  ch.send({embed});
}
