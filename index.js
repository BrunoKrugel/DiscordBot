const { Client, GatewayIntentBits, Partials } = require('discord.js');
const axios = require('axios');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent], 
    partials: [Partials.Channel]
});

const dotenv = require('dotenv');
dotenv.config();


client.once('ready', () => {
    console.log("Bot has started.");
    client.user.setActivity("status");
});
client.once('reconnecting', () => {
    console.log('Reconnecting!');
});
client.once('disconnect', () => {
    console.log('Disconnect!');
});


client.on("messageCreate", (message) => {

    if (message.author.bot) return;

    if (!message.content.toLowerCase().startsWith(process.env.prefix)) return;

    let content = message.content.slice(command.length);
    const args = content.split(' ');
    
    switch (args[0]) {
        case "ping":
            message.channel.send("Pong!");
            break;
        default :
            message.channel.send("Invalid command.");
            break;
    }
});

client.login(process.env.DISCORD_TOKEN);