import { createLogger, transports } from 'winston'

const logger = createLogger({
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/log' })
  ]
})

const now = () => new Date().toISOString()

export const log = (action, data = {}) => logger.log({ ...data, ts: now(), level: 'info', action })

export const err = (action, data = {}) => logger.log({ ...data, ts: now(), level: 'error', action })
