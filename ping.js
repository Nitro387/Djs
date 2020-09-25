const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const msg = await message.channel.send("⌛ Pinging...")
        let Embed = new Discord.MessageEmbed()
        .setTitle("Pong! 🏓")
        .addField("📝 Message Edit:", msg.createdTimestamp - message.createdTimestamp)
        .addField("🌐 WebSocket Latency:", Math.round(client.ws.ping))
        .setColor("BLUE")
        .setTimestamp()
        msg.edit(Embed)
        await msg.edit("")
}

module.exports.config = {
    name: "ping",
    description: "Shows the message edit, and the websocket latency",
    usage: "ping",
    category: "Fun",
    example: "ping",
    accessableby: "Everyone",
    aliases: ["pingpong", "latency", "ms"]
}