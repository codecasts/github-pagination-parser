const rxPage = /[?|&]page=(\d+)/
const rxRel = /rel="(.+)"/

const parser = str => str.split(',')
  .map(section => section.split(';'))
  .map(section => {
    const page = Number(rxPage.exec(section[0])[1])
    const rel = rxRel.exec(section[1])[1]
    return [ page, rel ]
  })
  .reduce((acc, value, index) => {
    acc[value[1]] = value[0]

    return acc
  }, {})

module.exports = parser
