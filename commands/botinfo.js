const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setDescription("**Informações do BOT**")
      .setColor("#5F04B4") //ROXO
      .setThumbnail(bicon)
      .addField("**Nome do BOT**", bot.user.username)
      .addField("**Criado em**", bot.user.createdAt);

      return message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
