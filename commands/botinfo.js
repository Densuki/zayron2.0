const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setDescription("**Informações do BOT**")
      .setColor("#5F04B4") //ROXO
      .setThumbnail(bicon)
      .addField("**Nome do BOT**", bot.user.username)
      .addField("**Criado em**", bot.user.createdAt)
       .addField("https://discordapp.com/api/oauth2/authorize?client_id=451409543088308227&permissions=8&scope=bot");

      return message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
