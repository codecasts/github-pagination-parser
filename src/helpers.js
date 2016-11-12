const map = (arr, fn) => arr.map(fn)
const split = (str, delimiter) => str.split(delimiter)
const mapper = fn => arr => map(arr, fn)
const splitter = delimiter => str => split(str, delimiter)

module.exports = { mapper, splitter }
