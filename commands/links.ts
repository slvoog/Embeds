import { Channel, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'General',
    description: 'Generates an invite link for the bot',

    slash: 'both',

    callback: ({ client, message, text, channel }) => {
        var botavatar = client.user?.avatar
        var botid = client.user?.id
        var botavatarurl = `https://cdn.discordapp.com/avatars/${botid}/${botavatar}.webp`
        const embed = new MessageEmbed()
            .setColor('BLURPLE')
            .setAuthor('Embeds', `${botavatarurl}`)
            .setTitle('Links')
            .setDescription('**Discord Support Server**\n[Coming Soon](https://discord)\n**Bot Invite**\n[Click](https://discord.com/api/oauth2/authorize?client_id=895275195810603018&permissions=536804850935&scope=bot%20applications.commands)')
        return embed
    }
} as ICommand