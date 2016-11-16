const { rxPage, rxRel } = require('./rx')
const { map, split, reduceToObject } = require('../support/helpers')

const mountObject = reduceToObject((acc, value) => Object.assign({ [value[1]]: value[0] }, acc))
const splitInSections = split(',')
const splitFields = map(split(';'))
const regexFields = map(section => {
  const page = Number(rxPage(section[0])[1])
  const rel = rxRel(section[1])[1]
  return [ page, rel ]
})

module.exports = { mountObject, splitInSections, splitFields, regexFields }
