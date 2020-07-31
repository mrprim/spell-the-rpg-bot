import { log } from '../utils/logger'
import { read, write } from '../data/guilds'

export default guild => {
  log('JOIN_GUILD', { guildName: guild.name, guildId: guild.id })
  const guilds = read() || {}
  guilds[guild.id] = {
    name: guild.name,
    joined: new Date().toISOString()
  }
  write(guilds)
}
