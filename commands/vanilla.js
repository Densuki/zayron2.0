const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //%report @ned Esta é a razão (Reação?)


    if (args[0] == "help"){
      message.reply("```Aqui será dado uma amostra do que tem na economia do servidor.```\n\n **PREÇOS RELACIONADOS AOS ITENS VANILLA!**");
      return;
    }
//metion = message.mentions.users.first();
//message.author.send
//<@USER>
//client.users.get("name", "USERNAMEHERE").id;
//<%@ID%>
//@name
//metion = message.author.send;

    let precosEmbed = new Discord.RichEmbed()
    .setDescription("**Olá!** *Use os comandos em seu devido local.* \n\n **digite um dos comandos abaixo para entrar na tabela de preços que deseja:** \n\n :rocket: **EpicMC Network** \n\n **| vanilla | applied | tinkers | draconic | ic2 | thermal | factory | ender |**")
    .setColor("#5F04B4") //ROXO
    .addField("**:fireworks: | Primordiais**",
"Wood [Qualquer madeira] = 2c\n\n
\n\nStick = 1c
\n\nDirt = 1c
\n\nCobblestone = 1c
\n\nStone = 2c
\n\nGravel = 1c
\n\nSand = 1c
\n\nClay = 2c
\n\nIce = 2c
\n\nCharcoal = 3c
\n\nNetherrack = 2c
\n\nSoul Sand = 3c")
    //.addField("**:warning:  Avisos**")
    .addField("**Essa é a economia da Network. Caso você queira vender com preços maiores é por sua conta.** **Porém, qualquer preço que esteja a baixo do valor que foi proposto em alguma desta lista, o usuário será punido!**", "**Essa lista sempre será atualizada, fique de olho.**")
    //.addField("**Essa lista sempre será atualizada, fique de olho.**")
    .addField(":calendar_spiral: **As listas serão atualizadas.**", "**FIQUE ATENTO(A)!**");
    //.addField("**FIQUE ATENTO(A)!**");

    //message.channel.send(precosEmbed);

    let economychannel = message.guild.channels.find(`name`, "comandos");
    //Nome do canal (acho que ele cria o canal 🤔)
    if(!economychannel) return message.channel.send("não foi possível encontrar o canal de comandos. Cria,  Rué");


    message.delete().catch(O_o=>{});
    economychannel.send(precosEmbed);

}

module.exports.help = {
  name:"vanilla"
}