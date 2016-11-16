const compose = function() {
  let fn = arguments
  let length = fn.length
  return function() {
    return (function form(arg) {
      return length ? form(fn[--length].apply(this, arguments)) : arg
    }).apply(this, arguments)
  }
}

module.exports = compose
