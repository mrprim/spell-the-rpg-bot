// import { log } from '../utils/logger'
import * as commands from '../commands'
import { read as readSettings, write as writeSettings } from '../data/settings'
import { read as readGuilds, write as writeGuilds } from '../data/guilds'
import { log, err } from '../utils/logger'

const isThisBot = msg => msg.member.id === msg.client.user.id

const getSettings = guildId => {
  const settings = readSettings(guildId)
  if (settings) {
    return settings
  }
  writeSettings(guildId)
  return readSettings(guildId)
}

const storeGuild = guild => {
  const guilds = readGuilds() || {}
  if (guilds[guild.id] && !guilds[guild.id].left) {
    return
  }

  guilds[guild.id] = {
    name: guild.name,
    joined: new Date().toISOString()
  }
  writeGuilds(guilds)
}

export default msg => {
  const settings = getSettings(msg.guild.id)
  storeGuild(msg.guild)

  if (isThisBot(msg)) {
    return
  }

  let valid = false
  const words = msg.content.split(/\s+/)

  if (words[0] && words[0].toLowerCase() === settings.commandPrefix) {
    valid = true
    words.shift()
  }

  if (words[0] === `<@!${msg.client.user.id}>` || words[0] === `<@${msg.client.user.id}>`) {
    valid = true
    words.shift()
  }

  if (valid) {
    const command = words[0] && words.shift().toLowerCase()

    if (!settings.active && command !== 'settings') {
      return
    }

    const data = words.join(' ')
    try {
      const handler = commands[command]

      if (!handler) {
        msg.reply(`[${command}] is not a valid command.  Type \`/spell help\` for instructions on available commands.`)
        err(msg.guild.id, msg.member.displayName, `[${command}] is not a valid command.`)
        return
      }

      log('ON_MESSAGE_COMMAND', { command, message: msg.content, guildId: msg.guild.id, channelId: msg.channel.id, username: msg.member.displayName })

      handler(msg, data)
    } catch (e) {
      err('ON_MESSAGE_ERROR', { error: e, message: msg.content, guildId: msg.guild.id, channelId: msg.channel.id, username: msg.member.displayName })
    }
  }
}
