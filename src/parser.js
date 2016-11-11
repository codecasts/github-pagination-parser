const assertStr = require('./assert-str')
const rxPage = /[?|&]page=(\d+)/
const rxRel = /rel="(.+)"/
const splitInSections = str => str.split(',')
const splitFields = section => section.split(';')
const regexFields = section => {
  const page = Number(rxPage.exec(section[0])[1])
  const rel = rxRel.exec(section[1])[1]
  return [ page, rel ]
}


const parser = str => {
  assertStr(str)

  return splitInSections(str)
    .map(splitFields)
    .map(regexFields)
    .reduce((acc, value, index) => {
      acc[value[1]] = value[0]

      return acc
    }, {})
}

module.exports = parser
