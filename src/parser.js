const assertStr = require('./assert-str')
const compose = require('./compose')
const { rxPage, rxRel } = require('./rx')
const { mapper, splitter } = require('./helpers')

const splitInSections = splitter(',')
const splitFields = mapper(splitter(';'))
const regexFields = mapper(section => {
  const page = Number(rxPage(section[0])[1])
  const rel = rxRel(section[1])[1]
  return [ page, rel ]
})

const composed = compose(regexFields, splitFields, splitInSections)

const parser = str => {
  assertStr(str)

  return composed(str)
    .reduce((acc, value, index) => {
      acc[value[1]] = value[0]

      return acc
    }, {})
}

module.exports = parser
