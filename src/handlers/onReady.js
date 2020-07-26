import { log } from '../utils/logger'

export default client => {
  log('Spell: the RPG Bot is Online')

  client.user.setPresence({
    activity: {
      type: 'LISTENING',
      name: '"/spell help"'
    }
  })
}
