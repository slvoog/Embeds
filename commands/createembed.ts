import { Channel, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'General',
    description: 'Sends an embed',

    minArgs: 1,
    expectedArgs: '<json>',

    permissions: ['MANAGE_MESSAGES'],
    slash: 'both',
    testOnly: false,

    callback: async ({message, text, channel}) => {
        const json = JSON.parse(text)

        const embed = new MessageEmbed(json)

        channel.send({
            embeds: [embed]
        })
        return

        // const embed = new MessageEmbed()
        //     .setDescription("Hello world")
        //     .setTitle('Title')
        //     .setColor('RED')
        //     .setAuthor('svloogz')
        //     .setFooter('Footer')
        //     .addFields([{
        //         name: 'name',
        //         value: 'value',
        //         inline: true,
        //     },
        //     {
        //         name: 'name2',
        //         value: 'value2',
        //         inline: true,
        //     }])
        //     .addField('name3', 'value3')

        // return embed
    }
} as ICommand