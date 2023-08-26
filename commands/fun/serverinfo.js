const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const moment = require('moment');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription(`Get the stats of this server.`),
    async execute(interaction) {
        const server = interaction.guild
        if (!server.available) return interaction.reply(`I was restricted getting server's stats.`)
        var serverIcon = interaction.guild.iconURL()
        let Verified = server.verified
        let partner = server.partnered
        const members = interaction.guild.members.cache


        const response = new EmbedBuilder()
            .setColor('DarkVividPink')
            .setThumbnail(serverIcon)
            .addFields(
                { name: "**General**", value: `**Server ID**: ${server.id}\n**Server Owner**: <@${server.ownerId}>\n**Server Description:** ${server.description}\n**Server created at:** ${moment(server.createdAt).format('Do MMMM YYYY, H:mm:ss')}`, inline: false },
                { name: '**Numbers**', value: `${server.channels.cache.size} **Channels**\n${members.filter(member => !member.user.bot).size} **Members**\n${members.filter(member => member.user.bot).size} **Bots**\n${server.emojis.cache.size} **emotes**\n${server.roles.cache.size} **Roles**\n${server.premiumSubscriptionCount} **Boosts**` },
                { name: '**Misc**', value: `**Verified:** ${Verified}\n**Partner:** ${partner}\n**Boostlevel: **${server.premiumTier}`, inline: false }

            )

        interaction.reply({ embeds: [response] })
    }
}