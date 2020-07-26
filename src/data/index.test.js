import { read, write, remove } from './'

describe('storage', () => {
  describe('storage.read', () => {
    it('should write and retrieve a file', () => {
      const data = { test: 'A' }
      write('tmp.test.json', data)
      expect(read('tmp.test.json')).toEqual('{"test":"A"}')
      remove('tmp.test.json')
      expect(read('tmp.test.json')).toBeFalsy()
    })
  })
})
