const guilds = require('../storage/guilds.json')

const guildsArray = Object.entries(guilds)

console.log('TOTAL GUILDS', guildsArray.length)
console.log('')

console.log(JSON.stringify(guildsArray.map(([id, data]) => data.name), null, 2))
