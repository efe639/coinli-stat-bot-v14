const { EmbedBuilder } = require("discord.js");
const DB = require("orio.db")

exports.run = async (client, message, args) => {

    const pointLevel = DB.fetch(`point_${message.guild.id}${message.author.id}`) || 0
    const pointLevel1 = DB.fetch(`pointss_${message.author.id}`)

    if(!DB.fetch(`points_${message.guild.id}`)) {
      message.reply({ content: `Your point is **${pointLevel}**! 1` })
      DB.set(`points_${message.guild.id}`, [])
      DB.push(`points_${message.guild.id}`, [message.author.id])
      DB.set(`pointss_${message.author.id}`, true)
    } else if(!pointLevel1) {
      message.reply({ content: `Your point is **${pointLevel}**! 2` })
      DB.set(`pointss_${message.author.id}`, true)
      DB.push(`points_${message.guild.id}`, [message.author.id])
  } else {
    message.reply({ content: `Your point is **${pointLevel}**! 3` })
  }
  

};
exports.conf = {
  aliases: ["p"]
};

exports.help = {
  name: "point"
};
