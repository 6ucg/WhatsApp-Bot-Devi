import BaseCommand from '../../libs/BaseCommand.js'

export default class Command extends BaseCommand {
    constructor(client, handler) {
        super(client, handler, {
            command: 'Repo',
            category: 'core',
            description: {
                content: 'https://github.com/6ucg/WhatsApp-Bot-Devi.git'
            },
            dm: true,
            exp: 10
        })
    }

    exec = async (M) => {
        const { open_issues_count, forks_count, stargazers_count, updated_at } = await this.client.util.fetch(
            `https://api.github.com/repos/6ucg/WhatsApp-Bot-Devi`
        )
        return void (await M.replyRaw({
            text: '*https://github.com/6ucg/WhatsApp-Bot-Devi.git*',
            contextInfo: {
                externalAdReply: {
                    title: `Updated at ${updated_at}`,
                    body: `openIssues: ${open_issues_count}\nForks: ${forks_count}\nStars: ${stargazers_count}`,
                    thumbnail: await this.client.util.fetchBuffer('https://i.imgur.com/22WppSh.jpg'),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'https://github.com/6ucg/WhatsApp-Bot-Devi.git',
                    ShowAdAttribution: true
                }
            }
        }))
    }
}
