'use strict'
// https://github.com/AdhityaRamadhanus/CurryJs
module.exports = function curry (fn) {
  if (fn == null) throw new Error('Function not provided')
  var argLength = fn.length
  return function curryOne (a) {
    if (a == null) throw new Error('No Arguments')
    if (argLength-1 === 0) return fn(a)
    return curry(fn.bind(fn, a))
  }
}
