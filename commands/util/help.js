const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription(`Get all the commands`),
    async execute(interaction) {
        const HelpEmbed = new EmbedBuilder()
            .setColor('DarkVividPink')
            .setURL('https://discord.gg/xF7C3Cf37j')
            .setTitle('Commands')
            .setDescription('This is the list of commands I currently support\nIf you want to report a grammar mistake or make a suggestion, join the supportserver.')
            .addFields(
                { name: 'Help', value: `This message!\nUsage: </help:1016090136418713690>`, inline: true },
                { name: 'Topic', value: `Get a random subject to talk about!\nUsage: </topic:1015765607838400542>`, inline: true },
                { name: 'Server', value: `Get the info of the current server!\nUsage: </server:1022601385914667113>`, inline: true },
                { name: 'Ping', value: `Gets the ping between command send and the interaction created.\nUsage: </ping:1022601385914667112>`, inline: true },
                { name: 'User', value: `This command gives you information about your account, or another user!\nUsage: </user:1022601385914667115>`, inline: true },
                { name: 'Botinfo', value: `Grants you with stats and general information about this bot!\nUsage: </botinfo:1022987552787017748>`, inline: true }
            )
            
            
        await interaction.reply({ embeds: [HelpEmbed] })
    }
}
