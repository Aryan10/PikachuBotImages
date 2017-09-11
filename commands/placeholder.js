exports.run = (client, message, args) => {
  let params = message.content.toLowerCase().split(" ").slice(1);
  let [width, height] = params.join(" ").replace(/ /g, "").split("x");
  let str = "Placeholder for " + width + "×" + height;
  if (!height) {
    [width, height] = [width, "100"];
    str = "Specify the height with width. `width x height`";
  }
  if (!width) {
    [width, height] = ["100", "100"];
    str = "Specify the width and height like this `width x height`.";
  }
  const img = `http://via.placeholder.com/${width}x${height}`;
  message.channel.send(str, {files: [`${img}.png`]});
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'placeholder',
  description: 'Sends a place holder image',
  usage: 'placeholder width X height',
  module: 'Other',
  permit: ' ',
  alias: ' '
};
