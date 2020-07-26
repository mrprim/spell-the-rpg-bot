import { read as fileread, write as filewrite } from '.'

const TYPE = 'guilds'
const EXTENSION = 'json'

export const initialValues = {}

const fileName = () => `${TYPE}.${EXTENSION}`

export const read = () => {
  const data = fileread(fileName())
  return data && JSON.parse(data)
}

export const write = data => {
  filewrite(fileName(), { ...initialValues, ...data })
}
