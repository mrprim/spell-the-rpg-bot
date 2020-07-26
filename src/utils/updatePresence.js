import { read } from '../data/settings'

export default client => {
  const settings = read(client.guild.id)

  if (settings.active) {
    client.user.setPresence({
      status: 'online',
      afk: true,
      activity: {
        name: 'with Your Lives'
      }
    })
  } else {
    client.user.setPresence({
      status: 'idle',
      afk: true,
      activity: {
        name: 'by Myself'
      }
    })
  }
}
