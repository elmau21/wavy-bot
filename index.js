const Discord = require('discord.js')
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })

client.on('messageCreate', async (message) => {

    if (message.channel.type === 'dm') return;
    if (message.author.bot) return;


    let prefix = '-'
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split('/ +/g');
    const command = args.shift().toLowerCase();

    if (command === 'DEVS'){
        message.reply("Glow Up Team")
    };
});
client.login("OTM3NDMzMjUxMzU2NzQ5ODk2.Yfbqvw.j09i5-_T878xZokDiVN8HUwbxdY");