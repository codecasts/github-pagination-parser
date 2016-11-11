const assertStr = require('./assert-str')
const { rxPage, rxRel } = require('./rx')
const { mapper, splitter } = require('./helpers')

const splitInSections = splitter(',')
const splitFields = mapper(splitter(';'))
const regexFields = mapper(section => {
  const page = Number(rxPage(section[0])[1])
  const rel = rxRel(section[1])[1]
  return [ page, rel ]
})

const parser = str => {
  assertStr(str)

  return regexFields(splitFields(splitInSections(str)))
    .reduce((acc, value, index) => {
      acc[value[1]] = value[0]

      return acc
    }, {})
}

module.exports = parser
