//==============================================================
//INFORMAÇÕES | IMPORT's
//==============================================================
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
//const websocket = require(WebSocketPacketManager.js);
//const tokenfile = require("./token.json");
const token = process.env.token;
const fs = require("fs");
//test

const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();
// let xp = require("./xp.json");
//==============================================================
//INFORMAÇÕES | EXPORT's
//==============================================================
fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Não foi possível encontrar o(s) comando(s).");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} Carregado!`);
    bot.commands.set(props.help.name, props);
  });
});
//==============================================================
//RICK PRESENCE
//==============================================================

bot.on("ready", async () => {
  console.log(`${bot.user.username} Estar Online em ${bot.guilds.size} server(s)!`);

  bot.user.setActivity("Nada🤔Mas meu prefix é % 😅", {type: "PLAYING"});

  //bot.user.setGame("on SourceCade!");

});
//==============================================================
//PARA AS MENSAGENS FUNCIONAREM
//==============================================================
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});
//==============================================================
//MUSIC
//==============================================================

//==============================================================
//WELCOME | LEAVE
//==============================================================

//==============================================================
//WELCOME
//==============================================================
// client.on('guildMemberAdd', async member => {
//
//   let fetchwelcome = await db.fetch(`wmsg_${member.guild.id}`);
//   let fetchchannel = await db.fetch(`wchannel_${member.guild.id}`);
//   let fetchautorole = await db.fetch(`autorole_${member.guild.id}`);
//
//   let welcome;
//   let channel;
//   let autorole;
//
//   if(fetchwelcome == null) welcome = "Seja bem vindo ao {server}, {user}. Leia as regras";
//   else welcome = fetchwelcome
//
//   if(fetchchannel == null) return;
//   else channel = fetchchannel
//
//   if(fetchautorole == null) return;
//   else autorole = fetchautorole
//
//   try {
//
//     let role = member.guid.roles.get(autorole);
//     if(!role) return
//     else member.addrole(role);
//
//     member.guild.channel.get(channel).send({embed: {  Description: welcome.replace('{user}', member.user).replace('{members}', member.guild.memberCount).repace('{server}', member.guild.name) }});
//
//   } catch(e) {
//     return;
//   }
//
// });
//==============================================================
//LEAVE
//==============================================================
// client.on('guildMemberRemove', async member => {
//
//   let fetchleave = await db.fetch(`lmsg_${member.guild.id}`);
//   let fetchchannel = await db.fetch(`lchannel_${member.guild.id}`);
//
//
//   let leave;
//   let channel;
//
//
//   if(fetchleave == null) leave = "É uma pena. {user} deixou {server}.";
//   else leave = fetchleave
//
//   if(fetchchannel == null) return;
//   else channel = fetchchannel
//
//   try {
//     member.guild.channel.get(channel).send({embed: {  Description: leave.replace('{user}', member.user).replace('{members}', member.guild.memberCount).repace('{server}', member.guild.name) }});
//
//   } catch(e) {
//     return;
//   }
//
// });
//==============================================================
//LEVEL UP
//==============================================================
// let xpAdd = Math.floor(Math.random() * 7) + 8;
//   console.log(xpAdd);
//
//   if(!xp[message.author.id]){
//     xp[message.author.id] = {
//       xp: 0,
//       level: 1
//     };
//   }
//
//
//   let curxp = xp[message.author.id].xp;
//   let curlvl = xp[message.author.id].level;
//   let nxtLvl = xp[message.author.id].level * 300;
//   xp[message.author.id].xp =  curxp + xpAdd;
//   if(nxtLvl <= xp[message.author.id].xp){
//     xp[message.author.id].level = curlvl + 1;
//     let lvlup = new Discord.RichEmbed()
//     .setTitle("Level Up!")
//     .setColor(purple)
//     .addField("Próximo Nível", curlvl + 1);
//
//     message.channel.send(lvlup).then(msg => {msg.delete(5000)});
//   }
//   fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
//     if(err) console.log(err)
//});
//==============================================================
//PRO BOT FUNCIONAR
//==============================================================
//bot.login(botconfig.token);
//bot.login(tokenfile.token);
bot.login(token);
//==============================================================
//
//==============================================================
