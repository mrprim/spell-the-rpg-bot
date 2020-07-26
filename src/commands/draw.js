import { SpellRPGBag } from '@mrprim/tile-bag'
import * as emojis from '../constants/emojis'
import roll from '../utils/roll'

export default (msg, data) => {
  const args = data.split(/\s+/)

  const bag = new SpellRPGBag()
  const count = roll(args[0])
  const tiles = bag.draw(count).map(v => emojis[v])

  msg.channel.send(`<@!${msg.client.user.id}> drew ${count} letters: ${tiles.join(' ')}`)
}
