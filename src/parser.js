const rxPage = /[?|&]page=(\d+)/
const rxRel = /rel="(.+)"/

const splitInSections = str => str.split(',')
const splitFields = section => section.split(';')
const regexFields = section => {
  const page = Number(rxPage.exec(section[0])[1])
  const rel = rxRel.exec(section[1])[1]
  return [ page, rel ]
}

const isString = str => typeof str === 'string'
const isEmpty = str => str.length === 0

const assertStr = str => {
  if (!isString(str)) {
    throw new Error('str must be a string')
  }

  if (isEmpty(str)) {
    throw new Error('str is a invalid string')
  }
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
