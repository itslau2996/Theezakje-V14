const { Events } = require('discord.js');
const { Client, Collection, GatewayIntentBits, ActivityType } = require('discord.js');
const { config } = require('dotenv')


module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Logged in as ${client.user.tag}`);
        client.user.setActivity(`Slashcommands in ${client.guilds.cache.size} servers!`, { type: ActivityType.Listening });
        function Status() { client.user.setActivity(`Slashcommands in ${client.guilds.cache.size} servers!`, { type: ActivityType.Listening }); }
        setInterval(Status, 600000);

    },
};
