const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://random.cat/meow`);
  
  let dogembed = new Discord.RichEmbed()

      .setColor("#5F04B4") //ROXO
      .setTitle(":cat: Meow!!")
      .setImage(body.file);
      
  message.channel.send(dogembed);    

}

module.exports.help = {
  name:"cat"
}
