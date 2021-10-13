import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'imposter',

    slash: true,
    guildOnly: true,
    ownerOnly: true,
    permission: 'ADMINISTRATOR',
    hidden: true,
    
    callback: ({ client, message, text }) => {
        return '<:dynoError:696561633425621078> This command is not registered properly.'
    }
} as ICommand