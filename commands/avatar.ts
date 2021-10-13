import { Channel, MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Configuration',
    description: 'Sets the bot avatar',

    minArgs: 1,
    expectedArgs: '<avatar>',

    slash: false,
    testOnly: true,

    ownerOnly: true,

    callback: ({ client, text, channel }) => {
        client.user?.setAvatar(text)
        const embed = new MessageEmbed()
            .setColor('BLURPLE')
            .setTitle('Bot Avatar Changed!')
            .setDescription('Changed bot avatar to \n[[click]](' + text + ')')
        return({
            embeds: [embed]
        })
        
    }
} as ICommand
