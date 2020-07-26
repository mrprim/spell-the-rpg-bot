
export default input => {
  const args = input.split('d')
  const number = args[0] === 0 || args[0] || 1
  const sides = args[1] === 0 || args[1] || 1

  let result = 0
  for (let i = 0; i < (number); i++) {
    result += roll(sides)
  }

  return result
}

const roll = sides => Math.floor(Math.random() * Math.floor(sides)) + 1
