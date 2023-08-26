const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { invite } = require('../../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('welcome')
        .setDescription(`Shows an infopage about this bot!`),
    async execute(interaction) {
        const welcomeMsg = new EmbedBuilder()
            .setColor('DarkVividPink')
            .setAuthor({ name: 'Theezakje', iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setURL(invite)
            .setDescription(`Hi, and thanks for using Theezakje. This message will tell you what this bot does, and why I started this project!`)
            .addFields(
                { name: 'Why:', value: `Simply said, I had no idea what i wanted to do as project, then came this idea to my mind, Ever since then I have been working on it.`, inline: false },
                { name: 'What does it do', value: `This bot has a few commands, the main command is </topic:1023000305702551627>, Which gives the user a subject to talk about. I also added some misc commands to it, see </help:1023000305702551624> for all commands!`},
                { name: 'Official Theezakje server', value: `Join [here](${invite})`, inline: true}
            )
        interaction.reply({ embeds: [welcomeMsg], ephemeral: true})
            
    }
}