import 'regenerator-runtime'
import Discord from 'discord.js'
import { token } from '../secrets/auth.json'
import onReady from './handlers/onReady'
import onDisconnect from './handlers/onDisconnect'
import onMessage from './handlers/onMessage'
import onGuildCreate from './handlers/onGuildCreate'
import onGuildDelete from './handlers/onGuildDelete'

const client = new Discord.Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES'] } })

client.on('ready', () => onReady(client))

client.on('message', onMessage)

client.on('disconnect', onDisconnect)

client.on('guildCreate', onGuildCreate)

client.on('guildDelete', onGuildDelete)

client.login(token)
