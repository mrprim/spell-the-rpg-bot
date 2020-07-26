import { read as fileread, write as filewrite, remove as fileRemove } from '.'

const TYPE = 'server-settings'
const EXTENSION = 'json'

export const initialValues = {
  active: true,
  commandPrefix: '/fc'
}

const fileName = serverId => `${serverId}.${TYPE}.${EXTENSION}`

export const read = serverId => {
  const data = fileread(fileName(serverId))
  return data && JSON.parse(data)
}

export const write = (serverId, data) => {
  filewrite(fileName(serverId), { ...initialValues, ...data })
}

export const remove = () => fileRemove(fileName)
