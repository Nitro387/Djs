const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {  
    message.channel.send("**Permissions and overwrites explained in detail:** <https://discordjs.guide/popular-topics/permissions.html>")  
  }
  
  module.exports.config = {
      name: "permissions",
      description: "Permissions commands help",
      usage: "?permissions",
      category: "Helpfull",
      example: ["permissions"],
      accessableby: "Everyone",
      aliases: ["Permissions","Perms"]
  }