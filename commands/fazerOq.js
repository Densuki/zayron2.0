const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

//==============================================================
//MODELO DE MENSAGENS POR EMBED
//==============================================================
    //  message.delete().catch(O_o=>{});

    let fazerEmbed = new Discord.RichEmbed()
    .setColor("#5F04B4") //ROXO

    .addField("http://prntscr.com/jhraie");

      return message.channel.send(fazerEmbed);

}

module.exports.help = {
  name:"fazer oq"
}
