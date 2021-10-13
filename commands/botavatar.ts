import { ICommand } from "wokcommands";
import { Client } from "discord.js";

export default {
    category: 'Testing',
    description: 'Send bots avatar URL',

    slash: false,
    testOnly: true,

    ownerOnly: true,

    callback: ({ client, text, channel }) => {
        var botavatar = client.user?.avatar
        var botid = client.user?.id
        return `<https://cdn.discordapp.com/avatars/${botid}/${botavatar}.webp>`
    }
} as ICommand