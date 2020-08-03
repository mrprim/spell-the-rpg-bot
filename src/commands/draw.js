import { SpellRPGBag } from '@mrprim/tile-bag'
// import * as emojis from '../constants/emojis'
import roll from '../utils/roll'

// const emojiFormatter = v => emojis[v]
const letterFormatter = v => `**${v}**`

export default (msg, data) => {
  const arg = data.split(/\s+/)[0]

  const bag = new SpellRPGBag()
  if (arg && !arg.match(/(^[0-9]+$)|(^[0-9]+d[0-9]+$)/)) {
    msg.reply(`\`${arg}\` is not a valid argument.  Draw argument must be in the form \`###\` or \`##d##\`.`)
    return
  }

  const count = roll(arg)
  const tiles = bag.draw(count).map(letterFormatter)

  msg.channel.send(`<@!${msg.member.id}> drew ${tiles.length} letters: ${tiles.join(' ')}`)
}
