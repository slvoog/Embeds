import { ICommand } from "wokcommands";

export default {
    category: 'Configuration',
    description: 'Sets the bot status',

    minArgs: 1,
    expectedArgs: '<status>',

    slash: true,
    testOnly: true,

    ownerOnly: true,

    callback: ({ client, text, args }) => {
        client.user?.setPresence({
            status: 'dnd',
            activities: [
                {
                    name: text,
                    type: 'LISTENING'
                }
            ]
        })

        return 'Status has been updated to `' + text + '`.'
    }
} as ICommand