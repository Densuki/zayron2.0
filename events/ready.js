const Discord = require("discord.js");

module.exports = bot => {

setInterval(function() {
    let act_list = [
      "a conspiração contra a humanidade", 
      "as almas para o Lunik",
      `por... ${(bot.uptime / 3600000).toFixed(2)} h!`,
      `com ${(bot.ping).toFixed(0)} ping!`
    ];
    let status_mode = [
      "ONLINE",
      "IDLE"
    ];
    let status_list = [
      "PLAYING",
      "LISTING",
      "WATCHING",
      "STREAMING"
    ];
  
    let randomAct = act_list[Math.floor(Math.random) * act_list.length];
    let randomMode = status_mode[Math.floor(Math.random) * status_mode.length];
    let randomStatus = status_list[Math.floor(Math.random) * status_list.length];
  
    bot.user.setActivity(randomAct, {type: "LISTING"});
    //bot.user.setActivity("As almas para o Lunik", {type: "PLAYING"}); //Nada🤔Mas meu prefix é % 😅
  
  }, 5000)
}