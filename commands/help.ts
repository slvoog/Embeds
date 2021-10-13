import { MessageActionRow, MessageButton, MessageEmbed, Client } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'General',
    description: 'Help Command',

    slash: false,
    testOnly: false,

    callback: async ({ interaction: msgInt, channel, client }) => {
        var botavatar = client.user?.avatar
        var botid = client.user?.id
        var botavatarurl = `https://cdn.discordapp.com/avatars/${botid}/${botavatar}.webp`
        const row = new MessageActionRow()
             .addComponents(
                 new MessageButton()
                    .setCustomId('jsongen')
                    .setStyle('LINK')
                    .setLabel('JSON Generator')
                    .setURL('https://embedbuilder.cf/json.html')
             )
        const embed = new MessageEmbed()
             .setDescription('**Welcome to the Embeds bot!**\n**Prefix: `=`**\n\nTo create an embed, just type `=createembed {SOME_JSON_TEXT}`\nClick [**here**](https://embedbuilder.cf/json.html) for an embed JSON generator.')
             .setTitle('Help')
             .setColor('BLURPLE')
             .setAuthor('Embeds', `${botavatarurl}`)

        channel.send({
            embeds: [embed],
        })
    }
} as ICommand