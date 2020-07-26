import 'regenerator-runtime'
import onMessage from './onMessage'

describe('onMessage', () => {
  it('handle', () => {
    const msg = {
      ...testMsg,
      content: 'fcd help'
    }
    onMessage(msg)
  })
})

const testMsg = {
  channel: {
    id: 3,
    send: (...x) => console.log(...x)
  },
  client: { user: { id: 2 } },
  member: { id: 1 },
  content: '',
  reply: (...x) => console.log(...x)
}
