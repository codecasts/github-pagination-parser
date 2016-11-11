const map = (arr, fn) => arr.map(fn)
const split = (str, delimter) => str.split(delimter)
const mapper = fn => arr => map(arr, fn)
const splitter = delimiter => str => split(str, delimiter)

module.exports = { mapper, splitter }
