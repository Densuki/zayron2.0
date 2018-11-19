const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


BUILDDIR      = _build
EXTRAS       ?= $(BUILDDIR)/extras

.PHONY: main clean

main:
	@echo "Building main facility..."
	build_main $(BUILDDIR)

clean:
	rm -rf $(BUILDDIR)/*

//==============================================================
//MODELO DE MENSAGENS
//==============================================================
    //  message.delete().catch(O_o=>{});

      //return message.channel.send("Olá! Oi? Chamou?");
      return message.chanel.sendCode("fix","Olá! Oi? Chamou?");
}

module.exports.help = {
  name:"zayron"
}
