const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const moment = require('moment');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription(`Get a user's info`)
        .addUserOption(option => option.setName('target').setDescription('Get the info of another user')),
    async execute(interaction) {
        const target = interaction.options.getUser('target')

        if (target != null){
            const user = interaction.options.getUser('target')
            const response = new EmbedBuilder()
                .setAuthor({ name: `${user.username}`, iconURL: user.displayAvatarURL({ dynamic: true })})
                .setColor('DarkVividPink')
                .addFields(
                    { name: 'public profile', value: `ID: ${user.id}\n full username: ${user.tag}\n username: ${target.username}`, inline: false },
                    { name: 'Discord user since:', value: `${moment(user.createdAt).format('MMMM Do YYYY, H:mm:ss')}`, inline: false},
                    { name: 'Avatar:', value: `[User link](${user.displayAvatarURL({ dynamic: true})})`}
                    )
            await interaction.reply({ embeds: [response]})
        } else {
                const user = interaction.user
                const response = new EmbedBuilder()
                    .setAuthor({ name: `${user.tag}`, iconURL: user.displayAvatarURL({ dynamic: true})})
                    .setColor('DarkVividPink')
                    .addFields(
                        { name: 'public profile', value: `ID: ${user.id}\n full username: ${user.tag}`, inline: false },
                        { name: 'Discord user since:', value: `${moment(user.createdAt).format('MMMM Do YYYY, H:mm:ss')}`, inline: false},
                        { name: 'Avatar:', value: `[User link](${user.displayAvatarURL({ dynamic: true})})`}
                        )
                await interaction.reply({ embeds: [response]})
        }
    }
}