const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //%report @ned Esta é a razão (Reação?)


    if (args[0] == "help"){
      message.reply("```Aqui será dado uma amostra do que tem na economia do servidor.```\n\n**PREÇOS RELACIONADOS AOS ITENS TINKER's! Este artigo será dividido em algumas partes.**\nDigite `%tinkers` que mostrarei os preços e tabela relacionadas à ela.");
      return;
    }

    let precosEmbed = new Discord.RichEmbed()
    .setDescription("**Olá!** *Use os comandos em seu devido local.*\n\n:rocket: **EpicMC Network**")
    .setColor("#5F04B4") //ROXO
    .addField(":heartpulse: **| Miniature Heart |**",":heart: Red = 450c\n:yellow_heart: Yellow = 900c\n:green_heart: Green = 1.800c")
    .addField("**================**","Empty Canister = 80c\nRed Heart Canister = 530c\nYellow Heart Canister = 1.060c\nGreen Heart Canister = 2.120c\nKnapsack = 108c")
    .addField(":shield: **| Armaduras |**","================")
    .addField("**__| Wooden SET |__**","Helmet = 10c\nChestplate = 16c\nLeggings = 14c\nBoots = 8c\n\n(**__Total = 48c__**)")
    .addField("**================**","**================**")
    .addField("**__| Traveller's SET |__**","Googles = 36c\nVest = 60c\nWings = 262c\nGloves = 24c\nBoots = 48c\nBelt = 72c\n\n(**__Total = 502c__**)");

    //message.channel.send(precosEmbed);

    let economychannel = message.guild.channels.find(`name`, "comandos");
    //Nome do canal (acho que ele cria o canal 🤔)
    if(!economychannel) return message.channel.send("não foi possível encontrar o canal de comandos. Cria,  Rué");


    message.delete().catch(O_o=>{});
    economychannel.send(precosEmbed);

}

module.exports.help = {
  name:"tinkers"
}
