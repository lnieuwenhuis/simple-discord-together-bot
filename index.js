const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")
const { DiscordTogether } = require('discord-together');

client.once('ready', () => {
	console.log('Bot is online!');
});

client.discordTogether = new DiscordTogether(client);

client.on('message', async message => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;
    const args = message.content.slice(config.prefix.length)
    if(args[1]==!undefined) return
    if(!message.member.voice.channel) return message.channel.send('You need to be in a voice channel')
    switch(args){
        case"youtube":
        client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
            let embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`Youtube Activity Created!`)
            .addFields(
                {name:"Click the link below to join!",value:invite.code}
            ).setTimestamp()
            .setFooter(`Created by ${message.author.username}#${message.author.discriminator}`,message.author.displayAvatarURL())
            return message.channel.send({embed});
        });
        break
        case"poker":
        client.discordTogether.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
            let embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`Poker Activity Created!`)
            .addFields(
                {name:"Click the link below to join!",value:invite.code}
            ).setTimestamp()
            .setFooter(`Created by ${message.author.username}#${message.author.discriminator}`,message.author.displayAvatarURL())
            return message.channel.send({embed});
        });
        break
        case"chess":
        client.discordTogether.createTogetherCode(message.member.voice.channelID, 'chess').then(async invite => {
            let embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`Chess Activity Created!`)
            .addFields(
                {name:"Click the link below to join!",value:invite.code}
            ).setTimestamp()
            .setFooter(`Created by ${message.author.username}#${message.author.discriminator}`,message.author.displayAvatarURL())
            return message.channel.send({embed});
        });
        break
        case"betrayal":
        client.discordTogether.createTogetherCode(message.member.voice.channelID, 'betrayal').then(async invite => {
            let embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`Betrayal Activity Created!`)
            .addFields(
                {name:"Click the link below to join!",value:invite.code}
            ).setTimestamp()
            .setFooter(`Created by ${message.author.username}#${message.author.discriminator}`,message.author.displayAvatarURL())
            return message.channel.send({embed});
        });
        break
        case"fishing":
        client.discordTogether.createTogetherCode(message.member.voice.channelID, 'fishing').then(async invite => {
            let embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`Fishing Activity Created!`)
            .addFields(
                {name:"Click the link below to join!",value:invite.code}
            ).setTimestamp()
            .setFooter(`Created by ${message.author.username}#${message.author.discriminator}`,message.author.displayAvatarURL())
            return message.channel.send({embed});
        });
        break
        case"help":
        let embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`There are 5 activities available:`)
        .setDescription('```youtube,chess,poker,betrayal,fishing```')
        return message.channel.send({embed});
    }
});

client.login(config.token);