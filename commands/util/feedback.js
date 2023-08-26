const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/main.db')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('feedback')
        .setDescription(`Give feedback or report bugs to the developer`)
        .addStringOption(option => option.setName('feedback').setDescription('The feedback'))
        .addBooleanOption(option => option.setName('contact').setDescription('If I can contact you about this feedback')),
    async execute(interaction) {
        const user = interaction.user
        const feedback = interaction.options.getString('feedback')
        const contact = interaction.options.getBool('contact')
        let id = null
        if (contact){ id = user.id }
    }
}