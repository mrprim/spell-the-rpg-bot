const PREFIX = '🔠'
const ERR_PREFIX = '❌'

const now = () => new Date().toISOString()

const print = (...msg) => console.log(now(), ...msg)

export const log = (...msg) => print(PREFIX, msg.join(' '))

export const err = (...msg) => print(ERR_PREFIX, msg.join(' '))

export const request = (user, userID, msg) => log(`Incoming Message from ${user}:${userID} - "${msg}"`)
