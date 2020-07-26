import roll from './roll'

describe('roll', () => {
  it('roll', () => {
    const result6 = roll('6')
    const resultD6 = roll('d6')
    const result1D6 = roll('1d6')
    const result3D6 = roll('3d6')

    expect(result6 === 6).toBeTruthy()
    expect(resultD6 >= 1 && resultD6 <= 6).toBeTruthy()
    expect(result1D6 >= 1 && result1D6 <= 6).toBeTruthy()
    expect(result3D6 >= 1 && result3D6 <= 18).toBeTruthy()
  })
})
