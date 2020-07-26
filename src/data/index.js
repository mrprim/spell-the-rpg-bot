import fs from 'fs'
import path from 'path'

export const cache = {}

export const read = (filename, ignoreCache) => {
  if (cache[filename] && !ignoreCache) {
    return cache[filename]
  }

  const location = path.resolve(__dirname, '../../storage/', filename)
  const options = { encoding: 'utf8', flag: 'r' }

  try {
    const file = fs.readFileSync(location, options)
    cache[filename] = file
    return file
  } catch (e) {
    return ''
  }
}

export const write = (filename, contents) => {
  if (typeof contents === 'object') {
    contents = JSON.stringify(contents)
  }

  cache[filename] = contents

  const location = path.resolve(__dirname, '../../storage/', filename)
  const options = { encoding: 'utf8' }
  return fs.writeFileSync(location, contents, options)
}

export const remove = filename => {
  delete cache[filename]
  const location = path.resolve(__dirname, '../../storage/', filename)
  return fs.unlinkSync(location)
}
