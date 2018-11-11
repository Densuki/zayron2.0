const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //%report @ned Esta é a razão (Reação?)


    if (args[0] == "help"){
      message.reply("```Aqui será dado uma amostra do que tem na economia do servidor```");
      return;
    }

    let precosEmbed = new Discord.RichEmbed()
    .setDescription("**Olá!** {user}, *Use os comandos em seu devido local.* \n\n **digite um dos comandos abaixo para entrar na tabela de preços que deseja:** \n\n :rocket: **EpicMC Network** \n\n **?vanilla | ?applied | ?tinkers | ?draconic | ?ic2 | ?thermal | ?factory | ?ender |**")
    .setColor("#5F04B4") //ROXO
    .addField(":exclamation: **Esteja ciente do PREFIX do BOT!** **O PREFIX deste artigo é o padrão.**", "**:warning:  Avisos**")
    //.addField("**:warning:  Avisos**")
    .addField("**Essa é a economia da Netowrk. Caso você queira vender com preços maiores é por sua conta.** **Porém, qualquer preço que esteja a baixo do valor que foi proposto em alguma desta lista, o usuário será punido!**")
    .addField("**Essa lista sempre será atualizada, fique de olho.**")
    .addField(":calendar_spiral: **As listas serão atualizadas.**")
    .addField("**FIQUE ATENTO(A)!**");

    message.channel.send(precosEmbed);

    //let reportschannel = message.guild.channels.find(`name`, "canal-de-sugestões");
    //Nome do canal (acho que ele cria o canal 🤔)
    //if(!reportschannel) return message.channel.send("não foi possível encontrar o canal de sugestões.");


    //message.delete().catch(O_o=>{});
    //reportschannel.send(reportEmbed);

}

module.exports.help = {
  name:"preços"
}
