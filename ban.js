const Discord = require("discord.js");

module.exports.run = async (client, receivedMessage, args) => {  

    
        if(!receivedMessage.member.hasPermission("BAN_MEMBERS")) return receivedMessage.channel.send("You do not have **Permission** to ban user.");
       {
                 const member = receivedMessage.mentions.members.first() || receivedMessage.guild.members.cache.get(args[0]);
                 let reason = args.slice(1).join(" ") 
                
                 if (!member) return receivedMessage.channel.send(`**You didn't Mention the User to Ban!**`); 
      
                 if (!reason) reason = "No reason provided"
      
                 if (!reason) return receivedMessage.channel.send(`**You didn't Write a Reason!**`)

                 let ban = new Discord.MessageEmbed()
                 .setColor('#f11414')
                 .setAuthor(`${receivedMessage.author.tag} (${receivedMessage.author.id})`, receivedMessage.author.avatarURL({dynamic: true}))
                 .setThumbnail(member.user.avatarURL({dynamic: true}))
                 .setDescription(`
                  **Member:** ${member.user.tag} (${member.user.id})
                  **Action:** Ban
                  **Reason:** ${reason}
                   `)
                 .setTimestamp()
        
                 await member.send(ban)
                 member.ban({reason: reason})
                 .then(() => {
      
                  receivedMessage.channel.send(`Successfully banned **${member.user.tag}**`);
                
                 })
                 .catch(err => {
                
                 channel.send(`I was Unable to Ban **${member.user.tag}**`) 
        }
)}}

module.exports.config = {
    name: "ban",
    description: "bans users from the guild",
    usage: "?ban <user> [reason]",
    category: "Moderation",
    example: "ban",
    accessableby: "Mod, Admin",
    aliases: ["ban","Ban"]
}