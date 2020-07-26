import 'regenerator-runtime'
import Discord from 'discord.js'
import { token } from '../secrets/auth.json'
import onReady from './handlers/onReady'
import onDisconnect from './handlers/onDisconnect'
import onMessage from './handlers/onMessage'

const client = new Discord.Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES'] } })

client.on('ready', () => onReady(client))

client.on('message', onMessage)

client.on('disconnect', onDisconnect)

client.login(token)
