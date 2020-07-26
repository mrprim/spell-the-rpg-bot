export default msg => {
  let message = 'this bot is designed for playing __**Spell: the RPG**__ from Whimsy Machine Games'
  message += ' (<https://whimsymachinegames.com/2019/08/29/spell-the-rpg/>).\n\n'
  message += 'To draw letter tiles send one of the following messages:'
  message += '```\n'
  message += '/spell draw <# of tiles>\n'
  message += '```'
  message += ' or '
  message += '```\n'
  message += '/spell draw <# of dice>d6\n'
  message += '```\n'
  message += 'Questions or comments?  Email spell.rpg.bot@gmail.com'
  msg.reply(message)
}
