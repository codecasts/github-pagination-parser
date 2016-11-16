const assertStr = require('./assert-str')
const compose = require('./compose')
const { rxPage, rxRel } = require('./rx')
const { map, split, reduceToObject } = require('./helpers')

const mountObject = reduceToObject((acc, value) => Object.assign({ [value[1]]: value[0] }, acc))
const splitInSections = split(',')
const splitFields = map(split(';'))
const regexFields = map(section => {
  const page = Number(rxPage(section[0])[1])
  const rel = rxRel(section[1])[1]
  return [ page, rel ]
})

const parser = compose(mountObject, regexFields, splitFields, splitInSections)

module.exports = str => parser(assertStr(str))
