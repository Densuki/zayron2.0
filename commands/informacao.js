const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setDescription("**Informações**")
      .setColor("#5F04B4") //ROXO
      .setThumbnail(bicon)
      .addField("*Para ajudar a organizar melhor, e ter maior facilidade pra saber quais mods vocês querem mandem as sugestões de mod no seguinte formato:*")
      .addField("```Nome:```", **Ender.IO** )
      .addField("```Descrição:```", **É um modpack técnico que adiciona novas máquinas e itens ao modpack. útiliza Redstone Flux, ótimo para farms e facilita nas mesmas. Possui uma armadura única com upgrades como também, ferramentas com a mesma mecânica.** )
      .addField("```Função:```", **Adiciona várias máquinas, e muitos outros itens que ajudam e deixa o servidor mais legal.** )
      .addField("```Argumente do porque de adicionarmos no modpack:```", **Ele seria útil para aqueles que estão iniciando no modpack, como também, para aqueles que querem fazer farm utilizando mods diferentes. Tem um sistema diferenciado como também máquinas que auxiliam em diversas coisas como um quebra galho. Fácil de se usar e de iniciar.** )
      .addField("```Link:```", https://minecraft.curseforge.com/projects/ender-io )
      .addField("**Somente serão aceitas sugestões de mods, que estejam no curse. Mods como Witchery e Ars Magica não serão aceitas, pois os mesmo tem grande quantia de bugs.**\n\n Talvez em um futuro possam ser aceitos.");

}

module.exports.help = {
  name:"informacao"
}
