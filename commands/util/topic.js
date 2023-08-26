const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/main.db')
const hints = ["Hint: Try to make your answer as detailed as possible to get the most out of this topic", `Hi, Thanks for using Theezakje, This is a reminder bugs at the [support server](https://discord.gg/xF7C3Cf37j) `, " ", " ", " ", " "]

module.exports = {
    data: new SlashCommandBuilder()
        .setName('topic')
        .setDescription('Get a subject to talk about!'),
    async execute(interaction) {
        async function getTopic() {
            return new Promise((resolve, reject) => {
                db.get('SELECT TOPIC FROM topics ORDER BY RANDOM() LIMIT 1', [], async (err, row) => {
                    if (err) throw err
                    resolve(row.TOPIC)
                })

            })
        }
        const topicEmbed = new EmbedBuilder()
            .setColor('DarkVividPink')
            .setTitle('Topic')
            .setDescription(`${await getTopic()}\n${hints[Math.floor(Math.random() * hints.length)]}`)
        await interaction.reply({ embeds: [topicEmbed] })

    },
};