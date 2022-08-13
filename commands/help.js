const { EmbedBuilder } = require("discord.js");

exports.run = async (client, message, args) => {

  const embed = new EmbedBuilder()
  .setColor("#EB459E")
  .setTitle(`${message.guild.name} | Commands`)
  .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
  .setDescription("`!help`,`!lb`,`!p`,`!say`,`!voice`") 
  .setFooter({ text: `Asked by ${message.author.tag}.`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })    
  .setTimestamp()  

  return message.reply({ embeds: [embed] })

};
exports.conf = {
  aliases: ["yardım"]
};

exports.help = {
  name: "help"
};
