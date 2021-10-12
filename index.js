const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require("./config.json")
const { DiscordTogether } = require('discord-together');

client.once('ready', () => {
    console.log('Bot is online!');
    client.user.setActivity(`${config.prefix}help`);
});

client.discordTogether = new DiscordTogether(client);

client.on('messageCreate', async message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    const args = message.content.slice(config.prefix.length)
    if (args[1] == !undefined) return
    if (args == "help") {
        let embed = new MessageEmbed()
            .setColor('RED')
            .setTitle(`There are 5 activities available:`)
            .setDescription('```youtube,chess,poker,betrayal,fishing,doodlecrew,wordsnack```')
        return message.channel.send({ embeds: [embed] });
    }
    if (args == "uptime") {
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
        const uptime = new MessageEmbed()
            .setColor('RED')
            .addField('UPTIME: ', `${days}days ${hours}hrs ${minutes}min ${seconds}sec`, true)
            .setTimestamp()
        return message.channel.send({ embeds: [uptime] });
    }
    switch (args) {
        case "youtube":
            if (!message.member.voice.channel) return message.channel.send('You need to be in a voice channel')
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
                let embed = new MessageEmbed()
                    .setColor('RED')
                    .setTitle(`Youtube Activity Created!`)
                    .addFields(
                        { name: "Click the link below to join!", value: invite.code }
                    ).setTimestamp()
                    .setFooter(`Created by ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
                return message.channel.send({ embeds: [embed] });
            });
            break
        case "poker":
            if (!message.member.voice.channel) return message.channel.send('You need to be in a voice channel')
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
                let embed = new MessageEmbed()
                    .setColor('RED')
                    .setTitle(`Poker Activity Created!`)
                    .addFields(
                        { name: "Click the link below to join!", value: invite.code }
                    ).setTimestamp()
                    .setFooter(`Created by ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
                return message.channel.send({ embeds: [embed] });
            });
            break
        case "chess":
            if (!message.member.voice.channel) return message.channel.send('You need to be in a voice channel')
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'chess').then(async invite => {
                let embed = new MessageEmbed()
                    .setColor('RED')
                    .setTitle(`Chess Activity Created!`)
                    .addFields(
                        { name: "Click the link below to join!", value: invite.code }
                    ).setTimestamp()
                    .setFooter(`Created by ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
                return message.channel.send({ embeds: [embed] });
            });
            break
        case "betrayal":
            if (!message.member.voice.channel) return message.channel.send('You need to be in a voice channel')
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'betrayal').then(async invite => {
                let embed = new MessageEmbed()
                    .setColor('RED')
                    .setTitle(`Betrayal Activity Created!`)
                    .addFields(
                        { name: "Click the link below to join!", value: invite.code }
                    ).setTimestamp()
                    .setFooter(`Created by ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
                return message.channel.send({ embeds: [embed] });
            });
            break
        case "fishing":
            if (!message.member.voice.channel) return message.channel.send('You need to be in a voice channel')
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'fishing').then(async invite => {
                let embed = new MessageEmbed()
                    .setColor('RED')
                    .setTitle(`Fishing Activity Created!`)
                    .addFields(
                        { name: "Click the link below to join!", value: invite.code }
                    ).setTimestamp()
                    .setFooter(`Created by ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
                return message.channel.send({ embeds: [embed] });
            });
            break
        case "doodlecrew":
            if (!message.member.voice.channel) return message.channel.send('You need to be in a voice channel')
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'doodlecrew').then(async invite => {
                let embed = new MessageEmbed()
                    .setColor('RED')
                    .setTitle(`Doodlecrew Activity Created!`)
                    .addFields(
                        { name: "Click the link below to join!", value: invite.code }
                    ).setTimestamp()
                    .setFooter(`Created by ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
                return message.channel.send({ embeds: [embed] });
            });
            break
        case "wordsnack":
            if (!message.member.voice.channel) return message.channel.send('You need to be in a voice channel')
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'wordsnack').then(async invite => {
                let embed = new MessageEmbed()
                    .setColor('RED')
                    .setTitle(`Wordsnack Activity Created!`)
                    .addFields(
                        { name: "Click the link below to join!", value: invite.code }
                    ).setTimestamp()
                    .setFooter(`Created by ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
                return message.channel.send({ embeds: [embed] });
            });
            break
        case "lettertile":
            if (!message.member.voice.channel) return message.channel.send('You need to be in a voice channel')
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'lettertile').then(async invite => {
                let embed = new MessageEmbed()
                    .setColor('RED')
                    .setTitle(`Lettertile Activity Created!`)
                    .addFields(
                        { name: "Click the link below to join!", value: invite.code }
                    ).setTimestamp()
                    .setFooter(`Created by ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
                return message.channel.send({ embeds: [embed] });
            });
            break
    }
});

client.login(config.token);
