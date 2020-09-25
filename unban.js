const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {  
        let bannedMember = await client.users.fetch(args[0])
              if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You don\'t have enough perms to use this command.');
              if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Seems like I don\'t have enough **perms to unban someone.');
              let reason = args.slice(1).join(' ');
              if (args.length < 1) return message.channel.send("I can\'t unban nobody.");
              if(isNaN(args[0])) return message.channel.send("That is not a valid user ID!");
              if (!reason) reason = "No reason provided";
              message.guild.members.unban(bannedMember).then( () => {             
             message.channel.send(` Succesfully unbanned **${bannedMember.username.tag}**`);
      
          return;
         })
      }

module.exports.config = {
    name: "unban",
    description: "unbans user if banned from the guild",
    usage: "unban <id> [Reason]",
    category: "Moderation",
    example: "uban <id> [reason]",
    accessableby: "Mod",
    aliases: ["Uban"]
}