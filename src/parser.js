const assertStr = require('./assert-str')
const exec = (rx, str) => rx.exec(str)
const makeExec = rx => str => exec(rx, str)
const rxPage = makeExec(/[?|&]page=(\d+)/)
const rxRel = makeExec(/rel="(.+)"/)

const map = (arr, fn) => arr.map(fn)
const split = (str, delimter) => str.split(delimter)
const mapper = fn => arr => map(arr, fn)
const splitter = delimiter => str => split(str, delimiter)

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
