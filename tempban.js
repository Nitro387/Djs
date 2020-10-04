const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    let Member = message.mentions.users.first();
    let reason = args.slice(2).join(" ");
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      let invalidEmbed = new Discord.MessageEmbed()
      .setTitle("Invalid Permissions!")
      .addField("Permissions Required:", "Ban Members")
      .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL());
      message.channel.send(invalidEmbed);
    } else {
      if(!Member) return message.channel.send("Please mention a user!")
      if(!reason) reason = "No reason provided"
      if(!args[1]) return message.channel.send("Please provide the time. Usage: <prefix>tempban <user> <time> <reason>")
      if(!args[1].endsWith("d")&&!args[1].endsWith("h")&&!args[1].endsWith("m")&&!args[1].endsWith("s")) return message.channel.send("Please specify the correct time format")
      if(isNaN(args[1][0])) return message.channel.send("That is not a Number")
  
  
      const user = message.mentions.users.first();
  
      if (user) {
  
        const member = message.guild.member(user);
        const bannedMember = bot.users.fetch(member);
  
        if (member) {
  
          member
            .ban({
              reason: reason,
            })
            .then(() => {
              message.channel.send(`Successfully Tempbanned **${user.tag}**`)
            }).catch((err) => {
              let errEmbed = new Discord.MessageEmbed()
              .setColor("RED")
              .addField("Uh oh, this wasn't supposed to happen", "```js\n" + err + "```")
              message.channel.send(errEmbed);
              })
  
            let Embed2 = new Discord.MessageEmbed()
            .setTitle(`❯ Tempbanned from ${message.guild.name}`)
            .setThumbnail(bot.user.displayAvatarURL({size: 2048, dynamic: true, format: "png"}))
            .addField("❯ Moderator:", `${message.author.tag}\n\`ID: (${message.author.id})\``)
            .addField("❯ Reason:", reason)
            Member.send(Embed2).catch((err) => {
              let errEmbed = new Discord.MessageEmbed()
              .setColor("RED")
              .addField("Uh oh, this wasn't supposed to happen", "```js\n" + err + "```")
              message.channel.send(errEmbed);
              })

            setTimeout(() => {
                message.guild.members.unban(user).then(() => {
                message.channel.send(`Successfully Unbanned **${Member.tag}**`)
               })
            }, ms(args[1]))
        } else {
  
          let embed = new Discord.MessageEmbed()
          embed.setDescription("That user isn't in this guild!")
          embed.setColor("RED")
          message.channel.send(embed);
        }
      }
    }}


module.exports.config = {
    name: "tempban",
    description: "Bans a user with a reason",
    usage: "ban <user> [reason]",
    category: "Moderation",
    example: "ban @Wumpus#0001 for swearing at the guild owner",
    accessableby: "Admins",
    aliases: ["banuser", "banmember"]
}