const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const moment = require('moment');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('botinfo')
        .setDescription(`Get all info about the bot`),
    async execute(interaction) {
        function Conferterseconds(millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }
        let Uptimebot = Conferterseconds(client.uptime)
        const client = interaction.client
        const Response = new EmbedBuilder()
            .setTitle('Theezakje')
            .setURL('https://discord.com/oauth2/authorize?client_id=898599750612447263&scope=bot&permissions=117760&redirect_uri=https%3A%2F%2Fdiscord.gg%2FxF7C3Cf37j')
            .setAuthor({ name: 'Theezakje', iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setColor('DarkVividPink')
            .addFields(
                { name: 'The bot profile', value: `ID: ${client.user.id}\n full username: ${client.user.tag}\n username: ${client.user.username}`, inline: false },
                { name: 'Client information', value: `**Bots ID:** ${client.user.id}\n**Created at:** ${moment(client.user.createdAt).format('MMMM Do YYYY, H:mm:ss')}` },
                { name: 'General stats', value: `**Total servers:** ${client.guilds.cache.size}\n**Total channels:** ${client.channels.cache.size}\n**Uptime:** ${Uptimebot}`, inline: false }
            )
        interaction.reply({ embeds: [Response] })

    }
}