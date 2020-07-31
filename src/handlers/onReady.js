import { log } from '../utils/logger'

export default client => {
  log('BOT_READY')

  client.user.setPresence({
    activity: {
      type: 'LISTENING',
      name: '"/spell help"'
    }
  })
}
