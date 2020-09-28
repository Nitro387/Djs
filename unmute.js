const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {  
       if (!receivedMessage.member.hasPermission('MANAGE_ROLES')) return receivedMessage.channel.send('You do not have **Permission** to Unmute User')
  
       const member = receivedMessage.mentions.members.first() || receivedMessage.guild.members.cache.get(args[0]);
  
       if (!receivedMessage.guild.me.hasPermission('MANAGE_ROLES')) return receivedMessage.channel.send('I do not have **Permission** to Manage Roles')
  
       const unEmbed = new Discord.MessageEmbed()
       
       if (!member) return receivedMessage.channel.send(`Please mention the Member you would like to **unmute**!`)
  
  
       let muterole = receivedMessage.guild.roles.cache.find(r => r.name === 'Muted')
      
       if(!muterole) return receivedMessage.channel.send(`user has not been Muted!`)
  
       member.roles.remove(muterole)
  
        await receivedMessage.channel.send(`Successfully unmuted **${member.user.tag}**`);
       }
   
          module.exports.config = {
            name: "unmute",
            description: "Unmutes user who has been Muted",
            usage: "?unmute <user> [reason]",
            category: "Moderation",
            example: "unmute",
            accessableby: "Mod",
            aliases: ["unmute","Unmute"]
        }