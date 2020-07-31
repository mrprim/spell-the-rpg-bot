const lineReader = require('line-reader')
const moment = require('moment')

lineReader.eachLine('./logs/log', function (line) {
  try {
    const val = JSON.parse(line)
    handleLine(val)
  } catch {
    log('???')
    log(colors.DIM, line)
  }
  console.log()
})

const handleLine = ({ ts, level, action = '???', username = '', ...data }) => {
  const header = []
  header.push(colors.FG_GREEN)
  header.push(moment(ts).fromNow())
  header.push(level === 'error' ? colors.FG_RED : colors.RESET)
  header.push(action)
  header.push(colors.FG_CYAN)
  header.push(username)
  log(...header)

  Object.entries(data).map(([k, v]) => log(colors.DIM, k, ':', v))
}

const log = (...x) => console.log(colors.RESET, ...(x.map(z => z || '')))

const colors = {
  RESET: '\x1b[0m',
  BRIGHT: '\x1b[1m',
  DIM: '\x1b[2m',
  UNDERSCORE: '\x1b[4m',
  BLINK: '\x1b[5m',
  REVERSE: '\x1b[7m',
  HIDDEN: '\x1b[8m',
  FG_BLACK: '\x1b[30m',
  FG_RED: '\x1b[31m',
  FG_GREEN: '\x1b[32m',
  FG_YELLOW: '\x1b[33m',
  FG_BLUE: '\x1b[34m',
  FG_MAGENTA: '\x1b[35m',
  FG_CYAN: '\x1b[36m',
  FG_WHITE: '\x1b[37m',
  BG_BLACK: '\x1b[40m',
  BG_RED: '\x1b[41m',
  BG_GREEN: '\x1b[42m',
  BG_YELLOW: '\x1b[43m',
  BG_BLUE: '\x1b[44m',
  BG_MAGENTA: '\x1b[45m',
  BG_CYAN: '\x1b[46m',
  BG_WHITE: '\x1b[47m'
}
