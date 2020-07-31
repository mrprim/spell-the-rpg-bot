import { err } from '../utils/logger'

export default (error, code) => {
  err('BOT_DISCONNECTED', { error, code })
}
