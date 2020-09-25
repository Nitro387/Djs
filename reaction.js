const Discord = require("discord.js");

module.exports.run = async (client,receivedMessage, arguments) => {  
    
       if(!receivedMessage.member.hasPermission('KICK_MEMBERS')) return receivedMessage.channel.send('**You do not have Permission to use the Reactionrestrict command!**')
  
       const member = receivedMessage.mentions.members.first()
  
       if(!receivedMessage.guild.me.hasPermission('KICK_MEMBERS')) return receivedMessage.channel.send('**I do not have Permission to Reactionrestrict user**')
       
       if(!member) return receivedMessage.channel.send(`**Please Mention the user that you want restricted**`)

       if(member.id === receivedMessage.author.id) return receivedMessage.channel.send(`**You can not be Restricted from Reacting**`)
  
       let Reactionrestrictrole = receivedMessage.guild.roles.cache.find(r => r.name === 'Reactionrestrict')
      
       if(!Reactionrestrictrole) return receivedMessage.channel.send(`**I can not find the Role Reactionrestrict you must make one**`)
  
       member.roles.add(Reactionrestrictrole)      
        
       receivedMessage.channel.send(`Succesfully Restricted Reactions from **${member.user.tag}**`);
   }
	

module.exports.config = {
    name: "reactionrestrict",
    description: "Restrict user from reactions",
    usage: "Reactionrestrict <user> [reason] ",
    category: "Moderation",
    example: "reactionrestrict",
    accessableby: "Mod",
    aliases: ["Reactionrestrict"]
}