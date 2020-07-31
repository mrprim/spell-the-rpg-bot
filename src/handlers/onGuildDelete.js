import { log } from '../utils/logger'
import { read, write } from '../data/guilds'

export default guild => {
  log('LEAVE_GUILD', { guildId: guild.id })
  const guilds = read()
  guilds[guild.id] = {
    ...guilds[guild.id],
    left: new Date().toISOString()
  }
  write(guilds)
}
