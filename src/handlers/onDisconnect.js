import { log } from '../utils/logger'

export default (err, code) => {
  log(`Disconnected [${'"' + err + '"' || 'code:' + code}]`)
}
