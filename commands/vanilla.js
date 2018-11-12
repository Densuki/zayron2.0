const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //%report @ned Esta é a razão (Reação?)


    if (args[0] == "help"){
      message.reply("```Aqui será dado uma amostra do que tem na economia do servidor.```\n\n **PREÇOS RELACIONADOS AOS ITENS VANILLA!**");
      return;
    }


    let precosEmbed = new Discord.RichEmbed()
    .setDescription("**Olá!** *Use os comandos em seu devido local.*\n\n:rocket: **EpicMC Network**")
    .setColor("#5F04B4") //ROXO
    .addField("**:fireworks: | Primordiais**","Wood [Qualquer madeira] = 2c\n\nStick = 1c\n\nDirt = 1c\n\nCobblestone = 1c\n\nStone = 2c\n\nGravel = 1c\n\nSand = 1c\n\nClay = 2c\n\nIce = 2c\n\nCharcoal = 3c\n\nNetherrack = 2c\n\nSoul Sand = 3c")
    .addField("**:hammer_pick: | Itens**","Leather = 4c\n\nStrings = 2c\n\nWool = 8c")
    .addField("**:pick: | Minerais**","Coal = 5c\n\nIron Ingot = 8c\n\nGold Ingot = 10c\n\nRedstone = 8c\n\nLápis Lazuli = 15c\n\nDiamond = 15c\n\nEsmerald = 15c\n\nObsidian = 10c")
    .addField("**:gear: | Mecânicos**","Piston = 26c\n\nDropper = 15c\n\nDispenser = 22.5c");
    .addField("**:crossed_swords: | Armas**","Wooden Sword = 2.5c\n\nStone Sword = 4.5c\n\nIron Sword = 16c\n\nDiamond Sword = 30c\n\nGolden Sword = 20c\n\nBow = 7.5c")
    .addField("**:gift: | Micélio**","Human Head (Steve) = 10.000c\n\nZombie Head = 5.000c\n\nSkelecton Head = 2.500c\n\nEnderman Head = 8.000c\n\nWither Skelecton Head = 10.000c\n\nNether Star = 1.000c\n\nBlaze Rod = 300c\n\nBlaze Powder = 150c\n\nEnder Pearl = 30c\n\nGhast tear 80c\n\nEye Of Ender =  35c\n\nNether Wart = 4c\n\nSlime = 4c\n\nApple = 10c");

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
