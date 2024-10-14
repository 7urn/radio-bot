const { EmbedBuilder } = require('discord.js')
const config = require("../config.js");

module.exports = {
  name: "ping",
  description: "Controlla la latenza del bot",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {


    try {

      const start = Date.now();
      interaction.reply("Pinging....(farà schifo :p)").then(msg => {
        const end = Date.now();
        const embed = new EmbedBuilder()
          .setColor(config.embedColor)
          .setTitle(`Bot Latency`)
          .setDescription(`**Pong** : ${end - start}ms`)
        return interaction.editReply({ embeds: [embed] }).catch(e => { });
      }).catch(err => { })

    } catch (e) {
    console.error(e); 
  }
  },
};
