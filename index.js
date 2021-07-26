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
    if(args=="help"){
        let embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`There are 5 activities available:`)
        .setDescription('```youtube,chess,poker,betrayal,fishing```')
        return message.channel.send({embed});}
    if(args=="uptime"){
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
        const uptime = new Discord.MessageEmbed()
        .setColor('RED')
        .addField('UPTIME: ', `${days}days ${hours}hrs ${minutes}min ${seconds}sec`, true)	    
        .setTimestamp()
        return message.channel.send(uptime);
    }
    switch(args){
        case"youtube":
        if(!message.member.voice.channel) return message.channel.send('You need to be in a voice channel')
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
        if(!message.member.voice.channel) return message.channel.send('You need to be in a voice channel')
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
        if(!message.member.voice.channel) return message.channel.send('You need to be in a voice channel')
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
        if(!message.member.voice.channel) return message.channel.send('You need to be in a voice channel')
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
        if(!message.member.voice.channel) return message.channel.send('You need to be in a voice channel')
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
    }
});

client.login(config.token);