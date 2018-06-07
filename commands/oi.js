const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

//==============================================================
//MODELO DE MENSAGENS
//==============================================================
    //  message.delete().catch(O_o=>{});

      return message.channel.send("Olá! Oi? Chamou?");
}

module.exports.help = {
  name:"zayron"
}
