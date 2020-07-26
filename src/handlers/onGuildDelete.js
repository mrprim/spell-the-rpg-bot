import { log } from '../utils/logger'
import { read, write } from '../data/guilds'

export default guild => {
  log('Left a guild: ' + guild.name)
  const guilds = read()
  guilds[guild.id] = {
    ...guilds[guild.id],
    left: new Date().toISOString()
  }
  write(guilds)
}
