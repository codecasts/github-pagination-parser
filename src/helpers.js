const curry = require('./curry')

const map = curry((fn, arr) => arr.map(fn))
const split = curry((delimiter, str) => str.split(delimiter))

module.exports = { map, split }
