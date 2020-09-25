const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {  

    if(message.guild == null) return message.channel.send(`**This command is only usable in Servers.**`)

    if (message.author.bot) return;

    var person = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Your Not allowed to use this command');

    const thEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(` You Don't have Permissions to add roles`)
    if (!message.guild.me.hasPermission('ADD_ROLES')) return message.channel.send(thEmbed)

    const unEmbed = new Discord.MessageEmbed()
    .setTitle(`Command: ?mute`)
    .setDescription(`
     **Description:** Mute a member so they cannot type or speak, time limit in minutes.
     **Cooldown:** 0 seconds
     **Usage:** ?mute [user] [limit] [reason]
     **Example:**
     ?mute @user 10s Shitposting
     ?mute <id> 10m spamming
     ?mute NoobLance 5h He asked for it
     ?mute NoobLance 1d Racist slurs
    `)
    if (!person) return message.channel.send(unEmbed); 

    let role = message.guild.roles.cache.find(role => role.name === "Muted");

    if (!role) return message.channel.send("Couldn't find the mute role, so please create a role called `Muted`")
    let time = args[1];
    if (!time) {
      return message.channel.send("**You didn\'t specify a time!**");
    }
   
    if (isNaN(ms(time))) return message.channel.send("**That is not a Number!**")
     

    if (ms(time) >= 2160000000) return message.channel.send('**Your time you have set is to high**')
    let reason = args.slice(2).join(' ');

    if (!reason) reason = "No reason provided";

    const user = message.mentions.users.first();

    const reeembed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`You cannot mute ${person.user.username} Since you are lower than ${person.user.username}`)
    if (message.guild.roles.cache.find(role => role.id === message.member.roles.highest.id).position < message.guild.roles.cache.find(role => role.id === person.roles.highest.id).position) return message.send(reeembed)

    person.roles.add(role);

    message.channel.send(`Successfully muted **${person.user.tag}**`)

    setTimeout(function () {

      person.roles.remove(role);

    }, ms(time))
   }

module.exports.config = {
    name: "mute",
    description: "Mutes users for the limit you mute them for",
    usage: "?mute <user> [reason]",
    category: "Moderation",
    example: "mute",
    accessableby: "Mod",
    aliases: ["Tempmute","Mute"]
}