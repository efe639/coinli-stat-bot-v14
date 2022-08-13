const { EmbedBuilder } = require("discord.js");
const DB = require("orio.db")
var config = require("../config.js");
const client = require("..");
const prefix = config.prefix;

client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) {

  const pointLevel = DB.fetch(`point_${message.guild.id}${message.author.id}`) || 0
  DB.add(`point_${message.guild.id}${message.author.id}`, 10)

  } else {

  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, message, params);
  }
}

});

