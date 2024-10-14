const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "support",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "https://discord.gg/kBRhD3h4TE";
      const githubLink = "https://x.com/InazumaItalia?s=20";
      const youtubeLink = "https://www.youtube.com/@InazumaItalia";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: '-', 
              url: 'https://discord.gg/kBRhD3h4TE'
          })
            .setDescription(`➡️ **Join our Discord server:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- Twitter - ${githubLink}\n- YouTube - ${youtubeLink}`)
            .setImage('-')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};
