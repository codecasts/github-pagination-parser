const curry = require('./curry')

const map = curry((fn, arr) => arr.map(fn))
const reduce = curry((initialValue, fn, arr) => arr.reduce(fn, initialValue))
const split = curry((delimiter, str) => str.split(delimiter))
const reduceToObject = reduce({})

module.exports = { map, split, reduceToObject }
