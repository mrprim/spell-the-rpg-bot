import { log } from '../utils/logger'
import { read, write } from '../data/guilds'

export default guild => {
  log('Joined a new guild: ' + guild.name)
  const guilds = read() || {}
  guilds[guild.id] = {
    name: guild.name,
    joined: new Date().toISOString()
  }
  write(guilds)
}
