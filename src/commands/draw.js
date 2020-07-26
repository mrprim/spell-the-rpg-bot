import { SpellRPGBag } from '@mrprim/tile-bag'
// import * as emojis from '../constants/emojis'
import roll from '../utils/roll'

// const emojiFormatter = v => emojis[v]
const letterFormatter = v => `**${v}**`

export default (msg, data) => {
  const args = data.split(/\s+/)

  const bag = new SpellRPGBag()
  const count = roll(args[0])
  const tiles = bag.draw(count).map(letterFormatter)

  msg.channel.send(`<@!${msg.member.id}> drew ${count} letters: ${tiles.join(' ')}`)
}
